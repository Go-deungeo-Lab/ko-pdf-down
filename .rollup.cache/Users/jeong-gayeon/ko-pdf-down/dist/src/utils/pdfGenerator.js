import { __awaiter, __generator } from "tslib";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
export var generatePdf = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var _c, fontSize, _d, lineHeight, _e, margin, _f, fontFamily, _g, textColor, _h, backgroundColor, _j, pageSize, _k, orientation, _l, columns, headerText, footerText, watermark, element, contentWrapper, canvas, pdf, pdfWidth, pdfHeight, error_1;
    var content = _b.content, fileName = _b.fileName, _m = _b.style, style = _m === void 0 ? {} : _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _c = style.fontSize, fontSize = _c === void 0 ? 12 : _c, _d = style.lineHeight, lineHeight = _d === void 0 ? 1.5 : _d, _e = style.margin, margin = _e === void 0 ? 20 : _e, _f = style.fontFamily, fontFamily = _f === void 0 ? 'Arial, sans-serif' : _f, _g = style.textColor, textColor = _g === void 0 ? '#000000' : _g, _h = style.backgroundColor, backgroundColor = _h === void 0 ? '#ffffff' : _h, _j = style.pageSize, pageSize = _j === void 0 ? 'a4' : _j, _k = style.orientation, orientation = _k === void 0 ? 'portrait' : _k, _l = style.columns, columns = _l === void 0 ? 1 : _l, headerText = style.headerText, footerText = style.footerText, watermark = style.watermark;
                _o.label = 1;
            case 1:
                _o.trys.push([1, 3, , 4]);
                element = document.createElement('div');
                element.style.position = 'absolute';
                element.style.left = '-9999px';
                element.style.fontSize = "".concat(fontSize, "px");
                element.style.lineHeight = String(lineHeight);
                element.style.padding = "".concat(margin, "px");
                element.style.fontFamily = fontFamily;
                element.style.color = textColor;
                element.style.backgroundColor = backgroundColor;
                element.style.width = orientation === 'portrait' ? '595px' : '842px';
                // 헤더 추가
                if (headerText) {
                    element.innerHTML = "\n                <div style=\"text-align: center; margin-bottom: 20px; font-size: ".concat(fontSize * 1.2, "px; border-bottom: 1px solid #ccc; padding-bottom: 10px;\">\n                    ").concat(headerText, "\n                </div>\n            ");
                }
                // 워터마크 추가
                if (watermark) {
                    element.style.position = 'relative';
                    element.innerHTML += "\n                <div style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); \n                    font-size: 60px; opacity: 0.1; pointer-events: none; z-index: 1000;\">\n                    ".concat(watermark, "\n                </div>\n            ");
                }
                // 컬럼 레이아웃 처리
                if (columns === 2) {
                    contentWrapper = document.createElement('div');
                    contentWrapper.style.columnCount = '2';
                    contentWrapper.style.columnGap = '20px';
                    contentWrapper.innerHTML = content.replace(/\n/g, '<br>');
                    element.appendChild(contentWrapper);
                }
                else {
                    element.innerHTML += content.replace(/\n/g, '<br>');
                }
                // 푸터 추가
                if (footerText) {
                    element.innerHTML += "\n                <div style=\"text-align: center; margin-top: 20px; font-size: ".concat(fontSize * 0.8, "px; border-top: 1px solid #ccc; padding-top: 10px;\">\n                    ").concat(footerText, "\n                </div>\n            ");
                }
                document.body.appendChild(element);
                return [4 /*yield*/, html2canvas(element, {
                        scale: 2,
                        logging: false,
                        useCORS: true,
                        backgroundColor: backgroundColor
                    })];
            case 2:
                canvas = _o.sent();
                document.body.removeChild(element);
                pdf = new jsPDF({
                    orientation: orientation,
                    unit: 'pt',
                    format: pageSize
                });
                pdfWidth = pdf.internal.pageSize.getWidth();
                pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(fileName);
                return [2 /*return*/, Promise.resolve()];
            case 3:
                error_1 = _o.sent();
                console.error('PDF generation failed:', error_1);
                throw error_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=pdfGenerator.js.map