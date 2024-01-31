import { GALLERY_DATA } from "@/app/gallery/galleryData";

import GalleryItem from "@/components/GalleryItem";

const GalleryItemPage = ({ params }: { params: { imageId: string } }) => {
  const galleryItemData = GALLERY_DATA?.find(
    (item) => item?.id === params?.imageId,
  );

  if (!galleryItemData) {
    return <h1>No such image</h1>;
  }

  return (
    <>
      <h1 className="text-center py-6 px-2">{galleryItemData.title}</h1>
      <GalleryItem {...galleryItemData} />
    </>
  );
};

export default GalleryItemPage;
