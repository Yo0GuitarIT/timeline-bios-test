import PlayButton from "@/components/shared/PlayButton";
import RecordButton from "@/components/shared/RecordButton";
import BackwardButton from "@/components/shared/BackwardButton";
import BackSongButton from "@/components/shared/BackSongButton";
import ForwardButton from "@/components/shared/ForwardButton";

function PlayControls({
  clickBackSong,
  clickBackward,
  clickForward,
  clickPlay,
}) {
  return (
    <div className="flex gap-3">
      <BackSongButton clickBackSong={clickBackSong} />
      <BackwardButton clickBackward={clickBackward} />
      <ForwardButton clickForward={clickForward} />
      <PlayButton clickPlay={clickPlay} />
      <RecordButton />
    </div>
  );
}

export default PlayControls;
