import Image from "next/image";

export default function BackSongButton() {
  return (
    <div className="border cursor-pointer">
      <Image
        src="/button-back-song.svg"
        alt="play button"
        width={30}
        height={30}
        priority={true}
      />
    </div>
  );
}
