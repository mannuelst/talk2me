
import FromWrapper from "@/components/formwrapper";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <div className="max-w-[580px] w-full h-full mx-auto flex flex-1 items-center justify-center ">
        <FromWrapper />
      </div>


    </main >
  );
}
