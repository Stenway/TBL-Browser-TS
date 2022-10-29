"use strict";
/* (C) Stefan John / Stenway / SimpleML.com / 2022 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblDownload = void 0;
const reliabletxt_1 = require("@stenway/reliabletxt");
// ----------------------------------------------------------------------
class TblDownload {
    static getDownloadUrl(document) {
        let str = document.toString();
        let bytes = new reliabletxt_1.ReliableTxtDocument(str, document.encoding).getBytes();
        let blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(tblDocument, fileName) {
        const url = TblDownload.getDownloadUrl(tblDocument);
        let element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
exports.TblDownload = TblDownload;
