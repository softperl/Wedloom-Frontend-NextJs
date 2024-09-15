"use client";
import { createReview, getReviewsDistribution } from "@/lib/api";
import { handelError, uploadFiles } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaSquareFacebook, FaStarHalfStroke, FaTwitter } from "react-icons/fa6";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import useUi from "@/lib/hooks/useUi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";
import { useParams, usePathname } from "next/navigation";
import useAuth from "@/lib/hooks/useAuth";
import { formatDate } from "date-fns/format";

const Review = ({ review, heading }: any) => {
  const pathname = usePathname();
  const params = useParams();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { refresh, setRefresh } = useUi();
  const [starRate, setStarRate] = useState(0);
  const [formData, setFormData] = useState({
    experience: "",
    spend: "",
    shareOnFacebook: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [reviewsDistribution, setReviewsDistribution] = useState<any>();

  const getReviewsDistributionFn = async () => {
    try {
      const { data } = await getReviewsDistribution(params?.profileId);
      setReviewsDistribution(data);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getReviewsDistributionFn();
  }, []);

  console.log(reviewsDistribution);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const urls = await uploadFiles(files, "others");
      await createReview({
        vendorId: params?.profileId,
        rating: starRate,
        feedback: formData?.experience,
        feedBackQuestion: formData?.spend,
        isShare: formData?.shareOnFacebook,
        photos: urls,
      });
      setStarRate(0);
      setFormData({
        experience: "",
        spend: "",
        shareOnFacebook: false,
      });
      setFiles([]);
      setRefresh(!refresh);
      toast.success("Review Submitted Successfully");
    } catch (error) {
      console.log(error);
      handelError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const checked =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : undefined;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const addFiles = (newFiles: FileList | null) => {
    if (newFiles) {
      const updatedFiles = [...files, ...Array.from(newFiles)];
      if (updatedFiles.length > 40) {
        setError(`You can upload a maximum of 40 images.`);
      } else {
        setFiles(updatedFiles);
        setError("");
      }
    }
  };

  const removeImage = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const reviewDistributions = [
    {
      count: reviewsDistribution?.distribution["5"],
      rating: 5,
    },
    {
      count: reviewsDistribution?.distribution["4"],
      rating: 4,
    },
    {
      count: reviewsDistribution?.distribution["3"],
      rating: 3,
    },
    {
      count: reviewsDistribution?.distribution["2"],
      rating: 2,
    },
    {
      count: reviewsDistribution?.distribution["1"],
      rating: 1,
    },
  ];
  return (
    <section ref={review}>
      <div className="review__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="review__top__content border-b border-paginationBg-900">
          <div className="about__heading px-5 py-4 text-lg text-center lg:text-start lg:text-2xl font-medium text-textBlack-900 border-b border-paginationBg-900 flex justify-between items-center">
            <div className="text">
              <h5 style={{ fontSize: "22px" }}>{heading}</h5>
            </div>
            <div className="heading_right lg:block hidden">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://wedplanr.com${pathname}`}>
                    <FaSquareFacebook className="text-[#4267B2]" />
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/intent/tweet?url=https://wedplanr.com${pathname}`}>
                    <FaTwitter className="text-[#1DA1F2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review_bottom_content lg:flex">
          <div className="rating_distribution lg:w-4/12 border-r border-paginationBg-900 px-5 py-8 lg:block hidden">
            <div className="progressbar">
              <div className="rating__distributon__heading flex items-center justify-between">
                <div>
                  <span className="text-textBlack-900 font-semibold">
                    Rating Distribution
                  </span>
                </div>
                <div className="review_box">
                  <div className="rating">
                    <div className="overall__rating">
                      <span className="inline-flex bg-textPrimary-900 px-4 py-2 text-white font-semibold">
                        <FaStar className="w-5 h-5 mr-2" />
                        {reviewsDistribution?.average}
                      </span>
                      <p className="mt-2 font-semibold text-textSecondary-900">
                        {reviewsDistribution?.totalReviews} reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rating__distribution_content mt-3 text-textSecondary-900 pb-3">
                {reviewDistributions?.map((item: any, i: number) => {
                  return (
                    <div key={i} className="5star flex items-center gap-4 mb-3">
                      <div className="checkbox w-1/12">
                        <input
                          type="checkbox"
                          className="scale-125 accent-textPrimary-900"
                        />
                      </div>
                      <div className="icon w-1/12 flex items-center justify-center">
                        <span>{item?.rating}</span>{" "}
                        <FaStar className="w-5 h-5 ml-1" />
                      </div>
                      <div className="progressbar w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-textPrimary-900 h-2.5 rounded-full"
                          style={{ width: "95%" }}></div>
                      </div>
                      <div className="totalReview w-3/12">
                        <span className="text-sm">
                          {item?.count || 0} reviews
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <span className="text-sm text-textSecondary-900">
              {reviewsDistribution?.lastReview?.createdAt && (
                <i>
                  Last Review Update on{" "}
                  {formatDate(
                    reviewsDistribution?.lastReview?.createdAt,
                    "d MMM YYY p"
                  )}
                </i>
              )}
            </span>
          </div>
          <div className="rating_form w-full lg:w-8/12 px-4 lg:px-12 py-6">
            <div className="rating_form_content">
              <div className="rating__form_heading">
                <h5 className="text-base text-textBlack-900 font-semibold">
                  Review THE MEMORY CAPTURE
                </h5>
              </div>
              <div className="rating__form__subheading lg:my-6 mt-4 mb-1">
                <h6 className="text-textBlack-900 font-semibold">
                  Rate Vendor*
                </h6>
              </div>
              <form onSubmit={handleSubmit} className="form__start">
                <div className="checkbox lg:flex lg:justify-between w-full">
                  <div className="flex gap-3 items-center justify-center">
                    {user ? (
                      <ReactStars
                        count={5}
                        size={30}
                        a11y={true}
                        value={starRate}
                        color="#DDD"
                        activeColor="#e72e77"
                        isHalf={true}
                        onChange={(newRating: any) => setStarRate(newRating)}
                        emptyIcon={<FaRegStar className="w-8 h-8" />}
                        halfIcon={<FaStarHalfStroke className="w-8 h-8" />}
                        filledIcon={<FaStar className="w-8 h-8" />}
                      />
                    ) : (
                      <ReactStars
                        count={5}
                        size={30}
                        a11y={true}
                        color="#DDD"
                        activeColor="#e72e77"
                        emptyIcon={<FaRegStar className="w-8 h-8" />}
                        halfIcon={<FaStarHalfStroke className="w-8 h-8" />}
                        filledIcon={<FaStar className="w-8 h-8" />}
                      />
                    )}
                    <button
                      disabled={user && true}
                      type="button"
                      onClick={() => setStarRate(0)}>
                      Reset
                    </button>

                    <span className="text-textSecondary-900 font-semibold text-lg">
                      {starRate} Star
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <label className="flex gap-4 items-center">
                      <input
                        type="checkbox"
                        name="shareOnFacebook"
                        checked={formData.shareOnFacebook}
                        onChange={handleChange}
                        disabled={user ? false : true}
                        className="scale-125 accent-textPrimary-900"
                      />
                      <span>Share on Facebook</span>
                    </label>
                  </div>
                </div>
                <div className="textarea mt-6 mb-2 lg:my-6">
                  <textarea
                    className="w-full border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 border p-2"
                    id=""
                    cols={30}
                    rows={7}
                    placeholder="Tell us about your experience*"
                    disabled={user ? false : true}
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}></textarea>
                </div>
                <div className="input_area">
                  <input
                    type="text"
                    placeholder="How much do you spend on this vendor?"
                    className="p-3 w-full border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 border"
                    name="spend"
                    value={formData.spend}
                    onChange={handleChange}
                    disabled={user ? false : true}
                  />
                </div>
                {files.length > 0 && (
                  <div className="mt-10 w-full flex flex-wrap items-center gap-4">
                    {files.slice(0, 40).map((img, i) => {
                      return (
                        <div
                          key={i}
                          className="w-20 h-20 border-paginationBg-900 border p-1 relative">
                          <Image
                            fill
                            src={URL.createObjectURL(img)}
                            alt="images"
                            className="w-full h-full"
                          />

                          {/* close */}
                          <div
                            className="text-textPrimary-900 absolute top-[-10px] -right-[5px] cursor-pointer"
                            onClick={() => removeImage(i)}>
                            <IoClose className="w-5 h-5 text-white bg-textPrimary-900 rounded-sm" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="button_area mt-4 text-center lg:text-end">
                  <label htmlFor="file">
                    <button
                      disabled={
                        isLoading || user?.id === params?.profileId || user
                          ? false
                          : true
                      }
                      className="inline-flex border border-paginationBg-900 px-4 py-2 text-textSecondary-900 disabled:bg-gray-200 disabled:opacity-50">
                      Add Photos
                    </button>
                    <input
                      type="file"
                      id="file"
                      multiple
                      style={{ display: "none" }}
                      onChange={(e) => addFiles(e.target.files)}
                      disabled={
                        isLoading || user?.id === params?.profileId || !user
                          ? true
                          : false
                      }
                    />
                  </label>
                  <button
                    type={"submit"}
                    disabled={
                      isLoading ||
                      user?.id === params?.profileId ||
                      (!user ? true : false)
                    }
                    className="bg-textPrimary-900 disabled:bg-textPrimary-900/50 px-4 py-2 text-white ml-4 inline-flex items-center">
                    {isLoading ? "Please wait" : "Submit Review"}
                    {isLoading && (
                      <AiOutlineLoading className="animate-spin ml-2" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
