import ShortListCard from "@/components/userProfile/shortListCard";

const UserFinalizeVendor = () => {
  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="p-4 border-b border-b-paginationBg-900">
        <h2 className="text-base tracking-widest text-textSecondary-900 leading-none">
          Finalized
        </h2>
      </div>

      {/* Content */}
      <div className="my-4 px-4">
        {/* Card */}
        <ShortListCard
          image="/images.jpeg"
          name="Hotel Grand Maple"
          price="30,000"
        />
      </div>
    </div>
  );
};

export default UserFinalizeVendor;
