import Image from "next/image";
import Link from "next/link";
import { GALLERY_DATA } from "@/app/gallery/galleryData";

const GalleryPage = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Gallery image
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GALLERY_DATA.map((galleryItem) => {
          const { id, image, title } = galleryItem;
          return (
            <Link key={galleryItem.id} href={{ pathname: `gallery/${id}` }}>
              <Image
                src={image}
                alt={title}
                className="w-full object-cover aspect-square shadow-lg"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
