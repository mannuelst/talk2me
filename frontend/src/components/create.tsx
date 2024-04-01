'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import Button from "./button";
import { Input } from "./input";



export default function Create() {
    const name = useRef<HTMLInputElement>(null)
    const route = useRouter()

    const handleCreateRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name.current && name.current.value !== '') {
            sessionStorage.setItem('username', name.current.value)
            const roomId = generateRandomString()

            console.log(roomId)
            route.push(`room/${roomId}`)
        }
    }
    function generateRandomString() {
        const randomString = Math.random().toString(36).substring(2, 7)
        return randomString
    }
    return (
        <>
            <form onSubmit={(e) => handleCreateRoom(e)} className="space-y-8">

                <Input placeholder="Seu nome" type="text" ref={name} />
                <Button title="Entrar" type="submit" />

            </form>
        </>
    )
}