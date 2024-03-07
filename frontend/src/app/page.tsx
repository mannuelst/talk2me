import Button from "@/components/button";
import Container from "@/components/container";
import Header from "@/components/header";
import { Input } from "@/components/input";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />


      <div className=" w-full h-full mx-auto flex flex-1 items-center justify-center ">
        <Container>
          <div className="max-w-[580px] bg-gray-sec w-full p-4 rounded-lg">



            <div>
              <span>Ingressar</span>
              <span>Nova Reunião</span>
            </div>
            <div className="space-y-4">
              <Input placeholder="Digite o código da reunião " type="text" />
              <Input placeholder="Digite o código da reunião " type="text" />
              <Button type="button" title="Entrar" />
            </div>
          </div>
        </Container>

      </div>


    </main >
  );
}
