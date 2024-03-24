// const CustomDecorators: CustomDecorator[] = []
export const CustomRecords = [];
export function createDecorator(creator) {
    return function (proto, key) {
        CustomRecords.push({
            key,
            creator
        });
    };
}
//# sourceMappingURL=custom.js.map