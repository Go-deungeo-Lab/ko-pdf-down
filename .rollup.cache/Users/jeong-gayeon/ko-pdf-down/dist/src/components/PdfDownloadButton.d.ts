import React from 'react';
import { PdfGeneratorOptions } from "@/utils/pdfGenerator";
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
declare const PdfDownloadButton: React.FC<PdfDownloadButtonProps>;
export default PdfDownloadButton;
