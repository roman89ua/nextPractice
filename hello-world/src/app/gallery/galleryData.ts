import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";

import { StaticImageData } from "next/image";

export type GalleryData = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
};
export const GALLERY_DATA: GalleryData[] = [
  {
    id: "1",
    image: one,
    title: "Title 1",
    description: "Description 1",
  },
  {
    id: "2",
    image: two,
    title: "Title 2",
    description: "Description 2",
  },
  {
    id: "3",
    image: three,
    title: "Title 3",
    description: "Description 3",
  },
  {
    id: "4",
    image: four,
    title: "Title 4",
    description: "Description 4",
  },
];
