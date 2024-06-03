import jsPDF from "jspdf";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

const adjectives = [
  "Happy",
  "Creative",
  "Energetic",
  "Lively",
  "Dynamic",
  "Radiant",
  "Joyful",
  "Vibrant",
  "Cheerful",
  "Sunny",
  "Sparkling",
  "Bright",
  "Shining",
];

const animals = [
  "Dolphin",
  "Tiger",
  "Elephant",
  "Penguin",
  "Kangaroo",
  "Panther",
  "Lion",
  "Cheetah",
  "Giraffe",
  "Hippopotamus",
  "Monkey",
  "Panda",
  "Crocodile",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomName(): string {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return `${randomAdjective} ${randomAnimal}`;
}

export const getShapeInfo = (shapeType: string) => {
  switch (shapeType) {
    case "rect":
      return {
        icon: "/assets/rectangle.svg",
        name: "Rectangle",
      };

    case "circle":
      return {
        icon: "/assets/circle.svg",
        name: "Circle",
      };

    case "triangle":
      return {
        icon: "/assets/triangle.svg",
        name: "Triangle",
      };

    case "line":
      return {
        icon: "/assets/line.svg",
        name: "Line",
      };

    case "i-text":
      return {
        icon: "/assets/text.svg",
        name: "Text",
      };

    case "image":
      return {
        icon: "/assets/image.svg",
        name: "Image",
      };

    case "freeform":
      return {
        icon: "/assets/freeform.svg",
        name: "Free Drawing",
      };

    default:
      return {
        icon: "/assets/rectangle.svg",
        name: shapeType,
      };
  }
};

export const exportToPdf = () => {
  const canvas = document.querySelector("canvas");

  if (!canvas) return;

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  const data = canvas.toDataURL();

  doc.addImage(data, "PNG", 0, 0, canvas.width, canvas.height);

  doc.save("canvas.pdf");
};

export const exportToPng = () => {
  const canvas = document.querySelector("canvas");

  if (!canvas) return;

  // 임시 캔버스를 생성하여 배경색을 설정하고 원본 캔버스를 복사
  const tempCanvas = document.createElement("canvas");
  const context = tempCanvas.getContext("2d");

  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  // 배경색 설정
  // @ts-ignore
  context.fillStyle = "white";
  // @ts-ignore
  context.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // 원본 캔버스의 내용을 임시 캔버스로 복사
  // @ts-ignore
  context.drawImage(canvas, 0, 0);

  // 임시 캔버스의 데이터를 PNG 포맷으로 변환
  const dataURL = tempCanvas.toDataURL("image/png");

  // 다운로드를 위한 a 태그 생성
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "najakgil.png";

  // a 태그 클릭 이벤트 트리거
  link.click();
};
