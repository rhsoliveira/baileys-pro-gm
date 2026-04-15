import { hkdf } from './crypto'

class LTHashAntiTampering {
	subtractThenAdd(base: Uint8Array, subtract: Uint8Array[], add: Uint8Array[]) {
		const output = Buffer.from(base)
		this.applyMultiple(output, subtract, true)
		this.applyMultiple(output, add, false)
		return output
	}

	private applyMultiple(base: Buffer, values: Uint8Array[], subtract: boolean) {
		for (const value of values) {
			const expanded = hkdf(value, 128, { info: 'WhatsApp Patch Integrity' })
			this.performPointwiseWithOverflow(base, expanded, subtract)
		}
	}

	private performPointwiseWithOverflow(base: Buffer, input: Buffer, subtract: boolean) {
		for (let i = 0; i < base.length; i += 2) {
			const x = base.readUInt16LE(i)
			const y = input.readUInt16LE(i)
			const result = subtract ? (x - y + 0x10000) % 0x10000 : (x + y) % 0x10000
			base.writeUInt16LE(result, i)
		}
	}
}

/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */
export const LT_HASH_ANTI_TAMPERING = new LTHashAntiTampering()
