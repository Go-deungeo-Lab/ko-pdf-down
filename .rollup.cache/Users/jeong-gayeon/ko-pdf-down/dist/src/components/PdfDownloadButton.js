import { __awaiter, __generator } from "tslib";
import React, { useState } from 'react';
import { generatePdf } from "@/utils/pdfGenerator";
var PdfDownloadButton = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'PDF 다운로드' : _b, _c = _a.fileName, fileName = _c === void 0 ? 'document.pdf' : _c, content = _a.content, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.variant, variant = _e === void 0 ? 'primary' : _e, _f = _a.size, size = _f === void 0 ? 'md' : _f, externalLoading = _a.isLoading, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.className, className = _h === void 0 ? '' : _h, onDownloadStart = _a.onDownloadStart, onDownloadComplete = _a.onDownloadComplete, onError = _a.onError;
    var _j = useState(false), internalLoading = _j[0], setInternalLoading = _j[1];
    var isLoading = externalLoading || internalLoading;
    var baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 shadow-sm';
    var variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 hover:shadow-md',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950',
        gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus-visible:ring-blue-600 hover:shadow-md'
    };
    var sizeStyles = {
        sm: 'h-8 px-3 text-sm gap-1.5',
        md: 'h-10 px-4 text-base gap-2',
        lg: 'h-12 px-6 text-lg gap-2.5'
    };
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isLoading || disabled)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    setInternalLoading(true);
                    onDownloadStart === null || onDownloadStart === void 0 ? void 0 : onDownloadStart();
                    return [4 /*yield*/, generatePdf({
                            content: content,
                            fileName: fileName,
                            style: style
                        })];
                case 2:
                    _a.sent();
                    onDownloadComplete === null || onDownloadComplete === void 0 ? void 0 : onDownloadComplete();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    onError === null || onError === void 0 ? void 0 : onError(error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setInternalLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("button", { onClick: handleClick, disabled: disabled || isLoading, className: "\n                ".concat(baseStyles, "\n                ").concat(variantStyles[variant], "\n                ").concat(sizeStyles[size], "\n                ").concat(disabled ? 'opacity-50 cursor-not-allowed' : '', "\n                ").concat(className, "\n            ") },
        isLoading ? (React.createElement("svg", { className: "animate-spin h-5 w-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
            React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" }))) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "".concat(size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-6 w-6'), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }))),
        text));
};
export default PdfDownloadButton;
//# sourceMappingURL=PdfDownloadButton.js.map