import Modal from "@/components/Modal";
import Image from "next/image";

const AlbumPage = ({
  params,
  searchParams,
}: {
  params: {
    photoId: string;
  };
  searchParams: {
    title: string;
    id: string;
    image: string;
  };
}) => {
  if (!searchParams.image) {
    throw new Error("No such image!");
  }

  return (
    <Modal>
      <section
        title="Image modal body"
        className="bg-white w-full p-2 rounded-md"
      >
        <Image
          src={searchParams.image}
          alt={searchParams.title}
          width={600}
          height={600}
          priority
        />

        <h2 className="mt-4">{searchParams.title}</h2>
        <p>image id: {searchParams.id}</p>
      </section>
    </Modal>
  );
};

export default AlbumPage;
