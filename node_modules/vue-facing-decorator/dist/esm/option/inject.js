import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
export const decorator = optoinNullableMemberDecorator(function (proto, name, option) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('inject');
    const opt = Object.assign({}, option !== null && option !== void 0 ? option : {});
    map.set(name, opt);
});
export function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.inject) !== null && _a !== void 0 ? _a : (optionBuilder.inject = {});
    const slot = obtainSlot(cons.prototype);
    const names = slot.obtainMap('inject');
    if (names) {
        names.forEach((value, name) => {
            optionBuilder.inject[name] = value;
        });
    }
}
//# sourceMappingURL=inject.js.map