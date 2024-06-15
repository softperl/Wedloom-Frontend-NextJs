import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const InvitesCarousel = ({
  img,
  name,
  id,
}: {
  img: string;
  name: string;
  id: number;
}) => {
  return (
    <Link
      href={`/wedding-invitations/templates/${slugify(name)}/${id}`}
      className="w-full">
      <div className="InvitesCarousel__content w-full">
        <div className="wrapper w-full rounded-md">
          <div className="InvitesCarousel__img w-full h-[400px] rounded-md overflow-hidden relative">
            <Image
              src={img}
              alt={name}
              width={500}
              height={1000}
              className="w-full"
            />
          </div>
          <div className="InvitesCarousel_content py-4 text-textSecondary-900">
            <div className="name">
              <p className="text-base font-bold">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InvitesCarousel;
