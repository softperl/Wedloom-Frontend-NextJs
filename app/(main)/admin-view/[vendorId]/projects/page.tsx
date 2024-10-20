import VendorProjectContent from "@/components/vendorProfile/vendorProjectContent";

export default async function page(params: { params: { vendorId: string } }) {
  return <VendorProjectContent params={params} />;
}
