import Image from "next/image"
import Container from "./container"

export default function Header() {
    return (

        <div className=" bg-gray-1000 p-4">
            <Container>
                <div className="flex justify-start">
                    <Image alt='Talk2me logo' src='/logo.svg' width={100} height={100} />
                </div>
            </Container>
        </div>

    )
}