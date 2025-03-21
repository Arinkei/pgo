"use client"; // Next.js 13+에서는 이벤트 핸들링을 위해 클라이언트 컴포넌트로 설정
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex bg-gray-200 h-20 justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex">
                    <Link
                        href="github.com/arinkei">
                            <Image 
                                src="/logo.png"
                                alt="github link"
                                width={30}
                                height={30}
                                />
                    </Link>
                </div>
                <div className="">
                ⓒ 2025. PGO All rights reserved
                </div>
            </div>
            <div className="fixed bottom-2 right-4 w-64">
                <p className="border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-2xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                마지막 업데이트&nbsp;
                <code className="font-mono font-bold">{new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate
                ()).padStart(2,'0')}</code>
                </p>
            </div>
        </footer>
    );
}
