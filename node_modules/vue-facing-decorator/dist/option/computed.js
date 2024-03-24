"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const utils_1 = require("../utils");
function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.computed) !== null && _a !== void 0 ? _a : (optionBuilder.computed = {});
    const slot = (0, utils_1.obtainSlot)(cons.prototype);
    const map = slot.obtainMap('computed');
    const vanillaMap = slot.obtainMap('vanilla');
    const protoArr = (0, utils_1.toComponentReverse)(cons.prototype);
    protoArr.forEach(proto => {
        (0, utils_1.getValidNames)(proto, (des, name) => {
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
exports.build = build;
//# sourceMappingURL=computed.js.map