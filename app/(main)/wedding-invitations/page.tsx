import Path from "@/components/routesPath/path";
import WeddingInvitation from "@/components/weddingInvitation/weddingInvitation";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export const data = [
  {
    id: "783",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "9340",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "263",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "2443",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "827",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "933",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "357",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "123",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "432",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "367",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "335",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "889",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "0093",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "8646",
    name: "lorem 3",
    img: "/poster3.webp",
  },
];

export default function page() {
  return (
    <>
      <div className="container mx-auto lg:px-20 px-0">
        <div className="hidden xl:block pt-6">
          <Path first="Home" second="Invitation Cards" third="" />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <WeddingInvitation
              title="Wedding Cards"
              items={data.length}
              data={data}
            />
            <Link href="/wedding-invitations/wedding-card-designs">
              <button className="flex items-center text-textPrimary-900 border border-textPrimary-900 py-3 px-24 group-hover:bg-textPrimary-900 group-hover:text-white duration-200 font-semibold mt-4 hover:bg-textPrimary-900/10 transition-all mx-auto rounded-md">
                View All <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </Link>
          </div>
          <div>
            <WeddingInvitation
              title="Video Cards"
              items={data.length}
              data={data}
            />
            <Link href="/wedding-invitations/video-templates">
              <button className="flex items-center text-textPrimary-900 border border-textPrimary-900 py-3 px-24 group-hover:bg-textPrimary-900 group-hover:text-white duration-200 font-semibold mt-4 hover:bg-textPrimary-900/10 transition-all mx-auto rounded-md">
                View All <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </Link>
          </div>
          <div>
            <WeddingInvitation
              title="Save the date cards
"
              items={data.length}
              data={data}
            />
            <Link href="/wedding-invitations/save-the-date-templates">
              <button className="flex items-center text-textPrimary-900 border border-textPrimary-900 py-3 px-24 group-hover:bg-textPrimary-900 group-hover:text-white duration-200 font-semibold mt-4 hover:bg-textPrimary-900/10 transition-all mx-auto rounded-md">
                View All <FaChevronRight className="ml-1 w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
