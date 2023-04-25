'use client'
import './globals.css';
import Link from "next/link"

export default function Title({ title }: any) {

    return (
        <div id="header">
            <Link href={"/"}>
                <h1 id="title">{title}</h1>
            </Link>
        </div>
    )
}