import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@mui/material/Button';

interface Notice{
    id: string;
    title: string;
    author: string;
    createdAt: string;
}

const Table = styled.table`
    width: 100px;
    border-collapse: collapse;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    padding: 10px;
    text-align: left;
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 2px solid #e0e0e0;
`;

const NoticePage: React.FC = () => {
    const [notices, setNotices] = useState<Notice[]>([]);

    useEffect(() => {
    const fetchNotices = async () => {
        try {
            const response = await axios.get<Notice[]>('/api/notices');
            setNotices(response.data);
        } catch (error) {
        console.error('게시글을 불러오는 데 실패했습니다:', error);
        }
    };

    fetchNotices();
    }, []);

    return (
        <div>
        <Table>
            <thead>
            <tr>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>작성자</Th>
                <Th>작성일</Th>
            </tr>
        </thead>
        <tbody>
            {notices.map((notice) => (
            <tr key={notice.id}>
                <Td>{notice.id}</Td>
                <Td>
                    <Link href={`/notice/${notice.id}`}>
                        {notice.title}
                    </Link>
                </Td>
                <Td>{notice.author}</Td>
                <Td>{new Date(notice.createdAt).toLocaleDateString()}</Td>
            </tr>
            ))}
        </tbody>
        </Table>
        <Link href="/notice">
            <Button variant="contained">글 작성</Button>
        </Link>
    </div>
    );
};

export default NoticePage;