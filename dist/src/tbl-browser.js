/* (C) Stefan John / Stenway / SimpleML.com / 2023 */
import { ReliableTxtDocument } from "@stenway/reliabletxt";
// ----------------------------------------------------------------------
export class TblDownload {
    static getDownloadUrl(document) {
        const str = document.toString();
        const bytes = new ReliableTxtDocument(str, document.encoding).getBytes();
        const blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(tblDocument, fileName) {
        const url = TblDownload.getDownloadUrl(tblDocument);
        const element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
//# sourceMappingURL=tbl-browser.js.map