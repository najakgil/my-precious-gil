export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const shapeElements = [
  {
    icon: "/assets/rectangle.svg",
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: "/assets/circle.svg",
    name: "Circle",
    value: "circle",
  },
  {
    icon: "/assets/triangle.svg",
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: "/assets/line.svg",
    name: "Line",
    value: "line",
  },
  {
    icon: "/assets/image.svg",
    name: "Image",
    value: "image",
  },
  {
    icon: "/assets/freeform.svg",
    name: "Free Drawing",
    value: "freeform",
  },
];

export const loaderElements = [
  { gif: "/loader/loader_1.gif", name: "Loader 1", color: "#FBFBFB" },
  { gif: "/loader/loader_2.gif", name: "Loader 2", color: "#FBFBFB" },
  { gif: "/loader/loader_3.gif", name: "Loader 3", color: "#FBFBFB" },
  { gif: "/loader/loader_4.gif", name: "Loader 4", color: "#268FF7" },
  { gif: "/loader/loader_5.gif", name: "Loader 5", color: "#83BFF" },
];

export const navElements = [
  {
    icon: "/assets/select.svg",
    name: "Select",
    value: "select",
  },
  {
    icon: "/assets/character.svg",
    name: "Character",
    value: "character",
  },
  {
    icon: "/assets/sticker.svg",
    name: "Sticker",
    value: "sticker",
  },
  {
    icon: "/assets/rectangle.svg",
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: "/assets/text.svg",
    value: "text",
    name: "Text",
  },
  {
    icon: "/assets/delete.svg",
    value: "delete",
    name: "Delete",
  },
  {
    icon: "/assets/reset.svg",
    value: "reset",
    name: "Reset",
  },
  {
    icon: "/assets/comments.svg",
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: "/assets/select.svg",
  name: "Select",
  value: "select",
};

export const directionOptions = [
  { label: "Bring to Front", value: "front", icon: "/assets/front.svg" },
  { label: "Send to Back", value: "back", icon: "/assets/back.svg" },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Brush Script MT", label: "Brush Script MT" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "500",
    label: "Semibold",
  },
  {
    value: "600",
    label: "Bold",
  },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: "/assets/align-left.svg" },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: "/assets/align-horizontal-center.svg",
  },
  { value: "right", label: "Align Right", icon: "/assets/align-right.svg" },
  { value: "top", label: "Align Top", icon: "/assets/align-top.svg" },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: "/assets/align-vertical-center.svg",
  },
  { value: "bottom", label: "Align Bottom", icon: "/assets/align-bottom.svg" },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];

export const characterElements = [
  {
    id: 1,
    imgUrl: "/character/fhanbok-1.png",
    name: "FHanbok 1",
  },
  {
    id: 2,
    imgUrl: "/character/fhanbok-2.png",
    name: "FHanbok 2",
  },
  {
    id: 3,
    imgUrl: "/character/fhanbok-3.png",
    name: "FHanbok 3",
  },
  {
    id: 4,
    imgUrl: "/character/fhanbok-4.png",
    name: "FHanbok 4",
  },
  {
    id: 5,
    imgUrl: "/character/mhanbok-1.png",
    name: "MHanbok 1",
  },
  {
    id: 6,
    imgUrl: "/character/mhanbok-2.png",
    name: "MHanbok 2",
  },
  {
    id: 7,
    imgUrl: "/character/mhanbok-3.png",
    name: "MHanbok 3",
  },
  {
    id: 8,
    imgUrl: "/character/mhanbok-4.png",
    name: "MHanbok 4",
  },
  {
    id: 9,
    imgUrl: "/character/graduationsuit-1.png",
    name: "Graduation Suit 1",
  },
  {
    id: 10,
    imgUrl: "/character/graduationsuit-2.png",
    name: "Graduation Suit 2",
  },
  {
    id: 11,
    imgUrl: "/character/graduationsuit-3.png",
    name: "Graduation Suit 3",
  },
  {
    id: 12,
    imgUrl: "/character/graduationsuit-4.png",
    name: "Graduation Suit 4",
  },
  {
    id: 13,
    imgUrl: "/character/scrub-1.png",
    name: "Scrub 1",
  },
  {
    id: 14,
    imgUrl: "/character/scrub-2.png",
    name: "Scrub 2",
  },
  {
    id: 15,
    imgUrl: "/character/scrub-3.png",
    name: "Scrub 3",
  },
  {
    id: 16,
    imgUrl: "/character/scrub-4.png",
    name: "Scrub 4",
  },
  {
    id: 17,
    imgUrl: "/character/suit-1.png",
    name: "Suit 1",
  },
  {
    id: 18,
    imgUrl: "/character/suit-2.png",
    name: "Suit 2",
  },
  {
    id: 19,
    imgUrl: "/character/suit-3.png",
    name: "Suit 3",
  },
  {
    id: 20,
    imgUrl: "/character/suit-4.png",
    name: "Suit 4",
  },
  {
    id: 21,
    imgUrl: "/character/summer-1.png",
    name: "Summer 1",
  },
  {
    id: 22,
    imgUrl: "/character/summer-2.png",
    name: "Summer 2",
  },
  {
    id: 23,
    imgUrl: "/character/summer-3.png",
    name: "Summer 3",
  },
  {
    id: 24,
    imgUrl: "/character/summer-4.png",
    name: "Summer 4",
  },
  {
    id: 25,
    imgUrl: "/character/winter-1.png",
    name: "Winter 1",
  },
  {
    id: 26,
    imgUrl: "/character/winter-2.png",
    name: "Winter 2",
  },
  {
    id: 27,
    imgUrl: "/character/winter-3.png",
    name: "Winter 3",
  },
  {
    id: 28,
    imgUrl: "/character/winter-4.png",
    name: "Winter 4",
  },
];

export const stickerElements = [
  {
    id: 1,
    imgUrl: "/sticker/sticker-1.png",
    name: "Sticker 1",
  },
  {
    id: 2,
    imgUrl: "/sticker/sticker-2.png",
    name: "Sticker 2",
  },
  {
    id: 3,
    imgUrl: "/sticker/sticker-3.png",
    name: "Sticker 3",
  },
  {
    id: 4,
    imgUrl: "/sticker/sticker-4.png",
    name: "Sticker 4",
  },
  {
    id: 5,
    imgUrl: "/sticker/sticker-5.png",
    name: "Sticker 5",
  },
  {
    id: 6,
    imgUrl: "/sticker/sticker-6.png",
    name: "Sticker 6",
  },
];
