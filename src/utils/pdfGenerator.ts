import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface PdfGeneratorOptions {
    content: string;
    fileName: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        margin?: number;
        fontFamily?: string;
        textColor?: string;
        backgroundColor?: string;
        pageSize?: 'a4' | 'a3' | 'letter' | 'legal';
        orientation?: 'portrait' | 'landscape';
        columns?: 1 | 2;
        headerText?: string;
        footerText?: string;
        watermark?: string;
    };
}

export const generatePdf = async ({
                                      content,
                                      fileName,
                                      style = {}
                                  }: PdfGeneratorOptions): Promise<void> => {
    const {
        fontSize = 12,
        lineHeight = 1.5,
        margin = 20,
        fontFamily = 'Arial, sans-serif',
        textColor = '#000000',
        backgroundColor = '#ffffff',
        pageSize = 'a4',
        orientation = 'portrait',
        columns = 1,
        headerText,
        footerText,
        watermark
    } = style;

    try {
        // 임시 div 엘리먼트 생성
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = '-9999px';
        element.style.fontSize = `${fontSize}px`;
        element.style.lineHeight = String(lineHeight);
        element.style.padding = `${margin}px`;
        element.style.fontFamily = fontFamily;
        element.style.color = textColor;
        element.style.backgroundColor = backgroundColor;
        element.style.width = orientation === 'portrait' ? '595px' : '842px';

        // 헤더 추가
        if (headerText) {
            element.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px; font-size: ${fontSize * 1.2}px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                    ${headerText}
                </div>
            `;
        }

        // 워터마크 추가
        if (watermark) {
            element.style.position = 'relative';
            element.innerHTML += `
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); 
                    font-size: 60px; opacity: 0.1; pointer-events: none; z-index: 1000;">
                    ${watermark}
                </div>
            `;
        }

        // 컬럼 레이아웃 처리
        if (columns === 2) {
            const contentWrapper = document.createElement('div');
            contentWrapper.style.columnCount = '2';
            contentWrapper.style.columnGap = '20px';
            contentWrapper.innerHTML = content.replace(/\n/g, '<br>');
            element.appendChild(contentWrapper);
        } else {
            element.innerHTML += content.replace(/\n/g, '<br>');
        }

        // 푸터 추가
        if (footerText) {
            element.innerHTML += `
                <div style="text-align: center; margin-top: 20px; font-size: ${fontSize * 0.8}px; border-top: 1px solid #ccc; padding-top: 10px;">
                    ${footerText}
                </div>
            `;
        }

        document.body.appendChild(element);

        // html2canvas 설정
        const canvas = await html2canvas(element, {
            scale: 2,
            logging: false,
            useCORS: true,
            backgroundColor: backgroundColor
        });

        document.body.removeChild(element);

        // PDF 생성
        const pdf = new jsPDF({
            orientation: orientation,
            unit: 'pt',
            format: pageSize
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(fileName);

        return Promise.resolve();
    } catch (error) {
        console.error('PDF generation failed:', error);
        throw error;
    }
};