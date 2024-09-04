import Image from "next/image";
import Link from "next/link";

const PvenueCarousel = ({ img, name, links }: any) => {
  return (
    <div className="popular lg:h-36 h-full mb-4">
      <div className="popular__content flex justify-between gap-6">
        <div className="image w-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src={img}
            alt="popular"
            className="h-full w-full rounded-md"
          />
        </div>
        <div className="popular__content w-full flex flex-col">
          <h5 className="text-textSecondary-900 font-bold">{name}</h5>
          <div className="popular__links text-textPrimary-900">
            <div className="single__links my-1">
              <div className="flex flex-wrap gap-3 items-start">
                {links?.map((link: any, id: number) => {
                  return (
                    <Link key={id} href={link?.href}>
                      <span className="hover:font-semibold text-xs md:text-base capitalize">
                        {link?.name} |
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href="/all">
              <span className="underline hover:font-semibold text-xs md:text-base capitalize">
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
