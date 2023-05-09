// the badge is the ONLY item carried by all three elves

import { itemMap } from "./a.js"
import { getInput } from "../1/a.js"

const input = getInput()
const groups = []

for (let i = 0; i < input.length; i = i + 3) {
  const first = input[i]
  const second = input[i + 1]
  const third = input[i + 2]
  groups.push([first, second, third])
}

const badges = groups.map((group) => {
  const firstSet = new Set(group[0])
  const secondSet = new Set(group[1])
  const thirdSet = new Set(group[2])

  for (const char of firstSet) {
    if (secondSet.has(char) && thirdSet.has(char)) return char
  }
})

const answer = badges.reduce((acc, cur) => acc + itemMap.get(cur), 0)
console.log(answer)