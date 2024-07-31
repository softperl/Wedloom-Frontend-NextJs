"use client";
import { useState } from "react";
import MembershipCard from "./membershipCard";

const MemberShip = () => {
  const [planType, setPlanType] = useState("Yearly");

  // Yearly Toggle Function
  const yearlyMembership = () => {
    setPlanType("Yearly");
  };

  // Monthly Toggle Function
  const monthlyMembership = () => {
    setPlanType("Monthly");
  };

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-2 py-3 flex flex-col lg:flex-row justify-between lg:items-center">
        <div>
          <h5 className="text-textSecondary-900 text-[14px] lg:text-[15px]">
            Membership Packages
          </h5>
          <p className="text-textSecondary-900 text-[11px] lg:text-[13px]">
            (To know more about how to increase your visibility on our platform,
            reach us on vendors@weedloom.com or +92-9080-581-008)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2 lg:mt-0">
          <button
            className={`border p-2 px-4 text-xs lg:text-sm rounded-sm ${
              planType === "Monthly"
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={monthlyMembership}>
            Monthly
          </button>
          <button
            className={`border p-2 px-4 text-xs lg:text-sm ${
              planType === "Yearly"
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={yearlyMembership}>
            Yearly
          </button>
        </div>
      </div>

      <MembershipCard planType={planType} />
    </div>
  );
};

export default MemberShip;
