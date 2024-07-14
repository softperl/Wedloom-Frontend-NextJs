import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const FvendrosCarousel = ({
  img,
  name,
  summary,
  price,
  rating,
}: {
  img: string;
  name: string;
  summary: string;
  price: string;
  rating: any;
}) => {
  return (
    <div className="w-full group">
      <div className="FvendrosCarousel__content w-full">
        <div className="wrapper w-full rounded-md">
          <div className="FvendrosCarousel__img w-full overflow-hidden relative">
            <Image
              fill
              src={img}
              alt=""
              className="w-full h-64 group-hover:scale-125 duration-200 rounded-md"
            />
            <div className="rating text-base bg-textPrimary-900 w-max p-1 font-bold absolute top-2 right-4 flex items-center flex-nowrap">
              <FaStar className="w-5 h-5" />
              <span>{rating}</span>
            </div>
          </div>
          <div className="FvendrosCarousel_content py-4 text-textSecondary-900">
            <div className="name">
              <p className="text-base font-bold">{name}</p>
            </div>
            <div className="summary my-2">
              <p className="text-sm text-dateColor-900">{summary}</p>
            </div>
            <div className="date">
              <span className="text-base font-semibold text-textPrimary-900">
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FvendrosCarousel;
