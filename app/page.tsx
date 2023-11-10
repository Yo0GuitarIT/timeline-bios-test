import Link from "next/link";
import { ModeToggle } from "@/components/Mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36 gap-10">
      <h1 className="text-7xl">timelineβίος</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>
          一個音樂創作的虛擬世界，充滿了無限的音樂冒險和神秘元素。這個專案將啟發您的音樂創作靈感，
          並提供一個充滿挑戰和美麗音樂的旅程。
        </p>
        <p>
          在timelineβίος中，每個音符都是一段故事，每首曲調都是一場冒險。您可以探索各種音樂風格，
          從柔和的旋律到壯麗的交響樂，從悲傷的旋律到充滿希望的和聲。每首歌都是一個新的冒險，每個音符都是一個故事的一部分。
        </p>
        <p>
          目標是激發您的創作靈感，讓您自由地表達自己，將音樂帶入這個奇幻的世界。
          無論您是新手還是經驗豐富的音樂家，這裡都歡迎您，等待您一同創作，用音樂傳達故事。
        </p>
        <p>
          讓音樂成為您的冒險之旅。探索聲音的奇幻世界，並將您的音樂故事分享給全世界。
        </p>
        <Link href="/main">
          <Button> Start</Button>
        </Link>
        <ModeToggle />
      </div>
    </main>
  );
}
