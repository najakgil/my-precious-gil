import { CharacterUpload, StickerUpload } from "@/types/type";
import { fabric } from "fabric";
import { v4 as uuidv4 } from "uuid"; // Add this line

export const handleCharacterUpload = ({
  imgUrl,
  canvas,
  shapeRef,
  syncShapeInStorage,
}: CharacterUpload) => {
  const filePath = imgUrl;

  fabric.Image.fromURL(filePath as string, (img) => {
    img.scaleToWidth(200);
    img.scaleToHeight(200);

    canvas.current?.add(img);

    // @ts-ignore
    img.objectId = uuidv4();

    shapeRef.current = img;

    syncShapeInStorage(img);
    canvas.current?.requestRenderAll();
  });
};

export const handleStickerUpload = ({
  imgUrl,
  canvas,
  shapeRef,
  syncShapeInStorage,
}: StickerUpload) => {
  const filePath = imgUrl;

  fabric.Image.fromURL(filePath, (img) => {
    img.scaleToWidth(10);
    img.scaleToHeight(10);

    canvas.current?.add(img);

    // @ts-ignore
    img.objectId = uuidv4();

    shapeRef.current = img;

    syncShapeInStorage(img);
    canvas.current?.requestRenderAll();
  });
};
