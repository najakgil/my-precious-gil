"use client";

import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

import { useMutation, useRedo, useStorage, useUndo } from "@/liveblocks.config";
import {
  handleCanvaseMouseMove,
  handleCanvasMouseDown,
  handleCanvasMouseUp,
  handleCanvasObjectModified,
  handleCanvasObjectMoving,
  handleCanvasObjectScaling,
  handleCanvasSelectionCreated,
  handleCanvasZoom,
  handlePathCreated,
  handleResize,
  initializeFabric,
  renderCanvas,
} from "@/lib/canvas";
import { handleDelete, handleKeyDown } from "@/lib/key-events";
import { LeftSidebar, Live, Navbar, RightSidebar } from "@/components/index";
import { handleImageUpload } from "@/lib/shapes";
import { defaultNavElement } from "@/constants";
import { ActiveElement, Attributes } from "@/types/type";
import { handleCharacterUpload } from "@/lib/characters";
import { SlangList } from "@/constants/slang-list";

const Home = () => {
  const [isSlangUsed, setIsSlangUsed] = useState(false);
  const undo = useUndo();
  const redo = useRedo();
  const canvasObjects = useStorage((root) => root.canvasObjects);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>(null);
  const characterRef = useRef<fabric.Object | null>(null);
  const selectedCharacterRef = useRef<string | null>(null);
  const stickerRef = useRef<fabric.Object | null>(null);
  const selectedStickerRef = useRef<string | null>(null);
  const activeObjectRef = useRef<fabric.Object | null>(null);
  const isEditingRef = useRef(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // TO DO : alert 대신 토스트로 변경
  useEffect(() => {
    if (isSlangUsed) {
      alert('비속어 탐지');
    }
    setIsSlangUsed(false);
  }, [isSlangUsed]);

  // [네비게이션] 네이비게이션 요소
  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });

  // [캔버스] 캔버스 요소
  const [elementAttributes, setElementAttributes] = useState<Attributes>({
    width: "",
    height: "",
    fontSize: "",
    fontFamily: "",
    fontWeight: "",
    fill: "#198afa",
    stroke: "#198afa",
  });

  // 삭제
  const deleteShapeFromStorage = useMutation(({ storage }, shapeId) => {
    const canvasObjects = storage.get("canvasObjects");
    canvasObjects.delete(shapeId);
  }, []);

  // 초기화
  const deleteAllShapes = useMutation(({ storage }) => {
    const canvasObjects = storage.get("canvasObjects");

    if (!canvasObjects || canvasObjects.size === 0) return true;

    const objectsArray = Array.from(canvasObjects.entries());

    for (const [key, value] of objectsArray) {
      canvasObjects.delete(key);
    }

    return canvasObjects.size === 0;
  }, []);

  // 도형 동기화
  const syncShapeInStorage = useMutation(({ storage }, object) => {
    if (!object) return;
    const { objectId } = object;

    const shapeData = object.toJSON();
    shapeData.objectId = objectId;

    const canvasObjects = storage.get("canvasObjects");
    canvasObjects.set(objectId, shapeData);
  }, []);

  // [네비게이션] 활성화된 네비게이션 요소
  const handleActiveElement = (elem: ActiveElement) => {
    setActiveElement(elem);

    switch (elem?.value) {
      case "reset":
        deleteAllShapes();
        fabricRef.current?.clear();
        setActiveElement(defaultNavElement);
        break;

      case "delete":
        handleDelete(fabricRef.current as any, deleteShapeFromStorage);
        setActiveElement(defaultNavElement);
        break;

      case "image":
        imageInputRef.current?.click();
        isDrawing.current = false;

        if (fabricRef.current) {
          fabricRef.current.isDrawingMode = false;
        }
        break;

      case "comments":
        break;

      default:
        selectedShapeRef.current = elem?.value as string;
        break;
    }
  };

  useEffect(() => {
    // 캔버스 초기화
    const canvas = initializeFabric({
      canvasRef,
      fabricRef,
    });

    // [캔버스] 마우스 클릭
    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
        characterRef,
        stickerRef,
        selectedCharacterRef,
        selectedStickerRef,
      });
    });

    // [캔버스] 마우스 이동
    canvas.on("mouse:move", (options) => {
      handleCanvaseMouseMove({
        options,
        canvas,
        isDrawing,
        selectedShapeRef,
        shapeRef,
        syncShapeInStorage,
        selectedCharacterRef,
        selectedStickerRef,
      });
    });

    // [캔버스] 마우스 업
    canvas.on("mouse:up", () => {
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        shapeRef,
        activeObjectRef,
        selectedShapeRef,
        syncShapeInStorage,
        setActiveElement,
        characterRef,
        stickerRef,
        selectedCharacterRef,
        selectedStickerRef,
      });
    });

    // [캔버스] 도형 생성
    canvas.on("path:created", (options) => {
      handlePathCreated({
        options,
        syncShapeInStorage,
      });
    });

    // [캔버스] 도형 수정
    canvas.on("object:modified", (options) => {
      handleCanvasObjectModified({
        options,
        syncShapeInStorage,
      });
    });

    // [캔버스] 도형 이동
    canvas?.on("object:moving", (options) => {
      handleCanvasObjectMoving({
        options,
      });
    });

    // [캔버스] 선택된 도형
    canvas.on("selection:created", (options) => {
      const isSlang = (textValue: string) => {
        if (!textValue) return false;
        return SlangList.some((slang) => textValue.includes(slang));
      };
      handleCanvasSelectionCreated({
        options,
        isEditingRef,
        setElementAttributes,
      });
      // @ts-ignore
      const containsSlang = isSlang(options?.selected[0]?.text);
      setIsSlangUsed(containsSlang);
      console.log('Slang detected:', containsSlang);
    });

    // [캔버스] 도형 크기 조정
    canvas.on("object:scaling", (options) => {
      handleCanvasObjectScaling({
        options,
        setElementAttributes,
      });
    });

    // [캔버스] 마우스 휠
    canvas.on("mouse:wheel", (options) => {
      handleCanvasZoom({
        options,
        canvas,
      });
    });

    //
    window.addEventListener("resize", () => {
      handleResize({
        canvas: fabricRef.current,
      });
    });

    window.addEventListener("keydown", (e) =>
      handleKeyDown({
        e,
        canvas: fabricRef.current,
        undo,
        redo,
        syncShapeInStorage,
        deleteShapeFromStorage,
      }),
    );

    return () => {
      canvas.dispose();

      window.removeEventListener("resize", () => {
        handleResize({
          canvas: null,
        });
      });

      window.removeEventListener("keydown", (e) =>
        handleKeyDown({
          e,
          canvas: fabricRef.current,
          undo,
          redo,
          syncShapeInStorage,
          deleteShapeFromStorage,
        }),
      );
    };
  }, [canvasRef]);

  useEffect(() => {
    renderCanvas({
      fabricRef,
      canvasObjects,
      activeObjectRef,
    });
  }, [canvasObjects]);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar
        imageInputRef={imageInputRef}
        activeElement={activeElement}
        handleImageUpload={(e: any) => {
          e.stopPropagation();

          handleImageUpload({
            file: e.target.files[0],
            canvas: fabricRef as any,
            shapeRef,
            syncShapeInStorage,
          });
        }}
        handleCharacterUpload={(imgUrl: string) => {
          handleCharacterUpload({
            imgUrl,
            canvas: fabricRef as any,
            shapeRef,
            syncShapeInStorage,
          });
        }}
        handleStickerUpload={(imgUrl: string) => {
          handleCharacterUpload({
            imgUrl,
            canvas: fabricRef as any,
            shapeRef,
            syncShapeInStorage,
          });
        }}
        handleActiveElement={handleActiveElement}
      />

      <section className="flex h-full flex-row">
        <LeftSidebar allShapes={Array.from(canvasObjects)} />

        <Live canvasRef={canvasRef} undo={undo} redo={redo} />

        <RightSidebar
          elementAttributes={elementAttributes}
          setElementAttributes={setElementAttributes}
          fabricRef={fabricRef}
          isEditingRef={isEditingRef}
          activeObjectRef={activeObjectRef}
          syncShapeInStorage={syncShapeInStorage}
        />
      </section>
    </main>
  );
};

export default Home;
