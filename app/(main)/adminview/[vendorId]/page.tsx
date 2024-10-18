"use client";
import InformationContent from "@/components/vendorProfile/informationContent";
import { getAdminVendorProfile, getQuestions } from "@/lib/api";
import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { vendorId: string } }) {
  let data = null;
  const [vendor, setVendor] = useState<any>();
  const [allQuestion, setAllQuestion] = useState<any>();

  const fetchData = async () => {
    const { data: profile } = await getAdminVendorProfile(params.vendorId);
    const { data: questions } = await getQuestions();
    setVendor(profile);
    setAllQuestion(questions);
    console.log("admin", profile, questions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let vendorProfile = vendor?.vendorProfile;
  let vendorInfo = vendor?.vendorInfo;
  let questions = allQuestion?.questions;
  let total = allQuestion?.total;
  let totalPage = allQuestion?.totalPages;
  let projects = vendor?.projects;
  data = { vendorProfile, vendorInfo, questions, total, totalPage, projects };

  return <InformationContent data={data} />;
}
