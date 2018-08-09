# merge-svg-files

[![npm](https://img.shields.io/npm/v/merge-svg-files.svg)](https://www.npmjs.com/package/merge-svg-files)

Merge multiple SVG files into single SVG file with symbols.

## Install

```
$ npm install -g merge-svg-files
```

## Usage

```
$ cd folder-with-svg-files
$ merge-svg-files
```

File `sprites.svg` will be generated.

Later in HTML you can use these symbols:

```html
<svg><use href="sprites.svg#myicon"/></svg>
```

### Options

* `--support-embed`

    Generate SVG file which could be used in `<embed src="sprites.svg#myicon" />` as well as in `<svg><use href="sprites.svg#myicon"/></svg>`.

    `<embed>` is supported by IE11 while `<svg>+<use>` is not.

* `-h`, `--help`

    Show help screen.

* `--version`

    Print version.
