import Modal from "@/components/Modal";
import GalleryItem from "@/components/GalleryItem";
import { GALLERY_DATA } from "@/app/gallery/galleryData";

const ModalPage = ({ params }: { params: { imageId: string } }) => {
  const galleryItemData = GALLERY_DATA?.find(
    (item) => item?.id === params?.imageId,
  );

  if (!galleryItemData) {
    return <h1>No such image</h1>;
  }

  return (
    <Modal>
      <GalleryItem {...galleryItemData} />
    </Modal>
  );
};

export default ModalPage;
