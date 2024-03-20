import { SocketContext } from '@/contexts/SocketContext';
import { Send } from "lucide-react";
import { FormEvent, useContext, useEffect, useRef } from 'react';

export default function Chat({ roomId }: { roomId: string }) {
    const currentMsg = useRef<HTMLInputElement>(null)
    const { socket } = useContext(SocketContext)
    useEffect(() => {

    }, [socket])

    function sendMsg(e: FormEvent) {
        e.preventDefault()
        if (currentMsg.current?.value !== '') {
            const sendMsgToServer = {
                message: currentMsg.current?.value,
                username: 'Unkn User'
            }
        }

    }
    return (
        <div className=" bg-gray-900 px-4 pt-4 md:w-[15%] hidden md:flex rounded-md m-3 h-full">
            <div className="relative h-full w-full">
                <div className="bg-gray-950 rounded p-2">
                    <div className="flex items-center text-pri space-x-2">
                        <span>user_name</span>
                        <span>user_name</span>
                    </div>

                    <div className="mt-5 text-sm">
                        <span>text</span>
                    </div>

                </div>
                <form className="absolute bottom-2 w-full" onSubmit={(e) => sendMsg(e)}>
                    <div className="flex relative">
                        <input type="text" name="" id=""
                            className="px-3 py-2 bg-gray-950 rounded-md w-full"
                            ref={currentMsg}
                        />

                        <Send width={25} height={25} className="absolute right-2 top-2.5 cursor-pointer " />
                    </div>

                </form>
            </div>
        </div>
    )
}