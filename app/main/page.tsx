"use client"

import Link from "next/link";

import { useState, useEffect } from "react";

import { ModeToggle } from "@/components/Mode-toggle";
import { Button } from "@/components/ui/button";
import PlayButton from "@/components/shared/PlayButton";
import RecordButton from "@/components/shared/RecordButton";
import BackwardButton from "@/components/shared/BackwardButton";
import BackSongButton from "@/components/shared/BackSongButton";
import ForwardButton from "@/components/shared/ForwardButton";
import TimeAxis from "@/components/TimeAxis";

function MainPage() {
  const [PlaybackProgress, setPlaybackProgress] = useState(0);

  useEffect(() => {
    // 這裡可以添加一些邏輯來處理播放進度的更新
    // 這可能包括一個定時器，每秒更新一次播放進度
    const interval = setInterval(() => {
      // 這裡示範每秒增加 1 的播放進度，實際情況應該根據你的播放邏輯進行更改
      setPlaybackProgress((prev) => (prev + 1) % 100);
    }, 1000);

    return () => clearInterval(interval); // 在組件卸載時清理定時器
  }, []);

  return (
    <>
      <div
        id="studio"
        className="flex flex-col justify-between w-screen h-screen "
      >
        <div
          id="studioHead"
          className="w-full h-16  flex justify-around items-center bg-yellow-100 "
        >
          <div className="flex gap-3">
            <BackSongButton />
            <BackwardButton />
            <ForwardButton />
            <PlayButton />
            <RecordButton />
          </div>

          <div className="flex gap-3">
            <ModeToggle />
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </div>
        </div>
        <div id="studioMain" className="w-full h-full flex p-2 box-border">
          <div className="w-72 h-full flex flex-col ">
            <div className="w-full h-20 "></div>
            <div className="w-full h-full">trackInfo</div>
          </div>

          <div className="w-full h-full flex flex-col relative">
            <div
              id="current-position"
              className="absolute top-0 bottom-0 w-0.5 bg-red-500"
              style={{ left: `${PlaybackProgress}`, transform: "translateX(-50%)" }}
            ></div>
            <div className="w-full h-20">
              <div id="timelineController" className="w-full h-2/3 ">
                <TimeAxis />
                <div className="h-1/2">circleMacker</div>
              </div>
              <div id="timeline-parts" className="h-1/3">
                Timeline Parts
              </div>
            </div>
            <div className="w-full h-full bg-slate-300"> Audio</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
