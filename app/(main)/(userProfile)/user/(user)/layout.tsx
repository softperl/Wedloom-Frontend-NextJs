import UserRightCard from "@/components/userProfile/userRightCard";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="w-full h-[30vh] md:h-[50vh] bg-no-repeat bg-cover bg-top relative"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
url("https://onehorizonproductions.com/wp-content/uploads/2022/03/Alfisha-Fahad-habib-Day-2-3-One-Horizon-Productions-52.jpg")`,
        }}>
        {/* Black Overlay */}
        <img
          src="https://images.wedmegood.com/images/image_gradient.png"
          alt=""
          className="w-full h-full absolute inset-0 filter blur-sm"
        />

        {/* Contents */}
        <div className="banner-blur w-full h-full z-[1000]">
          {/* Name */}
          <div
            className="absolute top-[50%] left-[50%]"
            style={{
              transform: "translate(-50%, -100%)",
            }}>
            <h1 className="text-white text-2xl lg:text-4xl font-medium">
              Junaid Weds
            </h1>
          </div>
          <div
            className="w-full lg:w-9/12 mx-auto h-[40%] lg:h-[20%] lg:pt-[15%] pt-[40%] flex justify-center gap-20"
            style={{
              border: "2px solid #fff",
              borderColor: "transparent transparent #fff transparent",
              borderRadius: "0px 0px 50% 50%",
            }}>
            <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center rotate-6 lg:rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900">
              <h1 className="lg:text-5xl text-xl">0</h1>
              <p className="text-[13px] md:text-base">MONTH</p>
            </div>

            <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center -rotate-6 lg:-rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900">
              <h1 className="lg:text-5xl text-xl">0</h1>
              <p className="text-[13px] md:text-base">DAY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        {/* Content Container Start */}
        <div className="blogList_container_content container mx-auto lg:px-20 px-2 lg:py-14 py-4">
          <div className="w-full h-full flex justify-between flex-col lg:flex-row">
            {/* Left Side */}
            <div className="w-full lg:w-[15%] flex lg:flex-col flex-col-reverse">
              {/* Toggle Card */}
              <div className="px-5 lg:py-6 py-4 flex flex-col gap-5 bg-white shadow-sm w-full rounded-sm mb-4 lg:mb-0">
                {/* Setup Your wedding */}
                <Link
                  href="/setup-wedding"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Setup Your Wedding
                    </span>
                  </div>
                </Link>

                {/* Messages */}
                <Link
                  href="/user/inbox"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Messages
                    </span>
                  </div>
                </Link>

                {/* Love */}
                <Link
                  href="/user/profile"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Loves
                    </span>
                  </div>
                </Link>

                {/* Checklist */}
                <Link
                  href="/user/profile/checklists"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Checklists
                    </span>
                  </div>
                </Link>

                {/* Shortlist */}
                <Link
                  href="/user/profile/shortlists"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Shortlists
                    </span>
                  </div>
                </Link>

                {/* Finalize Vendor */}
                <Link
                  href="/user/profile/finalize-vendor"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Finalize Vendors
                    </span>
                  </div>
                </Link>

                {/* Settings */}
                <Link
                  href="/user/profile/settings"
                  // style={({ isActive }) =>
                  //   isActive ? activeStyle : defaultStyle
                  // }
                >
                  <div
                    className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}>
                    <span className="text-xs md:text-sm font-medium ml-1">
                      Settings
                    </span>
                  </div>
                </Link>
              </div>

              {/* Weddloom Contact */}
              <div className="bg-white shadow-sm w-full rounded-sm lg:mt-4 px-5 py-3 flex justify-center flex-col items-center gap-1 border-b border-b-paginationBg-900 lg:border-none mb-4 lg:mb-0 ">
                <h1 className="text-textPrimary-900 font-semibold">
                  WeddLoom Support
                </h1>

                <div className="flex items-center gap-2 text-textSecondary-900 cursor-pointer hover:text-[#00aef7] duration-100">
                  <i className="fa-solid fa-phone lg:text-xl"></i>
                  <span className="text-sm lg:text-base font-semibold">
                    0129874-564
                  </span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white shadow-sm w-full lg:w-[60%] rounded-sm overflow-hidden h-max mb-4 lg:mb-0">
              {children}
            </div>

            {/* Right Side */}
            <div className="bg-white shadow-sm w-full lg:w-[20%] rounded-sm overflow-hidden h-[60vh] overflow-y-scroll">
              <UserRightCard
                bg="https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg"
                text="Vendor"
                link="photographer"
                margin={true}
              />
              <UserRightCard
                bg="https://images.squarespace-cdn.com/content/v1/578537f5cd0f68f8a7411561/1563066377271-DST1DID3B4RHI35Q9X97/Phoenix+Wedding+Photographer"
                text="Photographer"
                link="photographer"
                margin={true}
              />
              <UserRightCard
                bg="https://www.sandeepshokeen.com/blog/wp-content/uploads/2019/11/1T1A7165-1200x800.jpg"
                text="Makeup"
                link="photographer"
                margin={true}
              />
              <UserRightCard
                bg="https://www.universestudio.in/wp-content/uploads/2022/07/Best-Wedding-Photographers-in-Varanasi-India-Universe-Studio-16.jpg"
                text="Bridal Wear"
                margin={true}
              />
              <UserRightCard
                bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-Zd0pU1fWoQirOfbuOnOKS0meXUxE9Bwbw&usqp=CAU"
                text="Groom Wear"
                margin={true}
              />
              <UserRightCard
                bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LiBwmhJ9mjPxDSYPo-sJzkD5gKNMlCUqm7mIcM_rf4Zi9YIl_jo-OtzNQggVLpghDic&usqp=CAU"
                text="Photography"
                margin={true}
              />
              <UserRightCard
                bg="https://wishnwed-blog-media.s3.ap-southeast-1.amazonaws.com/wordpress/uploads/2020/09/167419287_1095648420909697_597662823693753092_n-1024x697.jpg"
                text="Dressups"
              />
            </div>
          </div>
        </div>
        {/* Content Container End */}
      </div>
    </>
  );
}
