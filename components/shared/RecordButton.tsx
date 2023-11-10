import Image from "next/image";
import { Button } from "../ui/button";

export default function RecordButton() {
  return (
    <Button variant="secondary" size="icon">
      <Image
        src="/button-record.svg"
        alt="play button"
        width={30}
        height={30}
        // priority={true}
      />
    </Button>
  );
}
