import { NextError } from "next/dist/lib/is-error";

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function getAlbum2(): Promise<Photo[]> {
  return await fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then((response) => response.json())
    .catch((e: NextError) => {
      console.error(e.message);
    });
}
