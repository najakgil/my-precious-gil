import Image from "next/image";
import React from "react";

type Props = {
  setReaction: (reaction: string) => void;
};

const ReactionSelector = ({ setReaction }: Props) => (
  <div
    className="absolute bottom-20 left-0 right-0 mx-auto w-fit transform rounded-full bg-[#AFD8FF] px-10 py"
    onPointerMove={(e) => e.stopPropagation()}
  >
    <div className="flex items-center">
      <ReactionButton
        reaction="/reactions/reaction_1.png"
        onSelect={setReaction}
      />
      <ReactionButton
        reaction="/reactions/reaction_2.jpeg"
        onSelect={setReaction}
      />
      <ReactionButton
        reaction="/reactions/reaction_3.png"
        onSelect={setReaction}
      />
    </div>
  </div>
);

type ReactionButtonProps = {
  reaction: string;
  onSelect: (reaction: string) => void;
};

const ReactionButton = ({ reaction, onSelect }: ReactionButtonProps) => (
  <button
    className="transform select-none p-2 text-xl transition-transform hover:scale-150 focus:scale-150 focus:outline-none"
    onPointerDown={() => onSelect(reaction)}
  >
    <Image src={reaction} alt="reaction" width={30} height={30} />
  </button>
);

export default ReactionSelector;
