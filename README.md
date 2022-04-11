[![npm](https://img.shields.io/npm/v/simple-promise-mock?style=for-the-badge)](https://www.npmjs.com/package/simple-promise-mock)

# Simple Promise Mock

> A tiny utility function to create a controlled promise instance with additional methods to resolve or reject it.

## Why?

Because often in tests you need to mock async function and manually control when it resolves or rejects.

## Install

```sh
npm install --save simple-promise-mock
```

## Usage

```js
import { createPromiseMock } from 'simple-promise-mock';

const promise = createPromiseMock();
promise.then(() => {
  // do something
}).catch(() => {
  // do something
});

promise.resolve('foo');
// or
promise.reject('bar');
```
