import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
import { decorator as PropsDecorator } from './props';
export const decorator = optoinNullableMemberDecorator(function (proto, name, option) {
    var _a;
    option !== null && option !== void 0 ? option : (option = {});
    const slot = obtainSlot(proto);
    let vmodelName = 'modelValue';
    const propsConfig = Object.assign({}, option);
    if (propsConfig) {
        vmodelName = (_a = propsConfig.name) !== null && _a !== void 0 ? _a : vmodelName;
        delete propsConfig.name;
    }
    PropsDecorator(propsConfig)(proto, vmodelName);
    const map = slot.obtainMap('v-model');
    map.set(name, option);
});
export function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.computed) !== null && _a !== void 0 ? _a : (optionBuilder.computed = {});
    const slot = obtainSlot(cons.prototype);
    const names = slot.obtainMap('v-model');
    if (names && names.size > 0) {
        names.forEach((value, name) => {
            var _a;
            const vmodelName = (_a = (value && value.name)) !== null && _a !== void 0 ? _a : 'modelValue';
            optionBuilder.computed[name] = {
                get: function () {
                    return this[vmodelName];
                },
                set: function (val) {
                    this.$emit(`update:${vmodelName}`, val);
                }
            };
        });
    }
}
//# sourceMappingURL=vmodel.js.map