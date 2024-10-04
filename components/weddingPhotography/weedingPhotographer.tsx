"use client";
import React, { useEffect, useState } from "react";
import Path from "@/components/routesPath/path";
import Link from "next/link";
import FilterPopup from "@/components/filterPopup/filterPopup";
import PhotoBudgetCard from "@/components/weddingPhotography/photoBudgetCard";
import Pagination from "@/components/pagination/pagination";
import WpCardGrid from "@/components/weddingPhotography/wpCardGrid";
import WpCardList from "@/components/weddingPhotography/wpCardList";
import { BiGridAlt } from "react-icons/bi";
import { FaBarsStaggered, FaMagnifyingGlass, FaShuffle } from "react-icons/fa6";
import { FaCaretDown, FaDna } from "react-icons/fa";
import { useParams } from "next/navigation";
import { handelError } from "@/lib/utils";
import { is } from "immutable";
import { vendorsList } from "@/lib/api";

const WeedingPhotographer = () => {
  const params = useParams();
  // All States
  const [isLoading, setIsLoading] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);
  const [vendors, setVendors] = useState<any>();
  const [showFilter, setShowFilter] = useState(false);
  // Search Filter States
  const [search, setSearch] = useState("");

  const vendorsListFn = async () => {
    try {
      setIsLoading(true);
      const { data } = await vendorsList();
      setVendors(data.vendorsList);
    } catch (error) {
      console.log(error);
      handelError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    vendorsListFn();
  }, []);

  // Function For View
  const gridViewOn = () => {
    setListView(false);
    setGridView(true);
  };

  const listViewOn = () => {
    setGridView(false);
    setListView(true);
  };

  // Toggle Menu Function For Mobile
  const toggleFilterMenu = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section className="lg:py-8 py-0 text-textSecondary-900">
      <div className="wphotographer container mx-auto lg:px-20 px-0">
        <div className="hidden xl:block">
          <Path first="Home" second="Vendors" third={params?.vendorType} />
        </div>
        <div className="wphotographer__content">
          {/* Content Header Part */}
          <div className="hidden xl:block">
            <div className="wphotographer__content__header mt-4 mb-12 flex justify-between items-center">
              <div className="w-full">
                <h5 className="text-xl font-semibold">
                  Wedding Photographers in Karachi
                </h5>
                <span className="text-sm">
                  Showing <strong>2089 results</strong> as per your search
                  criteria
                </span>
              </div>

              <div className="w-full">
                <Link href="/">
                  <div className="content__header__middle bg-white flex items-center w-max py-2 px-4 shadow-sm">
                    <FaDna className="w-5 h-5 mr-4 text-textPrimary-900" />{" "}
                    <p className="text-base font-medium">
                      Need Help?{" "}
                      <span className="text-textPrimary-900 font-semibold">
                        WMG Genie
                      </span>{" "}
                      can help out
                    </p>{" "}
                    <FaCaretDown className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>

              <div className="w-full">
                <div className="content__header__right flex items-center gap-4">
                  <div className="searchBox w-8/12 border rounded-md py-2 px-4 text-dateColor-900 flex items-center flex-nowrap">
                    <span>
                      <FaMagnifyingGlass className="w-5 h-5 mr-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search Photographers"
                      className="outline-none w-10/12 bg-transparent border-none focus:border-none text-textPrimary-900"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="viewItems flex justify-end gap-4">
                    <div
                      className={`list flex items-center cursor-pointer ${
                        listView ? "text-textPrimary-900" : ""
                      }`}
                      onClick={listViewOn}>
                      <FaBarsStaggered />{" "}
                      <span className="text-base ml-1">List</span>
                    </div>
                    <div
                      className={`gridItems flex items-center cursor-pointer ${
                        gridView ? "text-textPrimary-900" : ""
                      }`}
                      onClick={gridViewOn}>
                      <BiGridAlt /> <span className="text-base ml-1">Grid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Banner */}
          <div className="block xl:hidden bg-white">
            <div
              className="mobile_banner_content h-[10vh] bg-white flex items-end"
              style={{
                background:
                  "url('https://images.pexels.com/photos/2293102/pexels-photo-2293102.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <h1 className="text-2xl text-white font-bold pl-4 pb-4">
                Wedding Photographers
              </h1>
            </div>
          </div>

          {/* Mobile FIilter */}
          <div className="block xl:hidden">
            <div className="content px-4 pt-4 flex justify-between gap-6">
              <div className="left w-9/12">
                <div className="searchBox flex items-center pl-6 p-2 rounded-full bg-tagsBackground-900">
                  <FaMagnifyingGlass className="w-5 h-5 mr-4" />
                  <input
                    type="text"
                    placeholder="Search Wedding Photogra..."
                    className="w-full outline-none bg-transparent text-textPrimary-900
              "
                  />
                </div>
              </div>
              <div
                className="right w-3/12 flex items-center bg-tagsBackground-900 rounded-full p-2 cursor-pointer justify-center"
                onClick={() => setShowFilter(!showFilter)}>
                <FaShuffle className="w-5 h-5" />
                <span className="text-textSecondary-900 ml-2">Filter</span>
              </div>
              {showFilter && <FilterPopup toggleFilter={toggleFilterMenu} />}
            </div>
          </div>

          {/* Desktop Different View Content */}
          <div className="px-4 lg:px-0 pt-4 pb-8 lg:py-0">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              gridView && (
                <div className="grid__view flex flex-wrap">
                  {vendors
                    ?.filter((item: any) =>
                      item?.name?.toLowerCase()?.includes(search)
                    )
                    ?.map((item: any, i: number) => {
                      return (
                        <WpCardGrid
                          key={i}
                          img={
                            item?.ProjectPhoto[0]?.photo || "/placehoderImg.jpg"
                          }
                          category={item?.vendorType}
                          location={item?.city}
                          name={item?.brand}
                          price={item?.initialPrice}
                          review={item?.averageRating}
                          tooltip1={"lorem ipsum dolor sit amet"}
                          tooltip2={
                            "lorem ipsum dolor sit amet consectetur adipisicing elit"
                          }
                          totalReview={item?.vendorReviews?.length}
                          profileId={item?.id}
                        />
                      );
                    })}
                </div>
              )
            )}

            {/* Card Container - List View */}
            {listView && (
              <div className="card__view md:flex gap-6">
                <div className="w-full md:w-9/12">
                  {vendors
                    ?.filter((item: any) =>
                      item?.name?.toLowerCase()?.includes(search)
                    )
                    ?.map((item: any, i: number) => {
                      return (
                        <WpCardList
                          key={i}
                          img={
                            item?.ProjectPhoto[0]?.photo || "/placehoderImg.jpg"
                          }
                          category={item?.vendorType}
                          location={item?.city}
                          name={item?.brand}
                          price={"200000000"}
                          review={item?.averageRating}
                          tooltip1={"lorem ipsum dolor sit amet"}
                          tooltip2={
                            "lorem ipsum dolor sit amet consectetur adipisicing elit"
                          }
                          totalReview={item?.vendorReviews?.length}
                          profileId={item?.id}
                        />
                      );
                    })}
                </div>

                {/* Photographer Category */}
                <div className="cardview__right invisible md:visible md:w-3/12">
                  <div className="photographer_by_budget">
                    <PhotoBudgetCard
                      circle
                      heading="Photographer by Budget"
                      image1="https://images.pexels.com/photos/6085682/pexels-photo-6085682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image2="https://images.pexels.com/photos/6544106/pexels-photo-6544106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image3="https://images.pexels.com/photos/6543940/pexels-photo-6543940.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image4="https://images.pexels.com/photos/11810879/pexels-photo-11810879.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      category1="Budget Friendly"
                      category2="Value For Money"
                      category3="Premium"
                      category4="Luxury"
                    />
                  </div>
                  <div className="photographer_by_type mt-8">
                    <PhotoBudgetCard
                      heading="Photographer by Type"
                      image1="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image2="https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image3="https://images.pexels.com/photos/8790775/pexels-photo-8790775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image4="https://images.pexels.com/photos/12759473/pexels-photo-12759473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category1="Pre wedding Photographer"
                      category2="Vaccinated Photographers"
                      category3="Top Rated Photographers"
                      category4="Photographers with deals"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Pagination */}
            <Pagination />
          </div>

          {/* Faq Sections Start */}
        </div>
      </div>
    </section>
  );
};

export default WeedingPhotographer;
