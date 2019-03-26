import * as fs from "fs"
let rawData =  fs.readFileSync('config.json').toString();
const config = JSON.parse(rawData)
export default config