// src/app/notice/NoticePage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, TextField } from '@mui/material';

interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const NoticePage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '익명'
  });

  // 새 글 작성 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNotice: Notice = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...newPost
    };
    setNotices([newNotice, ...notices]);
    setNewPost({ title: '', content: '', author: '익명' });
  };

  // 글 삭제 핸들러
  const handleDelete = (id: string) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Offer</h1>
      <h1 className="text-xl mb-6 text-center">개인 자동화 스크립트 요청</h1>

      {/* 글 작성 폼 */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="mb-4">
          <TextField
            fullWidth
            label="제목"
            variant="outlined"
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            multiline
            rows={4}
            label="내용"
            variant="outlined"
            value={newPost.content}
            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            label="작성자"
            variant="outlined"
            value={newPost.author}
            onChange={(e) => setNewPost({...newPost, author: e.target.value})}
          />
        </div>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          className="w-full"
        >
          글 등록
        </Button>
      </form>

      {/* 게시글 목록 */}
      <div className="space-y-4">
        {notices.map((notice) => (
          <div 
            key={notice.id}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <Link href={`/notice/${notice.id}`} className="text-xl font-semibold">
                {notice.title}
              </Link>
              <Button 
                variant="outlined" 
                color="error"
                size="small"
                onClick={() => handleDelete(notice.id)}
              >
                삭제
              </Button>
            </div>
            <p className="text-gray-600 mb-2">{notice.content}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>작성자: {notice.author}</span>
              <span>
                {new Date(notice.createdAt).toLocaleDateString()} 
                {' '}
                {new Date(notice.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticePage;
