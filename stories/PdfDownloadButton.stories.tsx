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
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        onDownloadComplete: { action: 'downloaded' }
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
    },
};

export const Secondary: Story = {
    args: {
        text: 'PDF 저장',
        fileName: 'test.pdf',
        content: '한글 텍스트가 포함된 PDF 문서입니다.',
        variant: 'secondary',
        size: 'md',
    },
};

export const Outline: Story = {
    args: {
        text: 'PDF 내보내기',
        fileName: 'export.pdf',
        content: '아웃라인 스타일의 버튼입니다.',
        variant: 'outline',
        size: 'md',
    },
};

export const Gradient: Story = {
    args: {
        text: 'PDF 다운로드',
        fileName: 'gradient.pdf',
        content: '그라데이션 스타일의 버튼입니다.',
        variant: 'gradient',
        size: 'md',
    },
};

export const WithIcon: Story = {
    args: {
        ...Primary.args,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <PdfDownloadButton
                text="Small"
                size="sm"
                content="Small button"
            />
            <PdfDownloadButton
                text="Medium"
                size="md"
                content="Medium button"
            />
            <PdfDownloadButton
                text="Large"
                size="lg"
                content="Large button"
            />
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <PdfDownloadButton
                    text="Primary"
                    variant="primary"
                    content="Primary variant"
                />
                <PdfDownloadButton
                    text="Secondary"
                    variant="secondary"
                    content="Secondary variant"
                />
            </div>
            <div className="flex items-center gap-4">
                <PdfDownloadButton
                    text="Outline"
                    variant="outline"
                    content="Outline variant"
                />
                <PdfDownloadButton
                    text="Gradient"
                    variant="gradient"
                    content="Gradient variant"
                />
            </div>
        </div>
    ),
};

export const Loading: Story = {
    args: {
        ...Primary.args,
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        ...Primary.args,
        disabled: true,
    },
};