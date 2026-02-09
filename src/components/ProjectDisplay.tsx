import React from "react";

interface ProjectDisplayProps {
  title: string;
  images: string[][];
  description: React.ReactNode;
  videoSrc?: string; // optionales Video
}

const ProjectDisplay = ({
  title,
  images,
  description,
  videoSrc
}: ProjectDisplayProps) => {
  return (
    <div className="mb-40 project-display-mobile">
      {/* Titel */}
      <h2 className="font-courier font-bold text-tiny text-foreground mb-12 px-8 md:px-16 max-w-[1800px] mx-auto">
        {title}
      </h2>

      {/* Bilder */}
      <div className="space-y-8 mb-12 max-w-[1800px] mx-auto">
        {images.map((group, groupIndex) => {
          if (group.length === 2) {
            return (
              <div
                key={groupIndex}
                className="px-8 md:px-16 flex flex-col md:flex-row justify-center items-center gap-6"
              >
                {group.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt=""
                    className="h-[700px] w-auto max-w-full md:max-w-[48%] object-contain"
                  />
                ))}
              </div>
            );
          }

          return (
            <div key={groupIndex} className="px-8 md:px-16">
              <img
                src={group[0]}
                alt=""
                className="w-auto h-[700px] object-contain mx-auto mb-6"
              />
            </div>
          );
        })}

        {/* Video am Ende */}
        {videoSrc && (
          <div className="px-8 md:px-16">
            <video
              controls
              className="w-full max-w-full mx-auto mb-6"
            >
              <source src={videoSrc} type="video/mp4" />
              Ihr Browser unterstützt dieses Videoformat nicht.
            </video>
          </div>
        )}
      </div>

      {/* Beschreibung */}
      <div className="px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="font-courier text-tiny text-foreground leading-relaxed text-left">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;




























