import { __assign, __awaiter, __generator } from "tslib";
var config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    core: {
        builder: "@storybook/builder-vite",
    },
    viteFinal: function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            return [2 /*return*/, __assign(__assign({}, config), { resolve: __assign(__assign({}, config.resolve), { alias: __assign(__assign({}, (_a = config.resolve) === null || _a === void 0 ? void 0 : _a.alias), { '@': '/src' }) }) })];
        });
    }); }
};
export default config;
//# sourceMappingURL=main.js.map