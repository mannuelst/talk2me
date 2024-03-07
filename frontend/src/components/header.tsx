import Image from "next/image"

export default function Header() {
    return (
        <>
            <div className="flex justify-start bg-gray-950 p-4 w-full">
                <Image alt='Talk2me logo' src='/logo.svg' width={100} height={100} />
            </div>
        </>
    )
}