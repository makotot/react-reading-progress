# react-reading-progress

[![npm version](https://img.shields.io/npm/v/react-reading-progress.svg?style=flat-square)](https://www.npmjs.com/package/react-reading-progress)
[![travis](http://img.shields.io/travis/makotot/react-reading-progress.svg?style=flat-square)](https://travis-ci.org/makotot/react-reading-progress)
[![dependencies](http://img.shields.io/david/makotot/react-reading-progress.svg?style=flat-square)](https://github.com/makotot/react-reading-progress)
[![DevDependencies](http://img.shields.io/david/dev/makotot/react-reading-progress.svg?style=flat-square)](https://github.com/makotot/react-reading-progress)
[![License](http://img.shields.io/npm/l/react-reading-progress.svg?style=flat-square)](https://github.com/makotot/react-reading-progress)

> Reading progress bar component

[Demo](http://makotot.github.io/react-reading-progress/)

## Install

```sh
$ npm i react-reading-progress
```

## Usage

```js
import ReadingProgress from 'react-reading-progress'

...

<ReadingProgress targetEl="#target-el" />

<article id="target-el">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc. Ut sem viverra aliquet eget sit amet tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. In mollis nunc sed id semper risus in hendrerit gravida. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Amet purus gravida quis blandit. Et ultrices neque ornare aenean euismod elementum nisi quis. Vitae aliquet nec ullamcorper sit amet.
</article>
```

## Props

### `targetEl={ String }`

Target article's selector. If this prop is not specified, `document.body` will be used.

### `rootEl={ String }`

Root element selector. If this prop is not specified, `window` will be used.


## License

MIT
