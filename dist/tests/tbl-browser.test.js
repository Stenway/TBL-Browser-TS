"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tbl_1 = require("@stenway/tbl");
const src_1 = require("../src");
test("TblDownload.getDownloadUrl", () => {
    const document = new tbl_1.TblDocument(["Column1", "Column2"]);
    src_1.TblDownload.getDownloadUrl(document);
});
test("TblDownload.download", () => {
    const document = new tbl_1.TblDocument(["Column1", "Column2"]);
    expect(() => src_1.TblDownload.download(document, "File.txt")).toThrowError();
});
//# sourceMappingURL=tbl-browser.test.js.map