import Card from "@/components/Card";
import Image from "next/image";

export default function PhotoDetailsPage({
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
}) {
  if (!searchParams.image) {
    throw new Error(`No such image here`);
  }

  return (
    <div className="container m-auto p-12 flex justify-center items-center">
      <Card classNames="flex-col">
        <Image
          src={searchParams.image + "sa sa das das d 1" ?? ""}
          alt={searchParams.title ?? ""}
          width={600}
          height={600}
        />
        <h3 className="mt-4">{searchParams.title}</h3>
        <p>Photo id: {params.photoId}</p>
      </Card>
    </div>
  );
}
