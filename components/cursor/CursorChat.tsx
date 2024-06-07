import { CursorChatProps, CursorMode } from "@/types/type";
import CursorSVG from "@/public/assets/CursorSVG";
import { useState } from "react";
import { SlangList } from "@/constants/slang-list";

const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const [isSlangUsed, setIsSlangUsed] = useState(false);

  const checkSlang = (message: string) => {
    SlangList.some((slang) => {
      if (message.toLowerCase().includes(slang)) {
        setIsSlangUsed(true);
        return true;
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value,
    });
    checkSlang(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        // @ts-ignore
        previousMessage: cursorState.message,
        message: "",
      });
      setIsSlangUsed(false);
    } else if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
      setIsSlangUsed(false);
    }
  };

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />

          <div
            className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white"
            onKeyUp={(e) => e.stopPropagation()}
            style={{
              borderRadius: 20,
            }}
          >
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input
              className="z-10 w-60 border-none	bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Say something…"}
              value={cursorState.message}
              maxLength={50}
              onBlur={() => checkSlang(cursorState.message)}
            />
            {isSlangUsed && <div style={{ color: "red" }}>나쁜 말 떼끼!!!</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
