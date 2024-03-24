import { obtainSlot, } from '../utils';
export function decorator(key, option) {
    return function (proto, name) {
        const slot = obtainSlot(proto);
        const map = slot.obtainMap('watch');
        const opt = Object.assign({}, option !== null && option !== void 0 ? option : {}, {
            key: key,
            handler: proto[name]
        });
        if (map.has(name)) {
            const t = map.get(name);
            if (Array.isArray(t)) {
                t.push(opt);
            }
            else {
                map.set(name, [t, opt]);
            }
        }
        else {
            map.set(name, opt);
        }
    };
}
export function build(cons, optionBuilder) {
    var _a;
    (_a = optionBuilder.watch) !== null && _a !== void 0 ? _a : (optionBuilder.watch = {});
    const slot = obtainSlot(cons.prototype);
    const names = slot.obtainMap('watch');
    if (names) {
        names.forEach((value, _name) => {
            const values = Array.isArray(value) ? value : [value];
            values.forEach(v => {
                if (!optionBuilder.watch[v.key]) {
                    optionBuilder.watch[v.key] = v;
                }
                else {
                    const t = optionBuilder.watch[v.key];
                    if (Array.isArray(t)) {
                        t.push(v);
                    }
                    else {
                        optionBuilder.watch[v.key] = [t, v];
                    }
                }
            });
        });
    }
}
//# sourceMappingURL=watch.js.map