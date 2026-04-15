export class SerialTaskQueue {
	private current: Promise<unknown> = Promise.resolve()

	add<T>(task: () => Promise<T> | T): Promise<T> {
		const run = this.current.then(task, task)
		this.current = run.then(
			() => undefined,
			() => undefined
		)
		return run
	}
}
