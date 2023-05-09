import { stackMap, grabAnswer, processInstructions, instructions } from "./a.js";

function allAtOnce(stackMap, numToMove, origin, destination) {
  let movingCrates = []

  for (let i = 0; i < numToMove; i++) {
    const crate = stackMap.get(origin).pop()
    movingCrates.push(crate)
  }

  movingCrates = movingCrates.reverse()
  stackMap.get(destination).push(...movingCrates)
}

const newStack = processInstructions(stackMap, instructions, allAtOnce)
const answer = grabAnswer(newStack)
console.log(answer)