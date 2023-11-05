import Link from "next/link";
import { ModeToggle } from "@/components/Mode-toggle";
import { Button } from "@/components/ui/button";

export default function MainPage() {
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="w-full h-8 border flex justify-center items-center">
          navBar
        </div>
        <div className="w-auto h-auto flex">
          <div className="w-48 h-100 border flex justify-center items-center">
            trackInfo
          </div>
          <div className="w-full">
            <div className="w-full h-4 border flex justify-center items-center">
              timeLine
            </div>
            <div className="w-full h-32 border flex justify-center items-center bg-green-300">
              track
            </div>
            <div className="w-full h-32 border flex justify-center items-center bg-orange-300">
              track
            </div>
            <div className="w-full h-32 border flex justify-center items-center bg-blue-300">
              track
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
