import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export default async function page() {
  let refund = null;

  console.log(refund);
  try {
    const data = await fetchFn(`/site/refund`, {
      method: "GET",
    });
    refund = data.refund;
    console.log(refund);
  } catch (error) {
    console.log(error);
    notFound();
  }
  return (
    <main className="">
      <div className="px-2 md:px-12 py-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-center mx-auto text-2xl font-normal text-textPrimary-900">
            {refund?.title}
          </h1>
          <p className="text-sm font-light leading-loose">{refund?.content}</p>
        </div>
      </div>
    </main>
  );
}
