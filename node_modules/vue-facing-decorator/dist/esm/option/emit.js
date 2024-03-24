var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { obtainSlot, optoinNullableMemberDecorator } from '../utils';
export const decorator = optoinNullableMemberDecorator(function (proto, name, key) {
    const slot = obtainSlot(proto);
    const map = slot.obtainMap('emit');
    map.set(name, typeof key === 'undefined' ? null : key);
});
export function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.methods) !== null && _a !== void 0 ? _a : (optionBuilder.methods = {});
    const proto = cons.prototype;
    const slot = obtainSlot(proto);
    const names = slot.obtainMap('emit');
    const emits = slot.obtainMap('emits');
    if (names) {
        names.forEach((value, key) => {
            const eventName = value === null ? key : value;
            emits.set(eventName, true);
            optionBuilder.methods[key] = function () {
                return __awaiter(this, arguments, void 0, function* () {
                    const ret = proto[key].apply(this, arguments);
                    if (ret instanceof Promise) {
                        const proRet = yield ret;
                        this.$emit(eventName, proRet);
                    }
                    else {
                        this.$emit(eventName, ret);
                    }
                });
            };
        });
    }
}
//# sourceMappingURL=emit.js.map