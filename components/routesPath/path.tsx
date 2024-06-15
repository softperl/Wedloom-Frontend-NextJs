import React from "react";

const Path = ({ first, second, third, fourth, fifth }: any) => {
  return (
    <div className="photographer__page__content">
      <div className="path text-dateColor-900 text-sm font-">
        {first && (
          <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
            {first}
          </span>
        )}
        {first && second && " > "}
        {second && (
          <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
            {second}
          </span>
        )}
        {second && third && " > "}
        {third && (
          <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
            {third}
          </span>
        )}
        {third && fourth && " > "}
        {fourth && (
          <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
            {fourth}
          </span>
        )}
        {fourth && fifth && " > "}
        {fifth && (
          <span className="hover:text-textPrimary-900 duration-150 cursor-pointer">
            {fifth}
          </span>
        )}
      </div>
    </div>
  );
};

export default Path;
