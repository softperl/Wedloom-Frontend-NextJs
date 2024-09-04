import Banquets from "@/components/vendorProfile/banquets";
import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import React from "react";

export default async function page() {
  // let banquets = null;
  // try {
  //   const data = await fetchFn(`/vendor/get-all-banquet`, {
  //     method: "GET",
  //   });
  //   banquets = data.banquet;
  // } catch (error) {
  //   console.log(error);
  // }
  return <Banquets />;
}
