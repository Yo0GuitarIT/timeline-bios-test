import Image from "next/image";

export default function PauseButton() {
    return (
        <>
            <Image
                src="/button-pause.svg"
                alt="play button"
                width={50}
                height={50}
                priority={true}
            />
        </>
    );
}