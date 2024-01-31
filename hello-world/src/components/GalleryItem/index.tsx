import React from "react";
import Image from "next/image";
import { GalleryData } from "@/app/gallery/galleryData";

const GalleryItem = ({ image, description, title }: GalleryData) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="border-2 shadow-md max-w-max p-4">
        <Image src={image} alt={title} className="max-w-xl w-full mb-3" />
        <div>
          <p>Name: {title}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
