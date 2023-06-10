import Zip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import fs from 'node:fs'
import path from 'node:path'
import { getConfig } from './input-getter'

main()

function main(){
    const doc = prepareDoc()
    transformDoc(doc)
    downloadDoc(doc)
}

function prepareDoc(){
    const content = fs.readFileSync(
        path.resolve(__dirname, "../", "config_files", "plantilla.docx"),
        "binary"
    )
    const zip = new Zip(content)
    return new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    })
}

/**
 * Be careful when using this function as it mutates data
 * @param doc The doc to mutate
 */

function transformDoc(doc: Docxtemplater<Zip>){
    const config = getConfig()
    doc.render(config)
}

function downloadDoc(doc: Docxtemplater<Zip>){
    const buffer = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    })
    fs.writeFileSync(
        path.resolve(__dirname, "../", "config_files", "output.docx"),
        buffer
    )
}