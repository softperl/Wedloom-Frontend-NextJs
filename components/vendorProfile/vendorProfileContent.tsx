import Link from "next/link";

const VendorProfileContent = ({ children }: { children: React.ReactNode }) => {
  // let activeStyle = {
  //   color: "#00aef7",
  // };

  // let defaultStyle = {
  //   color: "#4A4A4A",
  // };

  return (
    <div className="bg-[#efefef]">
      {/* Content Container Start */}
      <div className="blogList_container_content container mx-auto lg:px-20 px-2 lg:py-14 py-4">
        <div className="w-full h-full flex justify-between flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-[15%]">
            {/* Toggle Card */}
            <div className="px-5 lg:py-6 py-4 flex flex-col gap-6 bg-white shadow-sm w-full rounded-sm">
              {/* Information */}
              <Link
                href="/vendor/profile"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5 cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-solid fa-circle-exclamation lg:text-lg"></i>
                  <span className="md:text-sm text-xs font-medium">
                    Profile Informations
                  </span>
                </div>
              </Link>

              {/* Projects */}
              <Link
                href="/vendor/profile/projects"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5 cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-regular fa-images lg:text-lg"></i>
                  <span className="text-xs lg:text-sm font-medium">
                    Projects
                  </span>
                </div>
              </Link>

              {/* Membership plans */}
              <Link
                href="/vendor/profile/membership"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-solid fa-desktop lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium">
                    Membership Plans
                  </span>
                </div>
              </Link>

              {/* Reviews */}
              <Link
                href="/vendor/profile/reviews"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-regular fa-comments lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium">
                    Reviews
                  </span>
                </div>
              </Link>

              {/* Banquets */}
              <Link
                href="/vendor/profile/banquets"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-solid fa-venus lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium ml-2">
                    Banquets
                  </span>
                </div>
              </Link>

              {/* Banquets */}
              <Link
                href="/vendor/profile/menu"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-regular fa-file-zipper lg:text-lg ml-[2px]"></i>
                  <span className="text-xs md:text-sm font-medium ml-2">
                    Menu
                  </span>
                </div>
              </Link>

              {/* Profile Analytics */}
              <Link
                href="/vendor/profile/analytics"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-regular fa-chart-bar lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Analytics
                  </span>
                </div>
              </Link>

              {/* Settings */}
              <Link
                href="/vendor/profile/settings"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-solid fa-gear lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Settings
                  </span>
                </div>
              </Link>

              {/* Settings */}
              <Link
                href="/vendor/profile/inbox"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
              >
                <div
                  className={`flex items-center gap-5  cursor-pointer hover:text-[#00aef7] duration-100`}>
                  <i className="fa-regular fa-message lg:text-lg"></i>
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Messages
                  </span>
                </div>
              </Link>
            </div>

            {/* Weddloom Contact */}
            <div className="bg-white shadow-sm w-full rounded-sm mt-4 px-5 py-3 flex justify-center flex-col items-center gap-1 border-b border-b-paginationBg-900 lg:border-none mb-4 lg:mb-0">
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

          {/* Right Side */}
          <div className="bg-white shadow-sm w-full lg:w-[80%] rounded-sm overflow-hidden h-max">
            {children}
          </div>
        </div>
      </div>
      {/* Content Container End */}
    </div>
  );
};

export default VendorProfileContent;
