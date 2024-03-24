import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
export const decorator = optoinNullableMemberDecorator(function (proto, name) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('vanilla');
    map.set(name, true);
});
//# sourceMappingURL=vanilla.js.map