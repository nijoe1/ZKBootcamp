import { obtainSlot } from '../utils';
export const Compatible = {};
export function compatibleClassDecorator(deco) {
    return function (arg, ctx) {
        var _a;
        if (ctx) { //stage 3
            if (ctx.kind !== 'class') {
                throw 'deco stage 3 class';
            }
            const proto = (_a = Compatible.fakePrototype) !== null && _a !== void 0 ? _a : (Compatible.fakePrototype = {});
            const slot = obtainSlot(proto);
            delete Compatible.fakePrototype;
            obtainSlot(arg.prototype, slot);
            const ret = deco(arg);
            return ret;
        }
        else {
            return deco(arg);
        }
    };
}
export function compatibleMemberDecorator(deco) {
    return function (arg, ctx) {
        var _a;
        if (typeof ctx === 'object') { //stage 3
            const proto = (_a = Compatible.fakePrototype) !== null && _a !== void 0 ? _a : (Compatible.fakePrototype = {});
            proto[ctx.name] = arg;
            return deco(proto, ctx.name);
        }
        else {
            return deco(arg, ctx);
        }
    };
}
//# sourceMappingURL=utils.js.map