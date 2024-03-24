import { ComponentBase } from './component';
import { obtainSlot } from './utils';
import { Vue } from './index';
export function mixins(...conses) {
    class MixinsClass extends Vue {
    }
    ComponentBase({
        mixins: conses.map((cons => obtainSlot(cons.prototype).cachedVueComponent))
    })(MixinsClass);
    return MixinsClass;
}
//# sourceMappingURL=mixins.js.map