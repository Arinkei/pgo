// app/notice/[id]/page.tsx
'use client'; // 클라이언트 컴포넌트로 선언

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Typography, Divider } from '@mui/material';

interface NoticeData {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

export default function NoticePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [notice, setNotice] = useState<NoticeData | null>(null);

  // 데이터 패칭
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/notice/${params.id}`);
        if (!response.ok) throw new Error('데이터 로딩 실패');
        const data = await response.json();
        setNotice(data);
      } catch (error) {
        console.error('Error:', error);
        router.push('/error'); // 에러 발생 시 처리
      }
    };

    fetchData();
  }, [params.id, router]);

  if (!notice) return <div>로딩 중...</div>;

  return (
    <div className="flex flex-col flex-grow items-center">
      <h1 className="z-10 items-center justify-center font-sans text-5xl pt-5 pb-5">
        공지사항
      </h1>
      
      <Card sx={{ maxWidth: 800, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {notice.title}
          </Typography>
          
          <Typography color="text.secondary" gutterBottom>
            작성자: {notice.author} | 작성일: {new Date(notice.createdAt).toLocaleDateString()}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
            {notice.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
