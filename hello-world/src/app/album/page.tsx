import {} from "react";
import { getAlbum2 } from "@/lib/geyAlbum2";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const AlbumPage = async () => {
  const album = await getAlbum2();

  return (
    <section
      title="Album container"
      className="container m-auto sm:py-10 sm:px-16"
    >
      <h1>Album page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {album.map((photo) => {
          return (
            <Link
              href={{
                pathname: `/album/${photo.id}`,
                query: {
                  title: photo.title,
                  id: photo.id,
                  image: photo.url,
                },
              }}
              key={`${photo.albumId} ${photo.id}`}
            >
              <Card classNames="flex-col">
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={150}
                  height={150}
                />
                <h3 className="mt-4">{photo.title}</h3>
              </Card>
            </Link>
          );
        })}
      </div>
      )
    </section>
  );
};

export default AlbumPage;
