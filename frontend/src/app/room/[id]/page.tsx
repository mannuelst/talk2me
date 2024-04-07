'use client'

import Chat from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useContext, useEffect, useRef } from "react";
import { SocketContext } from "../../../contexts/SocketContext";

export default function Room({ params }: { params: { id: string } }) {
    const { socket } = useContext(SocketContext)
    const localStream = useRef<HTMLVideoElement>(null)
    const peerConnection = useRef<Record<string, RTCPeerConnection>>({})
    useEffect(() => {
        socket?.on('connect', async () => {
            console.log('conectado');
            socket?.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id
            });
            await initCamera()
        });
        console.log('kkey!')
        socket?.on('new user', (data) => {
            console.log('Novo usuário conectado:', data)
            createPeerConnection(data.socketId)
            // console.log('peeer!')
            socket.emit('newUserStart', {
                to: data.id,
                sender: socket.id
            })
        })
    }, [socket]);

    // PeerConnection!!
    const createPeerConnection = (socketId: string) => {
        const config = {
            iceServer: [
                {
                    urls: 'stun:stun.l.google.com:9302'
                }
            ]
        }
        const peer = new RTCPeerConnection(config)
        peerConnection.current[socketId] = peer
    }

    const initCamera = async () => {
        const video = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
                noiseSuppression: true,
                echoCancellation: true

            }
        })
        if (localStream.current) {
            localStream.current.srcObject = video
        }

    }

    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[70%] ">
                <div className="md:w-[85%] w-full m-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-950 w-full rounded-md h-full p-2 relative  ">
                            <video src="" className="w-full h-full -scale-x-100 " autoPlay ref={localStream}>
                            </video>
                            <span className="absolute bottom-3  mx-1" >VIDEO_user_name</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full relative">
                            <video src="" className="w-full h-full " autoPlay playsInline>
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