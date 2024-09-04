import React from "react";
import SectionHeader from "@/components/sectionHeader";
import InhouseCard from "@/components/inhourseService/inhourseCard/inhouseCard";

const Inhouse = () => {
  const data = [
    {
      image:
        "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg",
      title: "Genesis Service",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image:
        "https://images.pexels.com/photos/11434577/pexels-photo-11434577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Service Two",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image:
        "https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1600",
      title: "Service Three",
      subtitle: "Plan your dream wedding in your budget",
    },
    {
      image:
        "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?cs=srgb&dl=pexels-kumar-saurabh-1456613.jpg&fm=jpg",
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
