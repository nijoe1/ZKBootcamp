export * from './index';
import { Component as ComponentOld } from './index';
export function Component(...args) {
    const res = ComponentOld.apply(this, args);
    function process(res) {
        const cons = res.__vfdConstructor;
        cons.__vccOpts = res;
        return cons;
    }
    if (typeof res === 'function') {
        return function () {
            return process(res.apply(this, arguments));
        };
    }
    else {
        return process(res);
    }
}
//# sourceMappingURL=index-return-cons.js.map