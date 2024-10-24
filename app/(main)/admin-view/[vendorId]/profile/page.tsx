"use client";
import InformationContent from "@/components/vendorProfile/informationContent";
import { getAdminVendorProfile, getQuestions } from "@/lib/api";
import { handelError } from "@/lib/utils";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

// Define proper types for your data
interface Vendor {
  vendorProfile: any;
  vendorInfo: any;
  projects: any;
}

interface Questions {
  questions: any;
  total: number;
  totalPages: number;
}

export default function Page({ params }: { params: { vendorId: string } }) {
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [allQuestions, setAllQuestions] = useState<Questions | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: profile } = await getAdminVendorProfile(params.vendorId);
        const { data: questions } = await getQuestions();
        setVendor(profile);
        setAllQuestions(questions);
      } catch (error) {
        console.log(error);
        handelError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.vendorId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!vendor || !allQuestions) {
    return notFound();
  }

  const data = {
    vendorProfile: vendor.vendorProfile,
    vendorInfo: vendor.vendorInfo,
    questions: allQuestions.questions,
    total: allQuestions.total,
    totalPage: allQuestions.totalPages,
    projects: vendor.projects,
  };

  return <InformationContent admin={true} data={data} />;
}
