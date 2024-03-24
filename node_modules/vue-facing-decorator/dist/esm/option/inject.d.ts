import type { InjectionKey } from 'vue';
import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
export interface InjectConfig {
    from?: string | symbol | Symbol | InjectionKey<any>;
    default?: any;
}
export declare const decorator: {
    (option?: InjectConfig | undefined): any;
    (proto: import("..").BaseTypeIdentify, name: any): any;
};
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=inject.d.ts.map