import React from "react";
import SectionHeader from "@/components/sectionHeader";
import InhouseCard from "@/components/inhourseService/inhourseCard/inhouseCard";

const Inhouse = () => {
  const data = [
    {
      image: "/genie_dweb.webp",
      title: "Genesis Service",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image: "/genie_dweb.webp",
      title: "Service Two",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image: "/genie_dweb.webp",
      title: "Service Three",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image: "/genie_dweb.webp",
      title: "Service Four",
      subtitle: "Plan your dream wedding in your budget",
    },
  ];
  return (
    <section className="pt-16 pb-4">
      <div className="inhouse__container container mx-auto md:px-20 px-4">
        <SectionHeader text="Inhouse Services" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item: any, i: number) => {
            return (
              <InhouseCard
                key={i}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Inhouse;
