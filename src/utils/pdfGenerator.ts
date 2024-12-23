import type { Meta, StoryObj } from '@storybook/react';
import PdfDownloadButton from "../components/PdfDownloadButton";

const meta = {
    title: 'Components/PdfDownloadButton',
    component: PdfDownloadButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PdfDownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'PDF 다운로드',
        fileName: 'example.pdf',
        content: '안녕하세요! 이것은 한글 PDF 테스트입니다.',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        text: 'PDF 저장',
        fileName: 'test.pdf',
        content: '한글 텍스트가 포함된 PDF 문서입니다.',
        variant: 'secondary',
    },
};