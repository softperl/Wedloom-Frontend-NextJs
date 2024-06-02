import CheckoutContent from "@/components/checkoutContent/checkoutContent";
import React from "react";

export default function page({ params }: { params: { package: string } }) {
  return <CheckoutContent packageName={params.package} />;
}
