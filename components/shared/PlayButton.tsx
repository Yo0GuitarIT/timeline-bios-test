"use client"

import Image from "next/image";

export default function PlayButton() {
  const handlePlayClick = () => {
    console.log("Play Button");
  }
  return (
    <div className="border cursor-pointer " onClick={handlePlayClick}>
      <Image
        src="/button-play.svg"
        alt="play button"
        width={30}
        height={30}
        priority={true}
      />
    </div>
  );
}
