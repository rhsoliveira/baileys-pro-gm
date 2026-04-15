"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentOrderFunctions = void 0;
exports.PaymentOrderFunctions = {
    generateCustomRetailerId: () => {
        return 'custom-item-' + Math.floor(Math.random() * 1000000000);
    },
    generateReferenceId: () => {
        return Math.random().toString(36).substring(2, 11).toUpperCase();
    }
};
//# sourceMappingURL=payment-order.js.map