import { beforeEach, expect, it, SpyInstanceFn, vitest } from 'vitest';

import { createPromiseMock, PromiseMock } from './index';

const onFulfilled: SpyInstanceFn<[string]> = vitest.fn();
const onRejected: SpyInstanceFn<[unknown]> = vitest.fn();

let promiseMock: PromiseMock<string>;

beforeEach(() => {
    promiseMock = createPromiseMock();
    promiseMock.then(onFulfilled, onRejected);
});

it('should resolve promise', async () => {
    promiseMock.resolve('foo');
    await flushPromises();

    expect(onFulfilled).toHaveBeenCalledWith('foo');
});

it('should reject promise', async () => {
    promiseMock.reject('bar');
    await flushPromises();

    expect(onRejected).toHaveBeenCalledWith('bar');
});

function flushPromises(): Promise<void> {
    return new Promise((resolve) => {
        setImmediate(resolve);
    });
}
