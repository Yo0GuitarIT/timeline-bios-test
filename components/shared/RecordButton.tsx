import Image from "next/image";

export default function RecordButton() {
  return (
    <div className="border cursor-pointer">
      <Image
        src="/button-record.svg"
        alt="play button"
        width={30}
        height={30}
        // priority={true}
      />
    </div>
  );
}
