"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAccessors = void 0;
function applyAccessors(optionBuilder, dataFunc) {
    var _a;
    (_a = optionBuilder.beforeCreateCallbacks) !== null && _a !== void 0 ? _a : (optionBuilder.beforeCreateCallbacks = []);
    optionBuilder.beforeCreateCallbacks.push(function () {
        const ctx = this;
        const data = dataFunc(ctx);
        data.forEach((v, n) => {
            Object.defineProperty(ctx, n, v);
        });
    });
}
exports.applyAccessors = applyAccessors;
//# sourceMappingURL=optionBuilder.js.map