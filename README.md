# joycon-ts-loader
[![GitHub](https://img.shields.io/github/license/gluons/joycon-ts-loader.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/joycon-ts-loader.svg?style=flat-square)](https://www.npmjs.com/package/joycon-ts-loader)
[![Travis (.com)](https://img.shields.io/travis/com/gluons/joycon-ts-loader.svg?style=flat-square)](https://travis-ci.com/gluons/joycon-ts-loader)

A [TypeScript](https://www.typescriptlang.org/) loader for [JoyCon](https://github.com/egoist/joycon).

## Installation

You need to install TypeScript first.

```bash
npm install --save-dev typescript
# or #
yarn add --dev typescript
```

Then install `joycon-ts-loader`.

```bash
npm install joycon-ts-loader
# or #
yarn add joycon-ts-loader
```

## Usage

```js
const JoyCon = require('joycon');
const JoyConTSLoader = require('joycon-ts-loader');

const joycon = new JoyCon();
joycon.addLoader(JoyConTSLoader);

joycon.load([/* file... */]);
```
