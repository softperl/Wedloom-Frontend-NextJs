"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoBudgetCard = ({
  circle,
  heading,
  image1,
  image2,
  image3,
  image4,
  category1,
  category2,
  category3,
  category4,
}: {
  circle?: boolean;
  heading?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  category1?: string;
  category2?: string;
  category3?: string;
  category4?: string;
}) => {
  return (
    <div className="photographers__budget w-full px-3 py-4 bg-white text-textSecondary-900 shadow-md">
      <div className="photofraphers__budget__content">
        <div className="photographersBudget__title text-center">
          <h4 className="text-lg text-textSecondary-900 font-bold">
            {heading}
          </h4>
        </div>
        <div className="photgrapher__category">
          <div className="value__for__money flex items-center justify-between gap-6 py-4">
            {/* Budget Friendly and Value For Money */}
            <div className="budget__friendly w-full flex flex-col items-center justify-center mb-4 flex-wrap">
              <Link href="/budgetphotographer/id">
                <div className="budgetFriendly__image">
                  <Image
                    width={500}
                    height={500}
                    src={image1 || ""}
                    alt="budgetFriendlt__Image"
                    className={`w-16 h-16 ${
                      circle ? "rounded-full" : "rounded-lg"
                    }`}
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="mt-2 text-sm font-medium">{category1}</p>
              </div>
            </div>

            <div className="valueformoney w-full flex text-center flex-col items-center justify-center mb-4">
              <Link href="/budgetphotographer/id">
                <div className="valueformoney__image">
                  <Image
                    width={500}
                    height={500}
                    src={image2 || ""}
                    alt="budgetFriendlt__Image"
                    className={`w-16 h-16 ${
                      circle ? "rounded-full" : "rounded-lg"
                    }`}
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="mt-2 text-sm font-medium">{category2}</p>
              </div>
            </div>
          </div>

          {/* PRemium Pack */}
          <div className="premium__pack flex items-center justify-between gap-6">
            {/* Permium */}
            <div className="budget__friendly w-full flex text-center flex-col items-center justify-center mb-4">
              <Link href="/budgetphotographer/id">
                <div className="budgetFriendly__image">
                  <Image
                    width={500}
                    height={500}
                    src={image3 || ""}
                    alt="budgetFriendlt__Image"
                    className={`w-16 h-16 ${
                      circle ? "rounded-full" : "rounded-lg"
                    }`}
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="mt-2 text-sm font-medium">{category3}</p>
              </div>
            </div>

            {/* Luxury */}
            <div className="luxury__pack w-full text-center flex flex-col items-center justify-center mb-4">
              <Link href="/budgetphotographer/id">
                <div className="budgetFriendly__image">
                  <Image
                    width={500}
                    height={500}
                    src={image4 || ""}
                    alt="budgetFriendlt__Image"
                    className={`w-16 h-16 ${
                      circle ? "rounded-full" : "rounded-lg"
                    }`}
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="mt-2 text-sm font-medium">{category4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBudgetCard;
