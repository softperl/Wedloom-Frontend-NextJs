import React from "react";

export default function page({ params }: { params: { package: string } }) {
  return (
    <div className="text-xl text-center p-20 text-textPrimary-900">
      You are select {params?.package} package
    </div>
  );
}
