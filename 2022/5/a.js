import { readFileSync } from "node:fs"

const input = readFileSync("input.txt").toString().trimEnd().split("\r\n")
const splitPoint = input.findIndex((element) => element === "")
const stackInput = input.slice(0, splitPoint - 1)
export const instructions = input.slice(splitPoint + 1)

/** 
 * This will give convert the text file stacks into an ES6 Map
 * [1 => [G,B,D,C,P,R], 2 => [G,V,H], 3 => [M,P,J,D,Q,S,N]]
 */
function getStackMap(stackInput) {
  const stackMap = initStackMap(stackInput)

  for (const layer of stackInput.reverse()) {
    const chars = layer.split("")
    addCharsToStackMap(chars, stackMap)
  }

  return stackMap
}

/** 
 * Create a stackMap, and initialize it with empty stacks
 * (one for each one found in the input)
 */
function initStackMap(stackInput) {
  const stackMap = new Map()

  let stack = 1
  let firstLayer = stackInput[0].split("")
  for (let i = 1; i < firstLayer.length - 1; i = i + 4) {
    stackMap.set(stack, [])
    stack += 1
  }

  return stackMap
}

function addCharsToStackMap(chars, stackMap) {
  let stackNumber = 1
  for (let i = 1; i < chars.length - 1; i = i + 4) {
    const char = chars[i]

    if (char === " ") {
      stackNumber += 1
      continue
    }

    // push mutates the array
    stackMap.get(stackNumber).push(char)

    // prepare for next char on the next stack
    stackNumber += 1
  }
}

export function processInstructions(stackMap, instructions, processCb) {
  const newStackMap = structuredClone(stackMap)

  for (const instruction of instructions) {
    const instrArray = instruction.split(" ")
    const numToMove = parseInt(instrArray[1])
    const origin = parseInt(instrArray[3])
    const destination = parseInt(instrArray[5])
    processCb(newStackMap, numToMove, origin, destination)
  }

  return newStackMap
}

function oneAtATime(stackMap, numToMove, origin, destination) {
  for (let i = 0; i < numToMove; i++) {
    const crate = stackMap.get(origin).pop()
    stackMap.get(destination).push(crate)
  }
}

export function grabAnswer(stackMap) {
  const answer = []

  for (let i = 0; i < stackMap.size; i++) {
    const stack = stackMap.get(i + 1)
    const finalLetter = stack[stack.length - 1]
    answer.push(finalLetter)
  }

  return answer.join("")
}

export const stackMap = getStackMap(stackInput)
const newStackMap = processInstructions(stackMap, instructions, oneAtATime)
const answer = grabAnswer(newStackMap)