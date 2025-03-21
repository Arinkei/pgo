"use client"; // Next.js 13+에서는 이벤트 핸들링을 위해 클라이언트 컴포넌트로 설정
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-center items-center bg-white">
            <div className="container mx-auto flex justify-center items-center">
                {/* 로고 */}
                <Link href="/">
                    <Image 
                        // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/logo.png"
                        alt="pgo logo"
                        width={110}
                        height={110}
                        priority
                        />
                </Link>

        {/* 네비게이션 메뉴 */}
        {/* <nav className="hidden md:flex space-x-6">
    <Link href="/about" className="hover:underline">
        소개
    </Link>
    <Link href="/contact" className="hover:underline">
        문의
    </Link>
        </nav> */}
        {/* 모바일 메뉴 버튼 */}
        {/* <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            ☰
        </button> */}
            </div>
        </header>
    );
}
