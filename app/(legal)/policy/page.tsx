import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export default async function page() {
  let privacy = null;

  console.log(privacy);
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
  return (
    <>
      <h1>{privacy?.title}</h1>
      <p>{privacy?.content}</p>
    </>
  );
}
