import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
import { type PropsConfig } from './props';
export type VModelConfig = PropsConfig & {
    name?: string;
};
export declare const decorator: {
    (option?: VModelConfig | undefined): any;
    (proto: import("..").BaseTypeIdentify, name: any): any;
};
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=vmodel.d.ts.map