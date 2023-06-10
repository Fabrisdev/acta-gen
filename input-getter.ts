//const config = getConfig()
//const userInput = getUserInput()
//const fullInput = {
//  ...config,
//  ...userInput,
//}

import { parse } from 'yaml'
import fs from 'node:fs'
import path from 'node:path'

export function getConfig(){
    const configFile = fs.readFileSync(
        path.resolve(__dirname, "../", "config_files", "config.yaml"),
        "utf-8"
    )
    const config = parse(configFile)
    console.log(config)
}