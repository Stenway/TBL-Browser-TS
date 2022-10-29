/* (C) Stefan John / Stenway / SimpleML.com / 2022 */

import { ReliableTxtDocument } from "@stenway/reliabletxt"
import { TblDocument } from "@stenway/tbl"

// ----------------------------------------------------------------------

export abstract class TblDownload {
	static getDownloadUrl(document: TblDocument): string {
		let str: string = document.toString()
		let bytes: Uint8Array = new ReliableTxtDocument(str, document.encoding).getBytes()
		let blob: Blob = new Blob([bytes], { type: 'text/plain' })
		return URL.createObjectURL(blob)
	}
	
	static download(tblDocument: TblDocument, fileName: string) {
		const url = TblDownload.getDownloadUrl(tblDocument)
		let element = document.createElement('a')
		element.href = url
		element.download = fileName
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}
}