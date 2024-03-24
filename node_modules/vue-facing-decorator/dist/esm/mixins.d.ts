import type { VueCons } from './index';
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare function mixins<T extends VueCons[]>(...conses: T): VueCons<UnionToIntersection<{ [index in keyof T]: InstanceType<T[index]>; }[number]>>;
export {};
//# sourceMappingURL=mixins.d.ts.map