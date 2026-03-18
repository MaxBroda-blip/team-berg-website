import React from "react";

type MediaItem =
  | string
  | {
      type: "video";
      src: string;
      poster?: string;
    };

interface ProjectDisplayProps {
  title: string;
  images: MediaItem[][];
  description: React.ReactNode;
}

const ProjectDisplay = ({
  title,
  images,
  description
}: ProjectDisplayProps) => {
  const renderImage = (
    src: string,
    key: number,
    isDouble: boolean
  ) => {
    const widthClass = isDouble
      ? "w-full md:w-[48%]"
      : "w-full md:w-full";

    return (
      <img
        key={key}
        src={src}
        alt=""
        className={`h-[700px] object-contain ${widthClass}`}
      />
    );
  };

  const renderVideo = (
    item: Extract<MediaItem, { type: "video" }>,
    key: number,
    isDouble: boolean
  ) => {
    const widthClass = isDouble
      ? "md:max-w-[48%]"
      : "md:max-w-full";

    return (
      <video
        key={key}
        controls
        preload="none"
        playsInline
        poster={item.poster}
        className={`h-[700px] w-auto max-w-full ${widthClass} object-contain`}
      >
        <source src={item.src} type="video/mp4" />
        Ihr Browser unterstützt dieses Videoformat nicht.
      </video>
    );
  };

  return (
    <div className="mb-40 project-display-mobile">
      <h2 className="font-courier font-bold text-tiny text-foreground mb-12 px-8 md:px-16 max-w-[1800px] mx-auto">
        {title}
      </h2>

      <div className="mb-12 max-w-[1400px] mx-auto flex flex-col gap-6">
        {images.map((group, groupIndex) => {
          const isDouble = group.length === 2;

          return (
            <div
              key={groupIndex}
              className={`px-8 md:px-16 flex flex-col md:flex-row justify-center items-center ${
                isDouble ? "gap-4 md:gap-6" : ""
              }`}
            >
              {group.map((item, idx) =>
                typeof item === "string"
                  ? renderImage(item, idx, isDouble)
                  : renderVideo(item, idx, isDouble)
              )}
            </div>
          );
        })}
      </div>

      <div className="px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="font-courier text-tiny text-foreground leading-relaxed text-left">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
