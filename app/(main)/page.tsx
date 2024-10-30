import Banner from "@/components/banner/banner";
import WeddingCategory from "@/components/category/weddingCategory";
import Explore from "@/components/explore/explore";
import FeatureVendors from "@/components/featuredVendors/featureVendors";
import GalleryLook from "@/components/gallery/galleryLook";
import HowItWorks from "@/components/howItWorks/howItWorks";
import Inhouse from "@/components/inhourseService/inhouse";
import LatestBlogs from "@/components/latestBlogs/latestBlogs";
import PopularSearch from "@/components/popularSearch/popularSearch";
import PopularVenue from "@/components/popularVenue/popularVenue";
import Wstories from "@/components/weddingStories/wstories";

export default function page() {
  return (
    <>
      <Banner />
      <HowItWorks />
      {/* <WedSafe /> */}
      {/* <Explore /> */}
      {/* <PopularVenue /> */}
      <PopularSearch />
      <WeddingCategory />
      {/* <Inhouse /> */}
      {/* <Wstories /> */}
      <GalleryLook />
      <FeatureVendors />
      <LatestBlogs heading="Latest Blogs" />
    </>
  );
}
