"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator = void 0;
const utils_1 = require("../utils");
exports.decorator = (0, utils_1.optoinNullableMemberDecorator)(function (proto, name) {
    const slot = (0, utils_1.obtainSlot)(proto);
    const map = slot.obtainMap('vanilla');
    map.set(name, true);
});
//# sourceMappingURL=vanilla.js.map