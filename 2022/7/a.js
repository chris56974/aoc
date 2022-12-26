import { readFileSync } from "node:fs"

const input = readFileSync("input.txt").toString().split("\r\n")
const filesystem = { files: {}, dirs: {} }

for (const line of input) { }