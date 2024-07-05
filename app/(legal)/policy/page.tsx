import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export default async function page() {
  let privacy = null;

  try {
    const data = await fetchFn(`/site/privacy`, {
      method: "GET",
    });
    privacy = data.privacy;
    console.log(privacy);
  } catch (error) {
    console.log(error);
    notFound();
  }
  return <></>;
}
