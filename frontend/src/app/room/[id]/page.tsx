'use client'

import Chat from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useContext, useEffect } from "react";
import { SocketContext } from "../../../contexts/SocketContext";

export default function Room({ params }: { params: { id: string } }) {
    const { socket } = useContext(SocketContext)
    useEffect(() => {
        socket?.on('connection', () => {
            console.log('conectado');
            socket.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id
            });
        });
    }, [socket]);

    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[70%] ">
                <div className="md:w-[85%] w-full m-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-950 w-full rounded-md h-full relative">
                            <video src="" className="w-full h-full ">
                            </video>
                            <span className="absolute bottom-3" >VIDEO_user_name</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full relative">
                            <video src="" className="w-full h-full ">
                            </video>
                            <span className="absolute bottom-3" >VIDEO_user_name</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full relative">
                            <video src="" className="w-full h-full ">
                            </video>
                            <span className="absolute bottom-3" >VIDEO_user_name</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full relative">
                            <video src="" className="w-full h-full ">
                            </video>
                            <span className="absolute bottom-3" >VIDEO_user_name</span>
                        </div>
                    </div>


                </div>
                <Chat roomId={params.id} />
            </div>

            <Footer />
        </div>
    )
}