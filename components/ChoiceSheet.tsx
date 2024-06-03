import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import { characterElements, stickerElements } from "@/constants";
import { ChoiceSheetProps } from "@/types/type";

export default function ChoiceSheet({
  item,
  handleCharacterUpload,
  handleStickerUpload,
}: ChoiceSheetProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="relative w-5 h-5 object-contain">
            <Image src={item.icon} alt={item.name} fill />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="w-full bg-white rounded-t-lg p-10"
        >
          <SheetHeader className="flex justify-center items-start">
            <SheetTitle>{item.name}</SheetTitle>
          </SheetHeader>
          <div className="flex justify-center items-center">
            {item.value === "character" ? (
              <div className="grid grid-cols-12">
                {characterElements.map((elem) => (
                  <SheetClose asChild key={elem.id}>
                    <Image
                      key={elem.id}
                      src={elem.imgUrl}
                      alt={elem.name}
                      width={200}
                      height={200}
                      className="cursor-pointer"
                      onClick={() => {
                        handleCharacterUpload(elem.imgUrl);
                      }}
                    />
                  </SheetClose>
                ))}
              </div>
            ) : (
              <div className="flex">
                {stickerElements.map((elem) => (
                  <SheetClose asChild key={elem.id}>
                    <Image
                      key={elem.id}
                      src={elem.imgUrl}
                      alt={elem.name}
                      width={100}
                      height={100}
                      className="cursor-pointer"
                      onClick={() => {
                        handleStickerUpload(elem.imgUrl);
                      }}
                    />
                  </SheetClose>
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
