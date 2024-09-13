import { Blog } from "@/app/blogs/BlogList";
import { format } from "date-fns";
import Image from "next/image";

export const BlogView = ({
  title,
  description,
  urlToImage,
  author,
  publishedAt,
  content,
}: Blog) => {
  const publishedAtLabel = format(publishedAt, "do MMMM yyyy");

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 py-5">
      {urlToImage && (
        <div className="lg:w-[40%] h-[200px] sm:h-[300px] md:h-[400px]  relative">
          <Image
            src={urlToImage}
            quality={100}
            fill
            objectFit="contain"
            objectPosition="top"
            sizes="100vw"
            alt={title}
          />
        </div>
      )}

      <div className="lg:w-[60%]">
        <div>
          <h1 className="text-lg font-bold mt-2 text-blue-700">{title}</h1>
          <p className=" text-gray-600 mt-3">{description}</p>
          <p className=" text-gray-600 mt-3">{content}</p>
        </div>
        <div className="mt-5">
          <span className="text-sm text-gray-600">
            {author && `~ ${author}`}
          </span>
          <p className="text-sm text-gray-400 mt-2">{publishedAtLabel}</p>
        </div>
      </div>
    </div>
  );
};
