"use client";
import { useEffect, useState } from "react";
import { handelError, NumberWithCommas } from "@/lib/utils";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaTrash, FaX } from "react-icons/fa6";
import Image from "next/image";
import {
  createFoodMenu,
  getFoodMenu,
  getFoodMenuAdmin,
  removeFoodMenu,
} from "@/lib/api";
import toast from "react-hot-toast";
import { useParams, usePathname } from "next/navigation";
import useAuth from "@/lib/hooks/useAuth";

const MenuContent = () => {
  const params = useParams();
  const { user } = useAuth();
  // States
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = useState({
    title: "",
    menuType: "",
    price: "",
    starters: "",
    main: "",
    soupOrSalad: "",
    desserts: "",
  });
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<any>([]);

  const [isAdminView, setIsAdminView] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("admin-view")) {
      setIsAdminView(true);
    } else {
      setIsAdminView(false);
    }
  }, [pathname]);

  const formSubmitted = async (e: any) => {
    e.preventDefault();
    try {
      await createFoodMenu({
        title: value.title,
        menuType: value.menuType,
        price: value.price,
        starter: value.starters,
        mainCourse: value.main,
        soupOrSalad: value.soupOrSalad,
        dessert: value.desserts,
      });
      setValue({
        title: "",
        menuType: "",
        price: "",
        starters: "",
        main: "",
        soupOrSalad: "",
        desserts: "",
      });
      setRefresh(!refresh);
      setOpenPopup(false);
      toast.success("Menu Added Successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  const getFoodMenuFn = async () => {
    if (params?.vendorId) {
      try {
        const { data } = await getFoodMenuAdmin(params?.vendorId);
        setData(data.foodMenu);
      } catch (error) {
        console.log(error);
        handelError(error);
      }
    } else {
      try {
        const { data } = await getFoodMenu();
        setData(data.foodMenu);
      } catch (error) {
        console.log(error);
        handelError(error);
      }
    }
  };

  // Remove Banquets Function
  const deleteBanquetes = async (id: string) => {
    try {
      await removeFoodMenu(id);
      setRefresh(!refresh);
      toast.success("Menu Deleted Successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getFoodMenuFn();
  }, [refresh]);

  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="bg-sectionBg-900 px-2 py-3">
        <h2 className="text-textSecondary-900 lg:text-lg font-medium">
          Menu Files
        </h2>
      </div>

      {/* Image Upload Content */}
      {!isAdminView && (
        <div className="px-6 my-8">
          <Link href={"/vendor/profile/menu/image-upload"}>
            <div
              className={`w-full lg:w-56 lg:h-64 h-56 cursor-pointer text-white font-semibold flex justify-center items-center text-center rounded-md`}
              style={{
                background: `url("/addNewAlbum.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
              <span>
                <FaPlus className="w-5 h-5 mx-auto" />
                <p>Add new Menu</p>
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* Menu Content */}
      <div>
        {/* Heading */}
        <div className="bg-sectionBg-900 px-4 py-2 flex justify-between items-center">
          <h2 className="text-textSecondary-900 lg:text-lg font-medium">
            Menu
          </h2>
          {!isAdminView && (
            <button
              onClick={() => setOpenPopup(true)}
              className={`border border-paginationBg-900 py-1 px-2 text-xs lg:text-sm rounded-sm`}>
              Add Menu
            </button>
          )}
        </div>

        {/* Menu Content */}
        <div className="w-full">
          {/* Heading */}
          <div className="px-4 py-3 border-b border-b-paginationBg-900 font-semibold text-textSecondary-900 flex justify-between items-center text-xs lg:text-[15px]">
            <div className="w-3/12">
              <p>Title</p>
            </div>

            <div className="w-3/12">
              <p>Type</p>
            </div>

            <div className="w-3/12">
              <p>Price per plate</p>
            </div>

            <div className="w-3/12 text-end">
              {!isAdminView && <p>Actions</p>}
            </div>
          </div>

          {data.length >= 1 &&
            data.map((item: any, i: number) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-b-paginationBg-900 font-medium text-textSecondary-900 flex justify-between items-center text-xs lg:text-sm">
                <div className="w-3/12">
                  <p>{item.title}</p>
                </div>

                <div className="w-3/12">
                  <p>{item.menuType}</p>
                </div>

                <div className="w-3/12">
                  <p>PKR {NumberWithCommas(item.price)}</p>
                </div>

                <div className="w-3/12 text-end">
                  <span className="text-textSecondary-900 flex justify-end">
                    {!isAdminView && (
                      <FaTrash
                        onClick={() => deleteBanquetes(item?.id)}
                        className="cursor-pointer"
                      />
                    )}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Popup */}
      {openPopup && (
        <div className="w-screen h-screen bg-black bg-opacity-70 fixed top-0 right-0 flex justify-center items-center">
          <div className="flex lg:items-start items-end gap-2 w-full px-4 lg:w-[40%] flex-col-reverse">
            <div className="w-full h-max bg-white text-black px-6 py-4 rounded-md">
              <FaX
                onClick={() => setOpenPopup(false)}
                className="float-right w-4 h-4 text-red-500 cursor-pointer"
              />
              <div className="flex justify-center mb-4">
                <Image
                  width={500}
                  height={500}
                  src="https://www.svgrepo.com/show/54204/restaurant.svg"
                  alt=""
                  className="w-14 lg:w-16"
                />
              </div>

              {/* Heading */}
              <h2 className="text-textSecondary-900 text-base lg:text-xl font-semibold text-center">
                Add New Menu
              </h2>

              <div className="mt-4 lg:mt-6">
                <form onSubmit={formSubmitted}>
                  {/* Menu Name Input */}
                  <div className="mb-2">
                    <input
                      value={value.title}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          title: e.target.value,
                        })
                      }
                      type="text"
                      required
                      placeholder="Menu Title*"
                      maxLength={15}
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 placeholder:text-textSecondary-900"
                    />
                  </div>

                  {/* Price per plate and Menu Type */}
                  <div className="flex justify-between gap-2 items-center">
                    {/* Menu Type */}
                    <div className="mb-2 w-full">
                      <select
                        value={value.menuType}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            menuType: e.target.value,
                          })
                        }
                        required
                        className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                        <option>Select Menu Type*</option>
                        <option value="Standard">Standard</option>
                        <option value="Premium">Premium</option>
                        <option value="Luxury">Luxury</option>
                      </select>
                    </div>
                    {/* Price Per plate */}
                    <div className="mb-2 w-full">
                      <input
                        value={value.price}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            price: e.target.value,
                          })
                        }
                        type="number"
                        required
                        placeholder="Price / Plate*"
                        className="pl-1 w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 placeholder:text-textSecondary-900"
                      />
                    </div>
                  </div>

                  {/* Menu Description */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-textSecondary-900">
                      Menu Description
                    </h5>
                    {/* Select Dropdown Div */}
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-6 gap-2 mt-2">
                      {/* Starters */}
                      <div className="w-full">
                        <select
                          value={value.starters}
                          onChange={(e) =>
                            setValue({
                              ...value,
                              starters: e.target.value,
                            })
                          }
                          required
                          className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                          <option value="not-selected">Starters</option>
                          <option value="starters-1">1</option>
                          <option value="starters-2">2</option>
                          <option value="starters-3">3</option>
                          <option value="starters-4">4</option>
                          <option value="starters-5">5</option>
                          <option value="starters-6">6</option>
                          <option value="starters-7">7</option>
                          <option value="starters-8">8</option>
                          <option value="starters-9">9</option>
                          <option value="starters-10">10</option>
                          <option value="starters-11">11</option>
                          <option value="starters-12">12</option>
                          <option value="starters-13">13</option>
                          <option value="starters-14">14</option>
                          <option value="starters-15">15</option>
                          <option value="starters-16">16</option>
                          <option value="starters-17">17</option>
                          <option value="starters-18">18</option>
                          <option value="starters-19">19</option>
                          <option value="starters-20">20</option>
                        </select>
                      </div>

                      {/* Main Course */}
                      <div className="w-full">
                        <select
                          value={value.main}
                          onChange={(e) =>
                            setValue({
                              ...value,
                              main: e.target.value,
                            })
                          }
                          required
                          className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                          <option value="not-selected">Main Course</option>
                          <option value="maincourse-1">1</option>
                          <option value="maincourse-2">2</option>
                          <option value="maincourse-3">3</option>
                          <option value="maincourse-4">4</option>
                          <option value="maincourse-5">5</option>
                          <option value="maincourse-6">6</option>
                          <option value="maincourse-7">7</option>
                          <option value="maincourse-8">8</option>
                          <option value="maincourse-9">9</option>
                          <option value="maincourse-10">10</option>
                          <option value="maincourse-11">11</option>
                          <option value="maincourse-12">12</option>
                          <option value="maincourse-13">13</option>
                          <option value="maincourse-14">14</option>
                          <option value="maincourse-15">15</option>
                          <option value="maincourse-16">16</option>
                          <option value="maincourse-17">17</option>
                          <option value="maincourse-18">18</option>
                          <option value="maincourse-19">19</option>
                          <option value="maincourse-20">20</option>
                        </select>
                      </div>

                      {/* Soup Salads Course */}
                      <div className="w-full">
                        <select
                          value={value.soupOrSalad}
                          onChange={(e) =>
                            setValue({
                              ...value,
                              soupOrSalad: e.target.value,
                            })
                          }
                          required
                          className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                          <option value="not-selected">Soup / Salads</option>
                          <option value="soup&salad-1">1</option>
                          <option value="soup&salad-2">2</option>
                          <option value="soup&salad-3">3</option>
                          <option value="soup&salad-4">4</option>
                          <option value="soup&salad-5">5</option>
                          <option value="soup&salad-6">6</option>
                          <option value="soup&salad-7">7</option>
                          <option value="soup&salad-8">8</option>
                          <option value="soup&salad-9">9</option>
                          <option value="soup&salad-10">10</option>
                          <option value="soup&salad-11">11</option>
                          <option value="soup&salad-12">12</option>
                          <option value="soup&salad-13">13</option>
                          <option value="soup&salad-14">14</option>
                          <option value="soup&salad-15">15</option>
                          <option value="soup&salad-16">16</option>
                          <option value="soup&salad-17">17</option>
                          <option value="soup&salad-18">18</option>
                          <option value="soup&salad-19">19</option>
                          <option value="soup&salad-20">20</option>
                        </select>
                      </div>

                      {/* Deserts */}
                      <div className="w-full">
                        <select
                          value={value.desserts}
                          onChange={(e) =>
                            setValue({
                              ...value,
                              desserts: e.target.value,
                            })
                          }
                          required
                          className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                          <option value="not-selected">Desserts</option>
                          <option value="desserts-1">1</option>
                          <option value="desserts-2">2</option>
                          <option value="desserts-3">3</option>
                          <option value="desserts-4">4</option>
                          <option value="desserts-5">5</option>
                          <option value="desserts-6">6</option>
                          <option value="desserts-7">7</option>
                          <option value="desserts-8">8</option>
                          <option value="desserts-9">9</option>
                          <option value="desserts-10">10</option>
                          <option value="desserts-11">11</option>
                          <option value="desserts-12">12</option>
                          <option value="desserts-13">13</option>
                          <option value="desserts-14">14</option>
                          <option value="desserts-15">15</option>
                          <option value="desserts-16">16</option>
                          <option value="desserts-17">17</option>
                          <option value="desserts-18">18</option>
                          <option value="desserts-19">19</option>
                          <option value="desserts-20">20</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-textPrimary-900 text-white py-3 text-xs lg:text-sm font-semibold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Close Icon */}
            <div className="-mt-2">
              <i
                className="fa-solid fa-xmark text-3xl text-white cursor-pointer"
                onClick={() => setOpenPopup(!openPopup)}></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuContent;
