import Faq from "@/components/faqs/faq";
import PMenu from "@/components/photographerMenu/pMenu";
import WeedingPhotographer from "@/components/weddingPhotography/weedingPhotographer";
import React from "react";

export default function page() {
  return (
    <>
      <PMenu />
      <WeedingPhotographer />
      <Faq />
    </>
  );
}
