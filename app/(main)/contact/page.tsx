import ContactBanner from "@/components/contactBanner/contactBanner";
import ContactCard from "@/components/contactCard/contactCard";
import ContactForm from "@/components/contactForm/contactForm";
import GoogleMap from "@/components/googleMap/googleMap";
import React from "react";

export default function page() {
  return (
    <>
      <ContactBanner background="/pexels-photo-2174662.jpeg" />
      <ContactCard />
      <ContactForm />
      <GoogleMap />
    </>
  );
}
