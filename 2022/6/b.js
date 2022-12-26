import { readFileSync } from "node:fs"

const input = readFileSync('input.txt').toString()

function findStart(datastream, chars) {
  let l = 0
  let r = chars - 1 // 0 indexed

  const data = new Set()

  while (r <= datastream.length - 1) {
    // fill up the set
    let i = l
    while (i <= r) {
      data.add(datastream[i])
      i += 1
    }

    if (data.size === chars) return r + 1

    data.clear()
    r += 1
    l += 1
  }
}

const answer = findStart(input, 14)
console.log(answer)
