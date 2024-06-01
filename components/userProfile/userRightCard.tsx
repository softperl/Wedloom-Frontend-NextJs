import Link from "next/link";

const UserRightCard = ({
  bg,
  link,
  text,
  margin = false,
}: {
  bg: string;
  link?: string;
  text: string;
  margin?: boolean;
}) => {
  return (
    <div
      className={`w-full h-32 rounded-md ${margin && "mb-2"}`}
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Text */}
      <Link href={link || "/"}>
        <div className="w-full h-full bg-black bg-opacity-60 text-white cursor-pointer flex justify-center items-center">
          <h1 className="text-base md:text-lg font-medium capitalize">
            {text}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default UserRightCard;
