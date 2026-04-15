"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialTaskQueue = void 0;
class SerialTaskQueue {
    constructor() {
        this.current = Promise.resolve();
    }
    add(task) {
        const run = this.current.then(task, task);
        this.current = run.then(() => undefined, () => undefined);
        return run;
    }
}
exports.SerialTaskQueue = SerialTaskQueue;
//# sourceMappingURL=serial-task-queue.js.map