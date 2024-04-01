import { SocketContext } from '@/contexts/SocketContext';
import { Send } from "lucide-react";
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';

interface ChatMsg {
    message: string,
    username: string,
    roomId: string,
    time: string
}

export default function Chat({ roomId }: { roomId: string }) {
    const currentMsg = useRef<HTMLInputElement>(null)
    const { socket } = useContext(SocketContext)
    const [chat, setChat] = useState<ChatMsg[]>([])

    useEffect(() => {
        socket?.on('chat', (data) => {
            console.log('message: ' + data)
            setChat((prevState) => [...prevState, data])
        })


    }, [socket])

    function sendMsg(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("Heyyy!", currentMsg)
        if (currentMsg.current?.value !== '') {
            const sendMsgToServer = {
                message: currentMsg.current?.value,
                username: 'Unkn User',
                roomId,
                time: new Date().toLocaleTimeString()
            }
            socket?.emit('chat', sendMsgToServer)
            currentMsg.current.value = ''
        }

    }
    return (
        <div className=" bg-gray-900 px-4 pt-4 md:w-[15%] hidden md:flex rounded-md m-3 h-full">
            <div className="relative h-full w-full">
                {
                    chat.map((chat, index) => {
                        return (
                            <div className="bg-gray-950 rounded p-2 mb-4" key={index}>
                                <div className="flex items-center text-pri space-x-2">
                                    <span>{chat.username}</span>
                                    <span>{chat.time}</span>
                                </div>

                                <div className="mt-5 text-sm">
                                    <span>{chat.message}</span>
                                </div>

                            </div>
                        )
                    })
                }
                <form className="absolute bottom-2 w-full" onSubmit={(e) => sendMsg(e)}>
                    <div className="flex relative">
                        <input type="text" name="" id=""
                            className="px-3 py-2 bg-gray-950 rounded-md w-full"
                            ref={currentMsg}
                        />
                        <button type='submit'>
                            <Send width={25} height={25} className="absolute right-2 top-2.5 cursor-pointer " />

                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}