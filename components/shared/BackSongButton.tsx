import Image from "next/image";
import { Button } from "../ui/button";

export default function BackSongButton() {
  return (
    <Button variant="secondary" size="icon">
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
