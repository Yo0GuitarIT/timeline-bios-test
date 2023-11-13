import Image from "next/image";
import { Button } from "../ui/button";

function BackSongButton({ clickBackSong }) {
  return (
    <Button variant="secondary" size="icon" onClick={clickBackSong}>
      <Image
        src="/button-back-song.svg"
        alt="play button"
        width={25}
        height={25}
        priority={true}
      />
    </Button>
  );
}

export default BackSongButton;
