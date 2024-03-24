import { type ComponentCustomOptions } from 'vue';
import type { SetupContext } from 'vue';
import type { VueCons } from './index';
export type Cons = VueCons;
type SetupFunction<T> = (this: void, props: Readonly<any>, ctx: SetupContext<any>) => T | Promise<T>;
export type OptionSetupFunction = SetupFunction<any>;
export type ComponentSetupFunction = SetupFunction<Record<string, any>>;
declare function ComponentOption(cons: Cons, extend?: any): any;
type ComponentOption = {
    name?: string;
    emits?: string[];
    provide?: Record<string, any> | Function;
    components?: Record<string, any>;
    directives?: Record<string, any>;
    inheritAttrs?: boolean;
    expose?: string[];
    render?: Function;
    modifier?: (raw: any) => any;
    options?: ComponentCustomOptions & Record<string, any>;
    template?: string;
    mixins?: any[];
    setup?: ComponentSetupFunction;
};
type ComponentConsOption = Cons | ComponentOption;
export declare function ComponentBase(arg: ComponentConsOption): any;
export declare function Component(arg: ComponentConsOption): any;
export {};
//# sourceMappingURL=component.d.ts.map