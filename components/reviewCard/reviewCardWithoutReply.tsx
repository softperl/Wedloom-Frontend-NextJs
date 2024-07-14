import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaShare, FaStar } from "react-icons/fa";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";

const ReviewCardWithoutReply = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  const [viewLess, setViewLess] = useState(false);
  return (
    <>
      <div className="w-full py-6 px-3 lg:px-5">
        <div className="review__card__content">
          <div className="review_card_heading flex justify-between items-center">
            <div className="heading_left flex gap-4 w-full justify-between lg:justify-start lg:w-max">
              <div className="name_image flex items-center gap-4">
                <Image
                  fill
                  src={image}
                  alt="bride_image"
                  className="w-12 lg:w-14 h-12 lg:h-14 rounded-full"
                />
                <div className="name">
                  <h5 className="text-textBlack-900 font-bold mb-1 lg:text-base text-sm">
                    {name}
                  </h5>
                  <p className="text-textSecondary-900 text-xs lg:text-sm">
                    4 months ago
                  </p>
                </div>
              </div>

              <div className="overall__rating flex items-center justify-center">
                <span className="bg-textPrimary-900 p-1 text-white font-semibold lg:text-base text-sm inline-flex">
                  <FaStar className="w-5 h-5 mr-2" />
                  5.0
                </span>
              </div>
            </div>
            <div className="heading_right lg:block hidden">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.facebook.com">
                    <FaSquareFacebook className="text-[#4267B2]" />
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.twitter.com">
                    <FaTwitter className="text-[#4267B2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="review_content mt-4">
            <div className="initial_view h-14 overflow-hidden pr-5 text-textSecondary-900 leading-7 font-normal text-xs lg:text-sm">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur illum aliquid voluptate autem, ipsum reprehenderit
                nam, ab labore, delectus ipsa sunt excepturi doloribus eius
                repellendus quia. Possimus quibusdam consequatur perspiciatis,
                rem officiis modi reiciendis mollitia reprehenderit consequuntur
                assumenda in rerum molestias doloremque eos quae tempore
                delectus suscipit architecto? Repellat, corporis?
              </span>
            </div>

            {viewLess && (
              <div className="hidden_view text-textSecondary-900 leading-7 font-normal text-xs lg:text-sm pr-5">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in tempora adipisci accusamus quisquam quam
                  perspiciatis tempore consequatur ipsum ipsa quis eligendi,
                  neque fugit fuga officiis, sint consequuntur quos similique
                  vitae dolorem debitis. Omnis corrupti doloribus molestias
                  nostrum tenetur, sit id doloremque est recusandae reiciendis
                  minus voluptatum accusantium et? Debitis, et optio? Dolorum
                  dolores autem quam atque quisquam quibusdam deserunt!
                </span>
              </div>
            )}
            <span
              className="text-xs lg:text-sm font-bold text-textSecondary-900 cursor-pointer"
              onClick={() => setViewLess(!viewLess)}>
              {viewLess ? "Read Less.." : "..Read More"}
            </span>
            <div className="block lg:hidden mt-4">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.facebook.com">
                    <FaSquareFacebook className="text-[#4267B2]" />
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.twitter.com">
                    <FaTwitter className="text-[#4267B2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Card */}
      <div
        className="w-full bg-copyrightFooter-900 px-3 lg:px-6 pb-3 text-textSecondary-900 border-b border-t border-paginationBg-900
    ">
        <div className="review__content w-full mt-1">
          <span className="text-textSecondary-900 font-semibold text-xs lg:text-sm">
            Write a Reply
          </span>
          <div className="admin flex flex-col lg:flex-row lg:gap-4 gap-2 lg:items-center mt-1">
            <textarea
              rows={5}
              maxLength={500}
              className="w-full bg-transparent outline-none border text-xs lg:text-sm resize-none p-2"></textarea>
            <button className="text-white bg-textPrimary-900 py-2 px-6 lg:px-0 rounded-md w-max lg:w-[10%] text-xs lg:text-sm inline-flex items-center">
              Reply <FaShare className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCardWithoutReply;
