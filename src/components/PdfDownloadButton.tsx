import React, { useState } from 'react';
import {generatePdf, PdfGeneratorOptions} from "@/utils/pdfGenerator";

interface PdfDownloadButtonProps {
    /** 버튼에 표시될 텍스트 */
    text?: string;
    /** 다운로드될 PDF 파일명 */
    fileName?: string;
    /** PDF에 들어갈 내용 */
    content: string;
    /** PDF 스타일 옵션 */
    style?: PdfGeneratorOptions['style'];
    /** 버튼 스타일 변형 */
    variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
    /** 버튼 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 로딩 상태 */
    isLoading?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 커스텀 클래스 */
    className?: string;
    /** 다운로드 시작 시 콜백 */
    onDownloadStart?: () => void;
    /** 다운로드 완료 후 콜백 */
    onDownloadComplete?: () => void;
    /** 에러 발생 시 콜백 */
    onError?: (error: Error) => void;
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({
                                                                 text = 'PDF 다운로드',
                                                                 fileName = 'document.pdf',
                                                                 content,
                                                                 style = {},
                                                                 variant = 'primary',
                                                                 size = 'md',
                                                                 isLoading: externalLoading,
                                                                 disabled = false,
                                                                 className = '',
                                                                 onDownloadStart,
                                                                 onDownloadComplete,
                                                                 onError
                                                             }) => {
    const [internalLoading, setInternalLoading] = useState(false);
    const isLoading = externalLoading || internalLoading;

    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 shadow-sm';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 hover:shadow-md',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950',
        gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus-visible:ring-blue-600 hover:shadow-md'
    };

    const sizeStyles = {
        sm: 'h-8 px-3 text-sm gap-1.5',
        md: 'h-10 px-4 text-base gap-2',
        lg: 'h-12 px-6 text-lg gap-2.5'
    };

    const handleClick = async () => {
        if (isLoading || disabled) return;

        try {
            setInternalLoading(true);
            onDownloadStart?.();

            await generatePdf({
                content,
                fileName,
                style
            });

            onDownloadComplete?.();
        } catch (error) {
            onError?.(error as Error);
        } finally {
            setInternalLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled || isLoading}
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-6 w-6'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
            )}
            {text}
        </button>
    );
};

export default PdfDownloadButton;