import React, { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

export const InputField = ({
  control,
  name,
  label,
  righticon,
  ...props
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <div className="w-full relative">
            {label && (
              <div className="bg-white px-2 absolute left-[15px] top-[-15%]">
                <label
                  className="block text-base font-bold text-textPrimary-900"
                  htmlFor="email">
                  {label}
                </label>
              </div>
            )}
            <div className="">
              <input
                className={cn(
                  "w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold",
                  error && "border-textPrimary-900"
                )}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
              />
              {righticon && (
                <div className="absolute right-5 top-0 h-full flex items-center">
                  <span
                    className={cn(
                      "text-2xl text-paginationBg-900 cursor-pointer"
                    )}>
                    {righticon}
                  </span>
                </div>
              )}
            </div>
          </div>
          {error && (
            <span className="text-textPrimary-900 text-sm font-semibold mt-1">
              {error.message}
            </span>
          )}
        </>
      )}
    />
  );
};
