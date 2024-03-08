'use client'
import { useState } from "react";
import Create from "./create";
import Join from "./join";

export default function FromWrapper() {
    const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join')
    const handleSelectedRoom = (room: 'join' | 'create') => {
        setSelectedRoom(room)
    }
    return (
        <div className="w-full">
            <div className="flex items-center text-center">
                <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'join' && 'bg-sec p-4 rounded-t-lg text-pri'}`} onClick={() => handleSelectedRoom('join')}>
                    Ingressar
                </span>
                <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'create' && 'bg-sec p-4 rounded-t-lg text-pri'}`} onClick={() => handleSelectedRoom('create')} >
                    Nova Reunião
                </span>
            </div>
            <div className=" bg-sec rounded-b-lg space-y-8 p-10">
                <RoomSelector selectedRoom={selectedRoom} />
            </div>
        </div>

    )
}

const RoomSelector = ({ selectedRoom }: { selectedRoom: 'join' | 'create' }) => {
    switch (selectedRoom) {
        case "join":
            return <Join />
        case "create":
            return <Create />
        default:
            return <Join />

    }
}          