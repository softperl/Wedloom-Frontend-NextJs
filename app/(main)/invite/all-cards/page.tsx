import Path from "@/components/routesPath/path";
import WeddingInvitationAll from "@/components/weddingInvitation/weddingInvitationAll";
import React from "react";

const data = [
  {
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    name: "lorem 3",
    img: "/poster3.webp",
  },
];
export default function page() {
  return (
    <>
      <div className="container mx-auto lg:px-20 px-0">
        <div className="hidden xl:block pt-6">
          <Path
            first="Home"
            second="Invitation Cards"
            third="Continue editing card"
          />
        </div>
        <WeddingInvitationAll
          tab={false}
          title="Continue editing card"
          items={data.length}
          data={data}
        />
      </div>
    </>
  );
}
