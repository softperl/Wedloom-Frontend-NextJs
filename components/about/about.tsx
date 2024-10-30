"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const About = ({ about, data }: any) => {
  return (
    <section className="">
      <div className="about__content  bg-white shadow-md" ref={about}>
        <div className="about__top__content border-b border-paginationBg-900">
          <div className="about__heading px-5 py-4 text-lg lg:text-start text-center lg:text-2xl font-medium text-textBlack-900 border-b border-paginationBg-900">
            {/* <h5 style={{ fontSize: "22px" }}>
              About THE MEMORY CAPTURE - Wedding Photographers
            </h5> */}
          </div>

          <div className="about__description py-6 px-5">
            <div className="">
              <Markdown remarkPlugins={[remarkGfm]}>
                {data?.VendorProfileInfo[0]?.addInfo}
              </Markdown>
            </div>
          </div>
        </div>
        <div className="about__bottom__content my-4 px-5 lg:py-4">
          <div className="about__bottom__wrapper flex justify-between items-center lg:flex-nowrap flex-wrap">
            <div className="item1 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Been on{" "}
                  <span className="text-textPrimary-900">Site Name</span> Since
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Cinematography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Traditional Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Travel Cost
                </h5>
                <span className="text-textSecondary-900 text-sm pr-8">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
            <div className="item2 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Most Booked Package
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Studio Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Services offered
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Budget (Photo Package)
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
            </div>
            <div className="item3 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Package Days
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Industry Experience
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Pre-Wedding Shoot
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Budget (Photo + Video)
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
            <div className="item4 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Been on <span>Site Name</span> Since
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Cinematography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Traditional Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Travel Cost
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
