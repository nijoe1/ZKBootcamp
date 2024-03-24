import type { OptionSetupFunction } from '../component';
import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
export type SetupConfig = {
    setupFunction: OptionSetupFunction;
};
export declare function decorator(setupFunction: OptionSetupFunction): (proto: any, name: string) => void;
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=setup.d.ts.map