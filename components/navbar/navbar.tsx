"use client";
import { useEffect, useRef, useState } from "react";
import VenuesPop from "@/components/navbar/navbarPopups/venuesPop";
import VendorsPop from "@/components/navbar/navbarPopups/vendorsPop";
import PhotosPop from "@/components/navbar/navbarPopups/photosPop";
import WeddingsPop from "@/components/navbar/navbarPopups/weddingsPop";
import BlogPop from "./navbarPopups/blogPop";
import ShopPop from "./navbarPopups/shopPop";
import InvitesPop from "./navbarPopups/invitesPop";
import { AllCitiesPopup } from "@/components/allCitiesPopup/allCitiesPopup";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import {
  FaBars,
  FaCamera,
  FaCaretDown,
  FaChevronDown,
  FaEnvelope,
  FaHeadphones,
  FaStore,
  FaStreetView,
  FaTree,
  FaUserPlus,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";
import { FaHand, FaHeartPulse, FaPallet, FaXmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import useUi from "@/lib/hooks/useUi";
import Image from "next/image";
import useAuth from "@/lib/hooks/useAuth";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showPop, setShowPop] = useState(false);
  const [open, setOpen] = useState(false);
  const [venues, setVenues] = useState(false);
  const [photographs, setPhotographs] = useState(false);
  const [makeup, setMakeup] = useState(false);
  const [bridal, setBridal] = useState(false);
  const [groom, setGroom] = useState(false);
  const [mehndi, setMehndi] = useState(false);
  const [decor, setDecor] = useState(false);
  const [food, setFood] = useState(false);
  const [invites, setInvites] = useState(false);
  const [music, setMusic] = useState(false);
  const [jewellery, setJewellery] = useState(false);
  const [honeymoon, setHoneymoon] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [shop, setShop] = useState(false);
  const [allCities, setAllCities] = useState(false);
  const profilePopupRef = useRef<any>();
  const [profilePopup, setProfilePopup] = useState(false);
  const { menus } = useUi();
  const pathname = usePathname();

  const closePopup = (e: any) => {
    if (
      profilePopupRef.current &&
      !profilePopupRef.current.contains(e.target)
    ) {
      setProfilePopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, []);

  const handleAllCities = () => {
    setAllCities(!allCities);
  };

  const avatar =
    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png";
  return (
    <>
      {/* Desktop Navbar */}
      <div className="desktop_nav hidden xl:block">
        <div className="navbar bg-navbarBGL-900 flex justify-between items-center md:px-12 text-white py-4 md:py-0 px-2 h-16">
          {/* Left Side */}
          <div className="navbar__left flex items-center w-8/12">
            <div className="navbar__logo">
              <Link href="/">
                <span className="logo text-lg md:text-3xl font-bold mr-10 cursor-pointer">
                  Logo Here
                </span>
              </Link>
            </div>
            <div className="navbar__links">
              <ul className="flex gap-9 font-bold">
                {menus?.map((item: any) => (
                  <li
                    key={item.id}
                    className="submenu"
                    onMouseEnter={() => setShowPop(true)}
                    onMouseLeave={() => setShowPop(false)}>
                    <Link href={item.href}>{item.title}</Link>
                    {showPop && (
                      <div className="navbar__popup w-2/4 pr-10 pl-10 pb-10 rounded-md bg-white shadow-md">
                        <div className="popup__container">
                          <div className="venuelist flex justify-between mt-5">
                            <div className="venuelist__items">
                              <div className="photographer">
                                {/* First List Item */}
                                <ul className="mt-1 text-black">
                                  {item.subMenus?.map((subItem: any) => (
                                    <li key={subItem.href}>
                                      <Link href={subItem.href}>
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}

                {/* <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/photographer">Vendors</Link>
                  {showPop && <VendorsPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/gallery">Photos</Link>
                  {showPop && <PhotosPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/">Real Weeding</Link>
                  {showPop && <WeddingsPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/blog">Blog</Link>
                  {showPop && <BlogPop />}
                </li>
                <li
                  className="submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/">Shops</Link>
                  {showPop && <ShopPop />}
                </li>
                <li
                  className="flex submenu"
                  onMouseEnter={() => setShowPop(true)}
                  onMouseLeave={() => setShowPop(false)}>
                  <Link href="/wedding-invitations">E-Invites</Link>
                  <img className="w-5 ml-1" src={"/new.png"} alt="new__icon" />
                  {showPop && <InvitesPop />}
                </li> */}
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex gap-6 items-center justify-end w-5/12 relative">
            <div className="bg-headerBG-900 py-1 px-2 rounded-full">
              <Link href="/search">
                <BiSearch />
              </Link>
            </div>
            {/* Signup BUtton Hidden */}

            {/* <div className="login__btn">
              <Link href="/signup">
                <button className="bg-headerBG-900 py-1 px-10 rounded-full font-semibold">
                  Signup
                </button>
              </Link>
            </div> */}

            {/* Login Button */}
            {!user && (
              <div className="login__btn">
                <Link href="/signin">
                  <button className="bg-headerBG-900 py-1 px-10 rounded-full font-semibold">
                    Login
                  </button>
                </Link>
              </div>
            )}

            {/* Profile Tab */}
            {user && (
              <div
                ref={profilePopupRef}
                className="flex justify-center items-center relative">
                {/* Avatar */}
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setProfilePopup(!profilePopup)}>
                  <Image
                    width={500}
                    height={500}
                    src={avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <FaCaretDown />
                </div>

                {/* Popup */}
                {profilePopup && (
                  <div className="bg-white text-black w-[200px] absolute top-[125%] right-0 z-[1000] shadow-sm border border-paginationBg-900 border-t-0">
                    {/* Profile */}
                    <Link
                      href={
                        user?.role === "Vendor"
                          ? "/vendor/profile"
                          : "/user/profile"
                      }>
                      <div className="bg-carouselBG-900 p-2 flex gap-2 items-center justify-between">
                        {/* Image */}
                        <div className="w-4/12">
                          <Image
                            width={500}
                            height={500}
                            src={avatar}
                            alt="avatar"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>

                        <div className="w-full">
                          <span className="text-sm text-textSecondary-900 font-medium">
                            {user?.name}
                          </span>
                          <p className="text-xs text-textPrimary-900 font-medium">
                            Profile
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Others Item */}
                    <div className="py-2">
                      <div className="px-4 mb-2">
                        <Link href="/setup-wedding">
                          <span className="text-textSecondary-900 font-medium text-sm hover:font-semibold">
                            Setup Your Wedding
                          </span>
                        </Link>
                      </div>
                      <div className="px-4 mb-2">
                        <Link href="/user/inbox">
                          <span className="text-textSecondary-900 font-medium text-sm hover:font-semibold">
                            Inbox
                          </span>
                        </Link>
                      </div>
                      <div className="px-4 mb-2">
                        <Link href="/user/profile/settings">
                          <span className="text-textSecondary-900 font-medium text-sm hover:font-semibold">
                            Settings
                          </span>
                        </Link>
                      </div>
                      <div className="px-4 mb-2">
                        <span
                          onClick={logout}
                          className="text-textSecondary-900 font-medium text-sm hover:font-semibold cursor-pointer">
                          Logout
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile_nav block xl:hidden">
        <div className="mobile_navbar bg-textPrimary-900 py-3 px-4 text-white flex justify-between items-center duration-500">
          <div className="mobile_nav_left flex w-full gap-4 duration-500">
            <div
              className="hamburger cursor-pointer"
              onClick={() => setOpen(!open)}>
              <FaBars className="w-5 h-5" />
            </div>
            <Link href="/">
              <div className="logo">
                <span className="text-2xl">Logo Here</span>
              </div>
            </Link>
          </div>

          <div className="mobile_nav_right flex w-full gap-6 justify-end items-center duration-500">
            <div
              className="all-cities text-base cursor-pointer"
              onClick={handleAllCities}>
              <span>All Cities</span> <FaCaretDown className="ml-2" />
            </div>
            <Link href="/login">
              <div className="login_icon text-xl cursor-pointer">
                <FaUserPlus />
              </div>
            </Link>
          </div>
        </div>

        {allCities && <AllCitiesPopup toggle={handleAllCities} />}

        {/* Sidebar Start */}
        <div className="sidebar">
          <div
            className={`sidebar__content bg-white shadow-lg text-black h-screen md:w-[50vw] w-[70vw] fixed top-0 left-0 z-50 duration-500 transition-all py-6 overflow-y-scroll ${
              open ? "left-0" : "left-[-100%]"
            }`}>
            <div
              className="closeIcon absolute top-0 right-4 cursor-pointer"
              onClick={() => setOpen(false)}>
              <FaXmark className="w-5 h-5 text-textPrimary-900" />
            </div>

            <div className="sign_in px-4 border-b border-paginationBg-900 pb-4">
              <Link href="/user/profile">
                <div className="flex gap-2 items-center justify-between">
                  {/* Image */}
                  <div className="w-4/12">
                    <div className="relative w-10 h-10">
                      <Image
                        fill
                        src="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png"
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <span className="text-sm text-textSecondary-900 font-medium">
                      {user?.name}
                    </span>
                    <p className="text-xs text-textPrimary-900 font-medium">
                      Profile
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Wedding Category */}

            <div className="wedding_category px-4 py-4 border-b border-paginationBg-900">
              <div className="heading">
                <span className="text-textSecondary-900 font-semibold">
                  Wedding Categories
                </span>
              </div>
              <div className="list_items w-full my-4">
                {/* Item 1 */}
                <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setVenues(!venues)}>
                    <div className="item_left flex items-center w-full">
                      <div className="w-2/12">
                        <FaStore className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Venues</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          venues ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {venues && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/venue1">
                        <li className="mb-4">Venues 1</li>
                      </Link>
                      <Link href="/venue2">
                        <li className="mb-4">Venues 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Venues 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Venues 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Venues 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Venues 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 2 */}
                <div className="item2 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setPhotographs(!photographs)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaCamera className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Photographs
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          photographs ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {photographs && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/photographer">
                        <li className="mb-4">Photographs 1</li>
                      </Link>
                      <Link href="/photographer">
                        <li className="mb-4">Photographs 2</li>
                      </Link>
                      <Link href="/photographer">
                        <li className="mb-4">Photographs 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photographs 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photographs 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photographs 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 3 */}
                <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMakeup(!makeup)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaPallet className="w-7 h-7 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Makeup</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          makeup ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {makeup && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Makeup 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Makeup 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Makeup 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Makeup 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Makeup 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Makeup 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 4 */}
                <div className="item4 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setBridal(!bridal)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaStreetView className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Bridal Wear
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          bridal ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {bridal && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Bridal Wear 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 5 */}
                <div className="item5 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setGroom(!groom)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaUserTie className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Groom Wear
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <FaChevronDown
                        className={cn(
                          "w-4 h-4 text-textPrimary-900",
                          groom && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                </div>
                {groom && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Groom Wear 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Groom Wear 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Groom Wear 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Groom Wear 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Groom Wear 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Groom Wear 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 6 */}
                <div className="item6 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMehndi(!mehndi)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaHand className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Mehndi</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          mehndi ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {mehndi && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Mehndi 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Mehndi 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Mehndi 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Mehndi 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Mehndi 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Mehndi 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 7 */}
                <div className="item7 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setDecor(!decor)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaTree className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Planning & Decor
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          decor ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {decor && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Planning & Decor 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 8 */}
                <div className="item8 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setFood(!food)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaUtensils className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Food</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          food ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {food && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Food 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Food 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Food 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Food 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Food 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Food 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 9 */}
                <div className="item9 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setInvites(!invites)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaEnvelope className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Invites & Gifts
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          invites ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {invites && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Invites & Gifts 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 10 */}
                <div className="item10 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setMusic(!music)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaHeadphones className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Music & Dance
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          music ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {music && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Music & Dance 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Music & Dance 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Music & Dance 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Music & Dance 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Music & Dance 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Music & Dance 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 11 */}
                <div className="item11 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setJewellery(!jewellery)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaHand className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">
                          Jewellery & Accessories
                        </span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          jewellery ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {jewellery && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Jewellery & Accessories 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 12 */}
                <div className="item6 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setHoneymoon(!honeymoon)}>
                    <div className="item_left flex items-center justify-between w-full">
                      <div className="w-2/12">
                        <FaHeartPulse className="w-5 h-5 text-textPrimary-900" />
                      </div>
                      <div className="w-full">
                        <span className="font-semibold text-sm">Honeymoon</span>
                      </div>
                    </div>
                    <div className="item_right text-end">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          honeymoon ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {honeymoon && (
                  <div className="sub_items pl-[37px] md:pl-14 mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Honeymoon 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Honeymoon 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Honeymoon 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Honeymoon 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Honeymoon 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Honeymoon 6</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Second Section */}
            <div className="photos_section px-4 py-4 border-b border-paginationBg-900">
              <div className="list_items w-full">
                {/* Second Section Item 1 */}
                <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setPhoto(!photo)}>
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <span className="font-semibold text-sm">Photos</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          photo ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {photo && (
                  <div className="sub_items mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">Photos 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photos 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photos 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photos 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photos 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">Photos 6</li>
                      </Link>
                    </ul>
                  </div>
                )}
                {/* Item 2 */}
                <div className="item2 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <Link href="/realwedding">
                          <span className="font-semibold text-sm">
                            Real Weddings
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <Link href="/blog">
                          <span className="font-semibold text-sm">Blogs</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="item4 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <Link href="/mynt">
                          <span className="font-semibold text-sm">
                            WMG Mynt
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="item5 mb-4 w-full text-textSecondary-900 cursor-pointer">
                  <div
                    className="main_items flex justify-between items-center"
                    onClick={() => setShop(!shop)}>
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <span className="font-semibold text-sm">Shop</span>
                      </div>
                    </div>
                    <div className="item_right">
                      <i
                        className={`fa-solid fa-chevron-down text-xs ${
                          shop ? "rotate-180" : ""
                        }`}></i>
                    </div>
                  </div>
                </div>
                {shop && (
                  <div className="sub_items mt-4">
                    <ul className="text-sm">
                      <Link href="/">
                        <li className="mb-4">shop 1</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">shop 2</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">shop 3</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">shop 4</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">shop 5</li>
                      </Link>
                      <Link href="/">
                        <li className="mb-4">shop 6</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Item 6 */}
                <div className="item6 w-full text-textSecondary-900 cursor-pointer">
                  <div className="main_items flex justify-between items-center">
                    <div className="item_left flex items-center w-full">
                      <div className="w-full">
                        <Link href="/invites">
                          <span className="font-semibold text-sm">
                            E-Invites
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section */}
            <div className="review_section px-4 py-4 border-b border-paginationBg-900">
              {/* Item 1 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/reviews">
                        <span className="font-semibold text-sm">
                          Write a Review
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="item2 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/download">
                        <span className="font-semibold text-sm">
                          Download the App
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Section */}
            <div className="about_section px-4 pt-4">
              {/* Item 1 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/about">
                        <span className="font-semibold text-xs">About</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item2 */}
              <div className="item1 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/terms">
                        <span className="font-semibold text-xs">
                          Terms & Condition
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item3 */}
              <div className="item3 mb-4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/policy">
                        <span className="font-semibold text-xs">
                          Privacy Policy
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item4 */}
              <div className="item4 w-full text-textSecondary-900 cursor-pointer">
                <div className="main_items flex justify-between items-center">
                  <div className="item_left flex items-center w-full">
                    <div className="w-full">
                      <Link href="/contact">
                        <span className="font-semibold text-xs">
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navba End */}
    </>
  );
};

export default Navbar;
