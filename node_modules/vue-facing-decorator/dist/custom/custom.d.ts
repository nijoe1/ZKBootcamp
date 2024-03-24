type Creator = {
    (options: any, key: string): void;
};
interface Record {
    key: string;
    creator: Creator;
}
export declare const CustomRecords: Record[];
export declare function createDecorator(creator: Creator): (proto: any, key: string) => void;
export {};
//# sourceMappingURL=custom.d.ts.map