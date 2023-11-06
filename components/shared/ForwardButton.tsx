import Image from "next/image";

export default function ForwardButton() {
    return (
        <div className="border cursor-pointer">
            <Image
                src="/button-forward.svg"
                alt="play button"
                width={30}
                height={30}
            />
        </div>
    );
}