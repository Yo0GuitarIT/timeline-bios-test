import Image from "next/image";
import { Button } from "../ui/button";

export default function BackwardButton() {
  return (
    <Button variant="secondary" size="icon">
      <Image
        src="/button-backward.svg"
        alt="play button"
        width={25}
        height={25}
        priority={true}
      />
    </Button>
  );
}
