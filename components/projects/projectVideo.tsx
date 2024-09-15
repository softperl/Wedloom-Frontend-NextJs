import React from "react";

const ProjectVideo = ({ data }: { data: any }) => {
  return (
    <div className="proejctVideo w-full">
      <div className="projectVideo__content grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.map((item: any, i: number) => {
          return (
            <div key={i} className="project__video">
              <iframe
                className="w-full h-56"
                src={`https://www.youtube.com/embed/${item?.video}`}
                title="32Stitches & CHENDA, Harley Bird - Freedom [NCS Release]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectVideo;
