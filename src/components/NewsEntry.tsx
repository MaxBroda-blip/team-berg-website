import React from "react";

interface NewsEntryProps {
  image: string;
  caption: string;
}

const NewsEntry = ({ image, caption }: NewsEntryProps) => {
  return (
    <div className="mb-32 max-w-[900px] mx-auto px-8">
      <img
        src={image}
        alt=""
        className="w-auto h-[400px] sm:h-[500px] md:h-[600px] object-contain mb-6 mx-auto"
      />
      <p className="font-courier text-tiny text-foreground text-center">
        {caption}
      </p>
    </div>
  );
};

export default NewsEntry;



