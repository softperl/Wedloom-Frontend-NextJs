"use client";
import GalleryBanner from "@/components/galleryBanner/galleryBanner";
import GalleryGrid from "@/components/galleryGrid/galleryGrid";
import { galleryPhotos } from "@/lib/api";
import { formatDate } from "date-fns/format";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { profileId: string } }) {
  const [gallery, setGallery] = useState<any>([]);
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchPhoto = useSearchParams().get("photos") || "all";

  const isMainGallery =
    searchPhoto === "all"
      ? gallery![0]?.photo
      : gallery?.filter((item: any) => item?.id === searchPhoto)![0]?.photo;

  const createdAt =
    searchPhoto === "all"
      ? gallery![0]?.createdAt
      : gallery?.filter((item: any) => item?.id === searchPhoto)![0]?.createdAt;

  const galleryPhotosFn = async () => {
    try {
      const { data } = await galleryPhotos({
        profileId: params?.profileId,
      });
      setGallery(data?.gallery);
      setUser(data?.user);
    } catch (error) {
      console.log(error);
      router.push("/404");
    }
  };

  console.log(user);

  useEffect(() => {
    galleryPhotosFn();
  }, [params?.profileId, searchPhoto]);

  return (
    <>
      <GalleryBanner
        bannerPhoto={isMainGallery}
        createdAt={createdAt}
        vendorName={user?.name}
        vendorType={user?.vendorType}
        albums={gallery}
        more="50"
      />
      <GalleryGrid data={gallery} />
    </>
  );
}
