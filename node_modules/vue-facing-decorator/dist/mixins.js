"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixins = void 0;
const component_1 = require("./component");
const utils_1 = require("./utils");
const index_1 = require("./index");
function mixins(...conses) {
    class MixinsClass extends index_1.Vue {
    }
    (0, component_1.ComponentBase)({
        mixins: conses.map((cons => (0, utils_1.obtainSlot)(cons.prototype).cachedVueComponent))
    })(MixinsClass);
    return MixinsClass;
}
exports.mixins = mixins;
//# sourceMappingURL=mixins.js.map