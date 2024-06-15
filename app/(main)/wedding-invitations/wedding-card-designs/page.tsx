import Path from "@/components/routesPath/path";
import WeddingInvitationAll from "@/components/weddingInvitation/weddingInvitationAll";
import WMenu from "@/components/weddingMenu/wMenu";
import Link from "next/link";
import { IoMailOpen } from "react-icons/io5";

const data = [
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
      <WMenu />
      <div className="container mx-auto lg:px-20 px-0">
        <div className="pt-6 flex justify-between container pl-5 sm:pl-0">
          <div className="hidden xl:block">
            <Path
              first="Home"
              second="Invitation Cards"
              third="Wedding Cards"
            />
          </div>
          <Link href="/invite/all-cards">
            <button className="rounded-md border border-dateColor-900 text-dateColor-900 text-sm p-2 inline-flex items-center">
              <IoMailOpen className="mr-2 w-4 h-4" /> Your Cards
            </button>
          </Link>
        </div>
        <WeddingInvitationAll
          title="Wedding Cards"
          items={data.length}
          data={data}
        />
      </div>
    </>
  );
}
