import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

const WSubMenu = () => {
  return (
    <div className="pSub_menu bg-white py-4 text-textSecondary-900 px-12 shadow-sm">
      <div className="pSubment__content flex justify-between">
        {/* Sub Sort By */}
        <div className="sub__nofdays w-full">
          {/* Form Start */}
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Trending"
                name="days"
                value="Trending"
              />
              <label className="pl-2" htmlFor="Trending">
                Trending
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Newest"
                name="days"
                value="Newest"
              />
              <label className="pl-2" htmlFor="Newest">
                Newest
              </label>
            </div>
          </form>
          {/* Form ENd */}
        </div>

        {/* Number of Days */}
        <div className="sub__nofdays w-full">
          {/* Form Start */}

          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Hindu"
                name="days"
                value="Hindu"
              />
              <label className="pl-2" htmlFor="Hindu">
                Hindu
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="South Indian"
                name="days"
                value="South Indian"
              />
              <label className="pl-2" htmlFor="South Indian">
                South Indian
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Muslim"
                name="days"
                value="Muslim"
              />
              <label className="pl-2" htmlFor="Muslim">
                Muslim
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Christian"
                name="days"
                value="Christian"
              />
              <label className="pl-2" htmlFor="Christian">
                Christian
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Marathi"
                name="days"
                value="Marathi"
              />
              <label className="pl-2" htmlFor="Marathi">
                Marathi
              </label>
            </div>
          </form>
          {/* Form ENd */}
        </div>

        {/* Services */}
        <div className="sub__services w-full">
          {/* Form Start */}
          <form className="flex flex-col gap-y-1">
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Traditional"
                name="days"
                value="Traditional"
              />
              <label className="pl-2" htmlFor="Traditional">
                Traditional
              </label>
            </div>

            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Elegant"
                name="days"
                value="Elegant"
              />
              <label className="pl-2" htmlFor="Elegant">
                Elegant
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Caricature"
                name="days"
                value="Caricature"
              />
              <label className="pl-2" htmlFor="Caricature">
                Caricature
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Royal"
                name="days"
                value="Royal"
              />
              <label className="pl-2" htmlFor="Royal">
                Royal
              </label>
            </div>
            <div>
              <input
                className="accent-textPrimary-900 scale-125"
                type="radio"
                id="Luxury"
                name="days"
                value="Luxury"
              />
              <label className="pl-2" htmlFor="Luxury">
                Luxury
              </label>
            </div>
          </form>
          {/* Form End */}
        </div>
      </div>

      {/* Button Section */}
      <div className="WSubmenu__buttons w-full mt-6 flex gap-4 justify-center">
        <button className="border border-textSecondary-900 py-2 px-8 font-medium hover:bg-textSecondary-900 hover:text-white duration-300">
          <Link href="*">Reset</Link>
        </button>
        <button className="border border-textPrimary-900 text-textPrimary-900 py-2 px-4 font-medium hover:bg-textPrimary-900 hover:text-white duration-300">
          <Link href="*">View Results</Link>
        </button>
      </div>
      {/* Button End */}
    </div>
  );
};

export default WSubMenu;
