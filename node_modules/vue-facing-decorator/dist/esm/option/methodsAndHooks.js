import { obtainSlot, toComponentReverse, excludeNames, getValidNames, optoinNullableMemberDecorator } from '../utils';
export const HookNames = [
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
export const decorator = optoinNullableMemberDecorator(function (proto, name) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('hooks');
    map.set(name, null);
});
export function build(cons, optionBuilder) {
    var _a, _b;
    const slot = obtainSlot(cons.prototype);
    const protoArr = toComponentReverse(cons.prototype);
    const map = slot.obtainMap('hooks');
    (_a = optionBuilder.hooks) !== null && _a !== void 0 ? _a : (optionBuilder.hooks = {});
    (_b = optionBuilder.methods) !== null && _b !== void 0 ? _b : (optionBuilder.methods = {});
    const HookFunctions = {};
    const MethodFunctions = {};
    protoArr.forEach(proto => {
        excludeNames(getValidNames(proto, (des, name) => {
            if (name === 'constructor') {
                return false;
            }
            if (typeof des.value === 'function') {
                return true;
            }
            return false;
        }), slot).forEach(name => {
            if (HookNames.includes(name) || map.has(name)) {
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
//# sourceMappingURL=methodsAndHooks.js.map