import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

function PlayButton({ clickPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    clickPlay(!isPlaying);
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

//
