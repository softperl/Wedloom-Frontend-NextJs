import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
          <div className="prose w-full h-full whitespace-pre-wrap">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-foreground font-bold text-4xl"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-foreground font-bold text-3xl"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h2
                    className="text-foreground font-bold text-2xl"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className="text-foreground font-bold text-xl"
                    {...props}
                  />
                ),
                h5: ({ node, ...props }) => (
                  <h5
                    className="text-foreground font-bold text-lg"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="text-foreground font-medium" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-textPrimary-900 underline underline-offset-2"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-foreground" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="text-foreground font-medium italic border-l-4 border-muted mt-6 mb-6 pl-4"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside pl-6 mb-4" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-foreground mb-1" {...props} />
                ),
              }}>
              {refund?.content}
            </Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
