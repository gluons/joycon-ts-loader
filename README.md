# joycon-ts-loader
[![npm](https://img.shields.io/npm/v/joycon-ts-loader.svg)](https://www.npmjs.com/package/joycon-ts-loader)
[![Build Status](https://travis-ci.com/gluons/joycon-ts-loader.svg?branch=master)](https://travis-ci.com/gluons/joycon-ts-loader)

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
