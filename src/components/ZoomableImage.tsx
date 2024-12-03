"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ZoomableImage = ({ src, alt, width, height }: ZoomableImageProps) => {
  return (
    <Zoom>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "cover", cursor: "zoom-in" }}
      />
    </Zoom>
  );
};

export default ZoomableImage;
