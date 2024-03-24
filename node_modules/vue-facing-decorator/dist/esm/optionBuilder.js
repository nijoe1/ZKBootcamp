export function applyAccessors(optionBuilder, dataFunc) {
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
//# sourceMappingURL=optionBuilder.js.map