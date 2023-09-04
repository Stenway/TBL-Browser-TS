# TBL-Browser

## About this package

This package is the **browser-specific part** mentioned in the environment-independent **[TBL](https://www.npmjs.com/package/@stenway/tbl)** package (You will find more information there about TBL in general). The package currently just contains a simple helper class to easily create a downloadable file.

## Getting started

First get the **TBL-Browser package** installed with a package manager of your choice.
If you are using NPM just run the following command:
```
npm install @stenway/tbl-browser
```
Create a TblDocument and pass it to the static method **download** of the static TblDownload class. Provide a file name as a second argument:

```ts
TblDownload.download(TblDocument.parse("Table\nColumn1 Column2\nValue1 Value2\nEnd"), "Test.tbl")
```