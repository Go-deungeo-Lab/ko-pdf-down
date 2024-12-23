import React from 'react';
import { jsPDF } from 'jspdf';

interface PdfDownloadButtonProps {
    text?: string;
    fileName?: string;
    content: string;
    variant?: 'primary' | 'secondary';
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({
                                                                 text = '다운로드',
                                                                 fileName = 'document.pdf',
                                                                 content,
                                                                 variant = 'primary'
                                                             }) => {
    const handleDownload = () => {
        const doc = new jsPDF();

        // 한글 폰트 지원 설정
        doc.setFont('Korean', 'Normal');

        // PDF 내용 추가
        doc.text(content, 10, 10);

        // PDF 다운로드
        doc.save(fileName);
    };

    return (
        <button
            onClick={handleDownload}
            className={`px-4 py-2 rounded-md ${
                variant === 'primary'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
        >
            {text}
        </button>
    );
};

export default PdfDownloadButton;