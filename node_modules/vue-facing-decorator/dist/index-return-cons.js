"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
__exportStar(require("./index"), exports);
const index_1 = require("./index");
function Component(...args) {
    const res = index_1.Component.apply(this, args);
    function process(res) {
        const cons = res.__vfdConstructor;
        cons.__vccOpts = res;
        return cons;
    }
    if (typeof res === 'function') {
        return function () {
            return process(res.apply(this, arguments));
        };
    }
    else {
        return process(res);
    }
}
exports.Component = Component;
//# sourceMappingURL=index-return-cons.js.map