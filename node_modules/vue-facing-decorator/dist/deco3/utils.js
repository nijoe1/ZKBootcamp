"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compatibleMemberDecorator = exports.compatibleClassDecorator = exports.Compatible = void 0;
const utils_1 = require("../utils");
exports.Compatible = {};
function compatibleClassDecorator(deco) {
    return function (arg, ctx) {
        var _a;
        if (ctx) { //stage 3
            if (ctx.kind !== 'class') {
                throw 'deco stage 3 class';
            }
            const proto = (_a = exports.Compatible.fakePrototype) !== null && _a !== void 0 ? _a : (exports.Compatible.fakePrototype = {});
            const slot = (0, utils_1.obtainSlot)(proto);
            delete exports.Compatible.fakePrototype;
            (0, utils_1.obtainSlot)(arg.prototype, slot);
            const ret = deco(arg);
            return ret;
        }
        else {
            return deco(arg);
        }
    };
}
exports.compatibleClassDecorator = compatibleClassDecorator;
function compatibleMemberDecorator(deco) {
    return function (arg, ctx) {
        var _a;
        if (typeof ctx === 'object') { //stage 3
            const proto = (_a = exports.Compatible.fakePrototype) !== null && _a !== void 0 ? _a : (exports.Compatible.fakePrototype = {});
            proto[ctx.name] = arg;
            return deco(proto, ctx.name);
        }
        else {
            return deco(arg, ctx);
        }
    };
}
exports.compatibleMemberDecorator = compatibleMemberDecorator;
//# sourceMappingURL=utils.js.map