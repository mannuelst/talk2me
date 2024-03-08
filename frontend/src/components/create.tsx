'use client'
import { useRef } from "react";
import Button from "./button";
import { Input } from "./input";



export default function Create() {
    const name = useRef<HTMLInputElement>(null)
    return (
        <>
            <Input placeholder="Seu nome" type="text" ref={name} />
            <Button title="Entrar" type="button" />

        </>
    )
}