import Link from "next/link";

const PvenueCarousel = ({
  img,
  name,
  link1,
  link2,
  link3,
  link4,
  link5,
  link1Text,
  link2Text,
  link3Text,
  link4Text,
}: any) => {
  return (
    <div className="popular lg:h-36 h-full mb-4">
      <div className="popular__content flex justify-between gap-6">
        <div className="image w-full">
          <img src={img} alt="popular" className="h-full w-full rounded-md" />
        </div>
        <div className="popular__content w-full flex flex-col">
          <h5 className="text-textSecondary-900 font-bold">{name}</h5>
          <div className="popular__links text-textPrimary-900">
            <div className="single__links my-1">
              <div className="fristTwoAnswer flex gap-3 items-start">
                <Link href={link1}>
                  <span className="hover:font-semibold text-xs md:text-base">
                    {link1Text ? link1Text : "Link One"} |
                  </span>
                </Link>
                <Link href={link2}>
                  <span className="hover:font-semibold text-xs md:text-base">
                    {link2Text ? link2Text : "Link Two"} |
                  </span>
                </Link>
              </div>

              <div className="secondTwoAnswer flex gap-3 items-start">
                <Link href={link3}>
                  <span className="hover:font-semibold text-xs md:text-base">
                    {link3Text ? link3Text : "Link Three"} |
                  </span>
                </Link>
                <Link href={link4}>
                  <span className="hover:font-semibold text-xs md:text-base">
                    {link4Text ? link4Text : "Link Four"} |
                  </span>
                </Link>
              </div>
            </div>
            <Link href={link5}>
              <span className="underline hover:font-semibold text-xs md:text-base">
                All Location
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvenueCarousel;
