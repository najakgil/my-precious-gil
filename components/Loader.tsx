import Image from "next/image";

const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-white">
    <Image
      src="/assets/loader.gif"
      alt="loader"
      width={500}
      height={500}
      className="object-contain"
    />
  </div>
);

export default Loader;
