"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LT_HASH_ANTI_TAMPERING = void 0;
const crypto_1 = require("./crypto");
class LTHashAntiTampering {
    subtractThenAdd(base, subtract, add) {
        const output = Buffer.from(base);
        this.applyMultiple(output, subtract, true);
        this.applyMultiple(output, add, false);
        return output;
    }
    applyMultiple(base, values, subtract) {
        for (const value of values) {
            const expanded = (0, crypto_1.hkdf)(value, 128, { info: 'WhatsApp Patch Integrity' });
            this.performPointwiseWithOverflow(base, expanded, subtract);
        }
    }
    performPointwiseWithOverflow(base, input, subtract) {
        for (let i = 0; i < base.length; i += 2) {
            const x = base.readUInt16LE(i);
            const y = input.readUInt16LE(i);
            const result = subtract ? (x - y + 0x10000) % 0x10000 : (x + y) % 0x10000;
            base.writeUInt16LE(result, i);
        }
    }
}
/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */
exports.LT_HASH_ANTI_TAMPERING = new LTHashAntiTampering();
//# sourceMappingURL=lt-hash.js.map