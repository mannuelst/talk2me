'use client'

import { Camera, CameraOff, Mic, MicOff, Phone, ScreenShareIcon, ScreenShareOff } from "lucide-react";
import { useState } from "react";
import Container from "./container";

export default function Footer() {
    const [isMuted, setIsMuted] = useState(false)
    const [isCameraOff, setIsCameraOff] = useState(false)
    const [isScreenSharing, setIsScreenSharing] = useState(false)
    const date = new Date()
    const hr = date.getHours().toString().padStart(2, '0') + ':'
    const min = date.getMinutes().toString().padStart(2, '0')
    return (
        <div className="fixed bottom-0 bg-black py-6 w-full">
            <Container>


                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        <span className="text-xl">{hr + min}</span>
                    </div>
                    <div className="flex space-x-6 justify-center">
                        {
                            isMuted ? (
                                <MicOff className="h-10 w-10 text-white p-2 cursor-pointer bg-red-500  rounded-md" onClick={() => setIsMuted(!isMuted)} />
                            ) : (
                                <Mic className="h-10 w-10 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={() => setIsMuted(!isMuted)} />
                            )
                        }
                        {
                            isCameraOff ? (
                                <CameraOff className="h-10 w-10 text-white p-2 cursor-pointer bg-red-500 rounded-md" onClick={() => setIsCameraOff(!isCameraOff)} />
                            ) : (
                                <Camera className="h-10 w-10 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={() => setIsCameraOff(!isCameraOff)} />
                            )
                        }

                        {
                            isScreenSharing ? (
                                <ScreenShareOff className="h-10 w-10 text-white p-2 cursor-pointer bg-red-500 rounded-md" onClick={() => setIsScreenSharing(!isScreenSharing)} />
                            ) : (<ScreenShareIcon className="h-10 w-10 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={() => setIsScreenSharing(!isScreenSharing)} />)

                        }


                        <Phone className="h-10 w-10 text-white hover:bg-red-500 p-2 cursor-pointer bg-pri rounded-md" />
                    </div>
                </div>
            </Container>
        </div>
    )
}