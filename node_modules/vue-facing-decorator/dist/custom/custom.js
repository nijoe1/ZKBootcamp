"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDecorator = exports.CustomRecords = void 0;
// const CustomDecorators: CustomDecorator[] = []
exports.CustomRecords = [];
function createDecorator(creator) {
    return function (proto, key) {
        exports.CustomRecords.push({
            key,
            creator
        });
    };
}
exports.createDecorator = createDecorator;
//# sourceMappingURL=custom.js.map