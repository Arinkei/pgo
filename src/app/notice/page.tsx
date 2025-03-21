import Link from 'next/link';
import Image from "next/image";
import NoticeTable from '@/app/notice/NoticeTable';


export default function Notice() {
  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="z-10 items-center justify-center font-sans text-5xl pt-5 pb-5">
        Notice
      </h1>

      <table className="">
        <NoticeTable />
      </table>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

      </div>
    </div>
  );
}