import InformationContent from "@/components/vendorProfile/informationContent";
import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export default async function page() {
  let data = null;

  try {
    const vendor = await fetchFn(`/vendor/get-profile-info`, {
      method: "GET",
    });
    const questionsFn = await fetchFn(`/question/get-all`, {
      method: "GET",
    });

    const projectsFn = await fetchFn(`/vendor/project-image/get-all`, {
      method: "GET",
    });

    if (!vendor && !questionsFn && !projectsFn) {
      notFound();
    }
    let vendorProfile = vendor?.vendorProfile;
    let vendorInfo = vendor?.vendorInfo;
    let questions = questionsFn?.questions;
    let total = questionsFn?.total;
    let totalPage = questionsFn?.totalPages;
    let projects = projectsFn?.projects;
    data = { vendorProfile, vendorInfo, questions, total, totalPage, projects };
  } catch (error) {
    console.log(error);
    notFound();
  }

  return <InformationContent data={data} />;
}
