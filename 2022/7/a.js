import { readFileSync } from "node:fs"

const input = readFileSync("input.txt").toString().split("\r\n")
const filesystem = { dirs: {}, files: {} }
let path = ["/"]

function updatePath(dir) {
  if (dir === "/") return path = ["/"]
  if (dir === "..") {
    path.pop()
    return
  }

  path.push(dir)
}

function addDir(dir) {
  const cwd = grabCwd()
  cwd.dirs[dir] = { dirs: {}, files: {} }
}

function grabCwd() {
  if (path.length === 1) return filesystem

  let cwd = filesystem

  for (const dir of path) {
    if (dir === "/") continue
    cwd = cwd.dirs[dir]
  }

  return cwd
}

for (const line of input) {
  const token = line.split(" ")

  if (token[0] === "$") {
    const cmd = token[1]
    if (cmd === "cd") updatePath(token[2])
    continue
  }

  if (token[0] === "dir") {
    addDir(token[1])
    continue
  }

  // It only reaches this part if it's a file
  const cwd = grabCwd()
  cwd.files[token[1]] = token[0] // filename: size
}

// by this point the filesystem is built

function findDirsAtMost100k(filesystem, dirsAtMost100K, dirName) {
}

const answer = findDirsAtMost100k(filesystem, {}, "/")
console.log(answer)