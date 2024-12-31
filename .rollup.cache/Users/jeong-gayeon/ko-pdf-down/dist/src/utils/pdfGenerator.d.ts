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
export declare const generatePdf: ({ content, fileName, style }: PdfGeneratorOptions) => Promise<void>;
