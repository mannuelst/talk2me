'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import Button from "./button";
import { Input } from "./input";


export default function Join() {
    const name = useRef<HTMLInputElement>(null)
    const id = useRef<HTMLInputElement>(null)
    const route = useRouter()

    const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name.current && name.current.value !== '' && id.current && id.current.value !== '') {
            sessionStorage.setItem('username', name.current.value)
            const roomId = id.current.value

            console.log(roomId)
            // route.push(`room/${roomId}`)
            window.location.href = `/room/${roomId}`
        }
    }

    return (
        <>
            <form onSubmit={(e) => handleJoinRoom(e)} className="space-y-8">
                <Input placeholder="Seu nome" type="text" ref={name} />
                <Input placeholder="ID da reunião" type="text" ref={id} />

                <Button title="Entrar" type="submit" />
            </form>
        </>
    )
}