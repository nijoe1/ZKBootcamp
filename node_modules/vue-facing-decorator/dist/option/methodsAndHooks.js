"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.decorator = exports.HookNames = void 0;
const utils_1 = require("../utils");
exports.HookNames = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "activated",
    "deactivated",
    "beforeDestroy",
    "beforeUnmount",
    "destroyed",
    "unmounted",
    "renderTracked",
    "renderTriggered",
    "errorCaptured",
    "serverPrefetch",
    "render"
];
exports.decorator = (0, utils_1.optoinNullableMemberDecorator)(function (proto, name) {
    const slot = (0, utils_1.obtainSlot)(proto);
    const map = slot.obtainMap('hooks');
    map.set(name, null);
});
function build(cons, optionBuilder) {
    var _a, _b;
    const slot = (0, utils_1.obtainSlot)(cons.prototype);
    const protoArr = (0, utils_1.toComponentReverse)(cons.prototype);
    const map = slot.obtainMap('hooks');
    (_a = optionBuilder.hooks) !== null && _a !== void 0 ? _a : (optionBuilder.hooks = {});
    (_b = optionBuilder.methods) !== null && _b !== void 0 ? _b : (optionBuilder.methods = {});
    const HookFunctions = {};
    const MethodFunctions = {};
    protoArr.forEach(proto => {
        (0, utils_1.excludeNames)((0, utils_1.getValidNames)(proto, (des, name) => {
            if (name === 'constructor') {
                return false;
            }
            if (typeof des.value === 'function') {
                return true;
            }
            return false;
        }), slot).forEach(name => {
            if (exports.HookNames.includes(name) || map.has(name)) {
                HookFunctions[name] = proto[name];
            }
            else {
                MethodFunctions[name] = proto[name];
            }
        });
    });
    Object.assign(optionBuilder.methods, MethodFunctions);
    const bccbs = optionBuilder.beforeCreateCallbacks;
    if (bccbs && bccbs.length > 0) {
        const oldBc = HookFunctions['beforeCreate'];
        HookFunctions['beforeCreate'] = function () {
            bccbs.forEach(bccb => bccb.apply(this, arguments));
            if (oldBc) {
                oldBc.apply(this, arguments);
            }
        };
    }
    Object.assign(optionBuilder.hooks, HookFunctions);
}
exports.build = build;
//# sourceMappingURL=methodsAndHooks.js.map