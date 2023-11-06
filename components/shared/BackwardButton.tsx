import Image from "next/image";

export default function BackwardButton() {
    return (
        <div className="border cursor-pointer">
            <Image
                src="/button-backward.svg"
                alt="play button"
                width={30}
                height={30}
                priority={true}
            />
        </div>
    );
}