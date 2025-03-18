"use client"; // Next.js 13+에서는 이벤트 핸들링을 위해 클라이언트 컴포넌트로 설정
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="fixed w-full z-50 bg-gray-50 p-4 h-30">
            <div className="container mx-auto bg-gray-50 flex justify-center items-center">
                copyright ®PGO All rights reserved
            </div>
        </footer>
    );
}
