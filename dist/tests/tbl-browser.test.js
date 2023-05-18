import { TblDocument } from "@stenway/tbl";
import { TblDownload } from "../src/tbl-browser.js";
test("TblDownload.getDownloadUrl", () => {
    const document = new TblDocument(["Column1", "Column2"]);
    TblDownload.getDownloadUrl(document);
});
test("TblDownload.download", () => {
    const document = new TblDocument(["Column1", "Column2"]);
    expect(() => TblDownload.download(document, "File.txt")).toThrowError();
});
//# sourceMappingURL=tbl-browser.test.js.map