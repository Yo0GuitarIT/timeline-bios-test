"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? "Pause" : "Play");
  };

  return (
    <Button variant="secondary" size="icon" onClick={handlePlayClick}>
      <Image
        src={isPlaying ? "/button-pause.svg" : "/button-play.svg"}
        alt={isPlaying ? "pause button" : "play button"}
        width={25}
        height={25}
        priority={true}
      />
    </Button>
  );
}

export default PlayButton;
