import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export default async function page() {
  let terms = null;

  try {
    const data = await fetchFn(`/site/terms`, {
      method: "GET",
    });
    terms = data.terms;
    console.log(terms);
  } catch (error) {
    console.log(error);
    notFound();
  }
  return <></>;
}
