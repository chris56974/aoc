import { calsPerElfGrouped } from "./1.mjs";

export const calsSorted = calsPerElfGrouped.sort((a, b) => a - b)
export const numElves = calsSorted.length - 1

const highest = calsSorted[numElves]
const secondHighest = calsSorted[numElves - 1]
const thirdHighest = calsSorted[numElves - 2]

export const answer = [highest, secondHighest, thirdHighest].reduce((curr, next) => curr + next)
