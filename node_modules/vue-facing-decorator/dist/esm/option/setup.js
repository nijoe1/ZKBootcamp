import { obtainSlot } from '../utils';
export function decorator(setupFunction) {
    return function (proto, name) {
        const slot = obtainSlot(proto);
        const map = slot.obtainMap('setup');
        map.set(name, {
            setupFunction
        });
    };
}
const isPromise = (v) => v instanceof Promise;
//(v: any) => typeof v === 'object' && typeof v.then === 'function'
export function build(cons, optionBuilder) {
    const slot = obtainSlot(cons.prototype);
    const map = slot.obtainMap('setup');
    if (map.size === 0) {
        return;
    }
    const setup = function (props, ctx) {
        const setupData = {};
        let promises = null;
        for (const name of map.keys()) {
            const setupState = map.get(name).setupFunction(props, ctx);
            if (isPromise(setupState)) {
                promises !== null && promises !== void 0 ? promises : (promises = []);
                promises.push(setupState.then((v) => {
                    setupData[name] = v;
                }));
            }
            else {
                setupData[name] = setupState;
            }
        }
        if (Array.isArray(promises)) {
            return Promise.all(promises).then(() => {
                return setupData;
            });
        }
        else {
            return setupData;
        }
    };
    optionBuilder.setup = setup;
}
//# sourceMappingURL=setup.js.map