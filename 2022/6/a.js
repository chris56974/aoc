import { readFileSync } from "node:fs"

const input = readFileSync('input.txt').toString()

function findStart(datastream) {
  let l = 0
  let r = 3

  const data = new Set()

  while (r <= datastream.length - 1) {
    data.add(datastream[l])
    data.add(datastream[l + 1])
    data.add(datastream[l + 2])
    data.add(datastream[r])

    if (data.size === 4) return r + 1

    data.clear()
    r += 1
    l += 1
  }
}

const answer = findStart(input)
