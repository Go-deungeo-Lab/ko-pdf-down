import type { Meta, StoryObj } from '@storybook/react';
import PdfDownloadButton from '../src/components/PdfDownloadButton';

const meta = {
    title: 'Components/PdfDownloadButton',
    component: PdfDownloadButton,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1a1a1a' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'gradient'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        style: {
            control: 'object'
        },
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        onDownloadComplete: { action: 'downloaded' },
        onDownloadStart: { action: 'download started' },
        onError: { action: 'error occurred' }
    },
} satisfies Meta<typeof PdfDownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'PDF 다운로드',
        fileName: 'example.pdf',
        content: '안녕하세요! 이것은 한글 PDF 테스트입니다.',
        variant: 'primary',
        size: 'md',
        style: {
            fontSize: 12,
            lineHeight: 1.5,
            margin: 20
        }
    },
};

export const StyleOptions: Story = {
    args: {
        text: 'PDF 생성',
        fileName: 'styled-document.pdf',
        content: '스타일이 적용된 PDF 문서입니다.',
        variant: 'primary',
        size: 'md',
        style: {
            fontSize: 14,
            lineHeight: 1.8,
            margin: 30,
            textColor: '#333333',
            backgroundColor: '#f5f5f5',
            headerText: '문서 제목',
            footerText: '페이지 1',
            watermark: 'CONFIDENTIAL',
            columns: 2
        }
    }
};

export const BusinessTemplate: Story = {
    args: {
        text: '업무용 문서',
        fileName: 'business-doc.pdf',
        content: `
            회사 로고
            
            업무 보고서
            
            작성일: 2024년 12월 23일
            
            1. 주요 내용
            2. 세부 사항
            3. 결론
        `,
        variant: 'gradient',
        style: {
            fontSize: 12,
            headerText: '업무 보고서',
            footerText: '© 2024 Company Name',
            orientation: 'portrait',
            pageSize: 'a4'
        }
    }
};