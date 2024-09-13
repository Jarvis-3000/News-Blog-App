import Image from "next/image";

export const NotFound = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image src="/404.svg" height={400} width={500} alt="404" className="h-[400px] w-[400px]"/>
      <h1 className="text-3xl font-semibold text-center">No Result Found</h1>
    </div>
  );
};
