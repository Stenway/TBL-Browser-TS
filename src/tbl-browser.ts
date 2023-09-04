/* (C) Stefan John / Stenway / SimpleML.com / 2023 */

import { ReliableTxtDocument } from "@stenway/reliabletxt"
import { TblDocument } from "@stenway/tbl"

// ----------------------------------------------------------------------

export abstract class TblDownload {
	static getDownloadUrl(document: TblDocument): string {
		const str: string = document.toString()
		const bytes: Uint8Array = new ReliableTxtDocument(str, document.encoding).toBytes()
		const blob: Blob = new Blob([bytes], { type: 'application/tbl' })
		return URL.createObjectURL(blob)
	}
	
	static download(tblDocument: TblDocument, fileName: string) {
		const url = TblDownload.getDownloadUrl(tblDocument)
		const element = document.createElement('a')
		element.href = url
		element.download = fileName
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}
}