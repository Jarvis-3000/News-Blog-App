import Image from "next/image";
import { format } from "date-fns";
import { Button } from "@mui/material";

export interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  urlToImage: string;
  publishedAt: string;
}

export const BlogCard = ({
  id,
  title,
  description,
  author,
  urlToImage,
  publishedAt,
}: BlogCardProps) => {
  const publishedAtLabel = format(publishedAt, "do MMMM yyyy");

  return (
    <div className="break-inside-avoid hover:scale-105 duration-300 ease-in-out group bg-white rounded-lg shadow-xl">
      {urlToImage && (
        <div className="aspect-[100/60] relative">
          <Image
            src={urlToImage}
            quality={100}
            fill
            sizes="100vw"
            alt={title}
            className="rounded-t-lg"
          />
        </div>
      )}

      <div className="p-2 px-4">
        <div>
          <span className="text-sm text-gray-400 mt-2">{publishedAtLabel}</span>
          <h1 className="text-lg font-bold mt-2 text-blue-700">{title}</h1>
          <p className=" text-gray-600 mt-3">{description}</p>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <span className="text-sm text-gray-600">{author && `~ ${ author }`}</span>
          <a href={`/blogs/${id}`} className="min-w-fit">
            <Button>
              <span className="font-semibold">Read More</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
