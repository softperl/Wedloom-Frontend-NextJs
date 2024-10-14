import Faq from "@/components/faqs/faq";
import PMenu from "@/components/photographerMenu/pMenu";
import WeedingPhotographer from "@/components/weddingPhotography/weedingPhotographer";
import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

const page = async ({
  searchParams,
  params,
}: {
  searchParams?: {
    q?: string;
    page?: string;
    perPage?: string;
  };
  params?: {
    vendorType?: string;
    vendorCity?: string;
  };
}) => {
  const q = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.perPage) || 50;
  let data = null;
  let totalPages = 1;
  let total = 0;
  try {
    data = await fetchFn(
      `/vendor/list/get-all/${params?.vendorCity}/${params?.vendorType}?q=${q}&page=${currentPage}&perPage=${perPage}`,
      {
        method: "GET",
        next: {
          revalidate: 0,
          tags: ["vendors"],
        },
      }
    );
    console.log(data);

    totalPages = data.totalPages;
    total = data.total;
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <>
      <PMenu />
      <WeedingPhotographer data={data} />
      <Faq data={data} />
    </>
  );
};

export default page;
