import { input } from "./a.js";

// how many pairs overlap at all

let answer = 0

for (const pair of input) {
  const isOverlapping = checkIfPairOverlaps(pair)
  if (isOverlapping) answer += 1
}

function checkIfPairOverlaps(pair) {
  const [rangeA, rangeB] = pair.split(',')
  let [aLo, aHi] = rangeA.split('-')
  let [bLo, bHi] = rangeB.split('-')

  aLo = parseInt(aLo)
  aHi = parseInt(aHi)
  bLo = parseInt(bLo)
  bHi = parseInt(bHi)

  // check if rangeA contains rangeB
  if (aHi < bLo || aLo > bHi) return false

  // check if rangeB contains rangeA
  if (bHi < aLo || bLo > aHi) return false

  // neither range contained the other
  return true
}

console.log(answer)