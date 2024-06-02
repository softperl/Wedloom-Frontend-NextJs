import ContactBanner from "@/components/contactBanner/contactBanner";
import ContactCard from "@/components/contactCard/contactCard";
import ContactForm from "@/components/contactForm/contactForm";
import GoogleMap from "@/components/googleMap/googleMap";
import React from "react";

export default function page() {
  return (
    <>
      <ContactBanner background="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <ContactCard />
      <ContactForm />
      <GoogleMap />
    </>
  );
}
