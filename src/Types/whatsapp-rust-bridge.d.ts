declare module 'whatsapp-rust-bridge' {
	export interface ExpandedAppStateKeys {
		indexKey: Uint8Array
		valueEncryptionKey: Uint8Array
		valueMacKey: Uint8Array
		snapshotMacKey: Uint8Array
		patchMacKey: Uint8Array
	}

	export class LTHashAntiTampering {
		subtractThenAdd(base: Uint8Array, subtract: Uint8Array[], add: Uint8Array[]): Uint8Array
	}

	export function expandAppStateKeys(keyData: Uint8Array): ExpandedAppStateKeys
	export function md5(buffer: Uint8Array): Uint8Array
	export function hkdf(
		buffer: Uint8Array,
		expandedLength: number,
		info: {
			salt?: Uint8Array | undefined
			info?: string | undefined
		}
	): Uint8Array
}
