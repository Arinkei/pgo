'use client';

import React, {useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function BasicTable() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const router = useRouter();
  const handleRowClick = (id: string) => {
    router.push(`/notice/${id}`);
  }
  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        const noticesArray = Object.entries(data).map(([id, notice]) => ({
          id,
          ...(notice as Omit<Notice, 'id'>)
        }));
        setNotices(noticesArray);
      })
      .catch(error => console.error('Error loading notices:', error));

  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ maxWidth:1200, minWidth:1000 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{height:30}}>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">게시자</TableCell>
            <TableCell align="center">시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notices.map((notice) => (
            <TableRow className="hover:bg-blue-100 transition duration-300 ease-in-out"
              key={notice.id}
              onClick={() => handleRowClick(notice.id)}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {notice.id}
              </TableCell>
              <TableCell align="center">{notice.title}</TableCell>
              <TableCell align="center">{notice.author}</TableCell>
              <TableCell align="center">{notice.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
