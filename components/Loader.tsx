import Image from "next/image";
import { loaderElements } from "@/constants";

const Loader = () => {
  const randomIndex = Math.floor(Math.random() * loaderElements.length + 1);
  console.log(randomIndex);

  return (
    <div
      className={`flex h-screen w-screen flex-col items-center justify-center gap-2 bg-${loaderElements[randomIndex].color}`}
    >
      <Image
        src={`/loader/loader_${randomIndex}.gif`}
        alt={"loader"}
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
};

export default Loader;
