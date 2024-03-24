"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const optionBuilder_1 = require("../optionBuilder");
const utils_1 = require("../utils");
function build(cons, optionBuilder) {
    const slot = (0, utils_1.obtainSlot)(cons.prototype);
    const vanillaMap = slot.obtainMap('vanilla');
    const protoArr = (0, utils_1.toComponentReverse)(cons.prototype);
    const map = new Map;
    (0, optionBuilder_1.applyAccessors)(optionBuilder, (ctx) => {
        protoArr.forEach(proto => {
            const deses = Object.getOwnPropertyDescriptors(proto);
            for (const name in deses) {
                const des = deses[name];
                if (des && vanillaMap.has(name)) {
                    if (typeof des.get === 'function' || typeof des.set === 'function') {
                        map.set(name, {
                            set: typeof des.set === 'function' ? des.set.bind(ctx) : undefined,
                            get: typeof des.get === 'function' ? des.get.bind(ctx) : undefined,
                        });
                    }
                }
            }
        });
        return map;
    });
}
exports.build = build;
//# sourceMappingURL=accessor.js.map