import Image from "next/image";
import { Button } from "../ui/button";

export default function ForwardButton() {
    return (
      <Button variant="secondary" size="icon">
        <Image
          src="/button-forward.svg"
          alt="play button"
          width={25}
          height={25}
        />
      </Button>
    );
}
