// https://adventofcode.com/2022/day/1

import { readFileSync } from "node:fs"

/**
 * @returns { string[] } ["1", "", "1", "2"]
 */
export const getInput = () => readFileSync("input.txt").toString().trim().split('\r\n')

/**
 * @param {string[]} calsPerElf ["1", "", "1", "2"]
 * @returns {string[]} ["1", "3"]
 */
function groupValues(calsPerElf) {
  const result = []
  let sum = 0

  for (const cal of calsPerElf) {
    if (cal === "") {
      result.push(sum)
      sum = 0
      continue
    }
    sum += parseInt(cal);
  }

  return result
}

export const calsPerElf = getInput()
export const calsPerElfGrouped = groupValues(calsPerElf)
export const answer = Math.max(...calsPerElfGrouped)