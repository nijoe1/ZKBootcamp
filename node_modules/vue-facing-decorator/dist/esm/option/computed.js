import { obtainSlot, toComponentReverse, getValidNames } from '../utils';
export function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.computed) !== null && _a !== void 0 ? _a : (optionBuilder.computed = {});
    const slot = obtainSlot(cons.prototype);
    const map = slot.obtainMap('computed');
    const vanillaMap = slot.obtainMap('vanilla');
    const protoArr = toComponentReverse(cons.prototype);
    protoArr.forEach(proto => {
        getValidNames(proto, (des, name) => {
            return (typeof des.get === 'function' || typeof des.set === 'function') && !vanillaMap.has(name);
        }).forEach(name => {
            map.set(name, true);
            const des = Object.getOwnPropertyDescriptor(proto, name);
            optionBuilder.computed[name] = {
                get: typeof des.get === 'function' ? des.get : undefined,
                set: typeof des.set === 'function' ? des.set : undefined
            };
        });
    });
}
//# sourceMappingURL=computed.js.map