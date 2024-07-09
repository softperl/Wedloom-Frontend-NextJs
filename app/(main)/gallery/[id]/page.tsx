"use client";
import GalleryBanner from "@/components/galleryBanner/galleryBanner";
import GalleryGrid from "@/components/galleryGrid/galleryGrid";
import { data } from "@/components/projects/portfolioView";

export default function Page({ params }: { params: { id: string } }) {
  const bannarPhoto = data.find((item) => item.id === params.id);

  return (
    <>
      <GalleryBanner
        bannerPhoto={bannarPhoto?.src}
        time="1"
        photographer="Junaid Ashghar"
        album1="https://images.pexels.com/photos/1253370/pexels-photo-1253370.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album2="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album3="https://images.pexels.com/photos/1484494/pexels-photo-1484494.jpeg?auto=compress&cs=tinysrgb&w=1600"
        album4="https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg?auto=compress&cs=tinysrgb&w=1600"
        more="50"
      />
      <GalleryGrid />
    </>
  );
}
