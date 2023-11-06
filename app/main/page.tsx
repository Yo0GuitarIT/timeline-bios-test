import Link from "next/link";
import { ModeToggle } from "@/components/Mode-toggle";
import { Button } from "@/components/ui/button";
import PlayButton from "@/components/shared/PlayButton";
import RecordButton from "@/components/shared/RecordButton";
import BackwardButton from "@/components/shared/BackwardButton";
import BackSongButton from "@/components/shared/BackSongButton";
import ForwardButton from "@/components/shared/ForwardButton";

export default function MainPage() {
  return (
    <>
      <div
        id="studio"
        className="flex flex-col justify-between w-screen h-screen "
      >
        <div
          id="studioHead"
          className="w-full h-12 border flex justify-center items-center"
        >
          navBar
        </div>
        <div id="studioMain" className="w-full h-full flex flex-col ">
          <div className="flex">
            <div className="w-72 h-20 border">emptry</div>
            <div className="w-full border">timeline</div>
          </div>
          <div className="flex h-full">
            <div className="w-72 h-full border">trackInfo</div>
            <div className="w-full border ">audio</div>
          </div>
        </div>
        <div
          id="studioFooter"
          className="w-full h-16 border flex items-center justify-center box-border p-3"
        >
          <BackSongButton />
          <BackwardButton />
          <ForwardButton />
          <PlayButton />
          <RecordButton />
          {/* <ModeToggle />
          <Link href="/">
            <Button>Home</Button>
          </Link> */}
        </div>
      </div>
    </>
  );
}
