export declare class SerialTaskQueue {
    private current;
    add<T>(task: () => Promise<T> | T): Promise<T>;
}
//# sourceMappingURL=serial-task-queue.d.ts.map