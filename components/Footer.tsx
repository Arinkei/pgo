"use client"; // Next.js 13+에서는 이벤트 핸들링을 위해 클라이언트 컴포넌트로 설정
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 p-4 h-16">
            <div className="container mx-auto flex justify-center items-center">
                copyright PGO 
            </div>
        </footer>
    );
}
