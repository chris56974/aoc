import { getInput } from "../1/a.js"

const input = getInput()
export const itemMap = new Map()
const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

// a => 1, z => 52
for (const [i, v] of itemTypes.entries()) {
  itemMap.set(v, i + 1)
}

// ["lkajkajf"]
// [["lkaj", "kajf"]]
const inputSplit = input.map((el) => {
  const halfWayPoint = el.length / 2
  const firstCompartment = el.substring(0, halfWayPoint)
  const secondCompartment = el.substring(halfWayPoint)
  return [firstCompartment, secondCompartment]
})

const findDuplicate = (first, second) => {
  const firstSet = new Set(first)
  const secondSet = new Set(second)

  for (const char of firstSet) {
    if (secondSet.has(char)) return char
  }
}

const duplicates = inputSplit.map((el) => findDuplicate(el[0], el[1]))

const answer = duplicates.reduce((acc, cur) => acc + itemMap.get(cur), 0)
