# TBL-Browser

## About

TBL is a data table format based on SML ([SML Documentation/Specification](https://www.simpleml.com)).

## Installation

Using NPM:
```
npm install @stenway/tbl-browser
```

## Getting started

```ts
TblDownload.download(TblDocument.parse("Table\nColumn1 Column2\nValue1 Value2\nEnd"), "Test.tbl")
```