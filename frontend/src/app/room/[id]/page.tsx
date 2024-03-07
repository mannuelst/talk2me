import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Room({ params }: { params: { id: string } }) {
    return (
        <>
            <Header />
            <p>
                Hey, Its ROOM
            </p>
            <Footer />
        </>
    )
}