export interface PromiseMock<T> extends Promise<T> {
    resolve(value: T): void;

    reject(reason?: any): void;
}

export function createPromiseMock<T>(): PromiseMock<T> {
    let resolvePromise;
    let rejectPromise;

    const promise: Partial<PromiseMock<T>> = new Promise<T>((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
    });

    promise.resolve = resolvePromise;
    promise.reject = rejectPromise;

    return promise as PromiseMock<T>;
}
