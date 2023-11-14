"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/Mode-toggle";
import { Button } from "@/components/ui/button";
import TimeAxis from "@/components/TimeAxis";
import PlayControls from "@/components/PlayControls";

function MainPage() {
  const [isPlaying, setPlaying] = useState(false);
  const [PlaybackProgress, setPlaybackProgress] = useState(0);
  const playTime: number = Number(((PlaybackProgress / 100) * 16).toFixed(2));

  const handlePlay = (isPlaying: boolean) => {
    setPlaying(isPlaying);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      const percentageIncreasePerSecond = 1 / 16;
      interval = setInterval(() => {
        setPlaybackProgress(
          (prev) => (prev + percentageIncreasePerSecond) % 100
        );
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleBackSong = () => {
    setPlaybackProgress(0);
  };

  const handleBackward = () => {
    const currentIntegerTime = Math.floor(playTime);
    if (currentIntegerTime === 0) {
      setPlaybackProgress(0);
    } else setPlaybackProgress((currentIntegerTime - 1) * (1 / 16) * 100);
  };

  const handleForward = () => {
    const currentIntegerTime = Math.floor(playTime);
    if (currentIntegerTime === 16) {
      setPlaybackProgress((currentIntegerTime / 16) * 100);
    } else setPlaybackProgress((currentIntegerTime + 1) * (1 / 16) * 100);
  };


  const [trackCount, setTrackCount] = useState(1); 
  const [tracks, setTracks] = useState([
    { id: 1, name: "Track 1", audio: "Have fun!" },
    { id: 2, name: "Track 2", audio: "OK" },
  ]);

  const addTrack = () => {
    console.log("addTrack");
    const newTrack = {
      id: trackCount + 1,
      name: `Track ${trackCount + 1}`,
      audio: "Add sound~",
    };
    setTrackCount(trackCount + 1);
    setTracks([...tracks, newTrack]);
  };

  return (
    <>
      <div
        id="studio"
        className="flex flex-col justify-between w-screen h-screen "
      >
        <div
          id="studioHead"
          className="w-full h-16  flex justify-around items-center bg-background"
        >
          <div className="w-28 h-12 flex p-1 items-center ">
            <h1 className="text-lg text-primary-foreground">
              Time: {playTime}
            </h1>
          </div>

          <PlayControls
            clickPlay={handlePlay}
            clickBackSong={handleBackSong}
            clickBackward={handleBackward}
            clickForward={handleForward}
          />

          <div className="flex gap-3">
            <ModeToggle />
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </div>
        </div>

        <div id="studioMain" className="w-full h-full flex p-2 box-border">
          <div className="w-72 h-full flex flex-col ">
            <div className="w-full h-20 flex justify-center items-center">
              <Button variant={"destructive"} size={"sm"} onClick={addTrack}>
                Add New Track
              </Button>
            </div>
            <div className="w-full h-full">
              {tracks.map((track) => (
                <div key={track.id} className="w-full h-24 border">
                  {track.name}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-full flex flex-col relative">
            <div
              id="current-position"
              className="absolute top-0 bottom-0 w-0.5 bg-red-500"
              style={{
                left: `${PlaybackProgress}%`,
                transform: "translateX(-50%)",
              }}
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
            <div className="w-full h-full ">
              {tracks.map((track) => (
                <div key={track.id} className="w-full h-24 border-solid border">
                  {track.audio}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
