const parseInput = input => {
    return input.split('\n').map(line => line.split(''))
}

const toImage = grid => {
    image = ""
    for(line of grid) image += `${line.join(' ')}\n`
    return image
}

const findMinStepsAux = (grid, x, y) => {
    // console.log(x, y)
    // console.log(toImage(grid))
    if(grid[y][x] === 'E') {
        console.log("x", x, "y", y)
        return 1
    }

    const possibleNewPositions = []

    if(y>=1) {
        const hasBeenVisited = (grid[y-1][x] === '/')
        const isMax1Bigger = (grid[y-1][x].charCodeAt() <= (grid[y][x].charCodeAt() + 1))
        const isE = (grid[y-1][x] === 'E')
        if(!hasBeenVisited && (isMax1Bigger || isE)) possibleNewPositions.push([x, y-1])
    }

    if(y<=grid.length-2) {
        const hasBeenVisited = (grid[y+1][x] === '/')
        const isMax1Bigger = (grid[y+1][x].charCodeAt() <= (grid[y][x].charCodeAt() + 1))
        const isE = (grid[y+1][x] === 'E')
        if(!hasBeenVisited && (isMax1Bigger || isE)) possibleNewPositions.push([x, y+1])
    }

    if(x>=1) {
        const hasBeenVisited = (grid[y][x-1] === '/')
        const isMax1Bigger = (grid[y][x-1].charCodeAt() <= (grid[y][x].charCodeAt() + 1))
        const isE = (grid[y][x-1] === 'E')
        if(!hasBeenVisited && (isMax1Bigger || isE)) possibleNewPositions.push([x-1, y])
    }

    if(x<=grid[0].length-2) {
        const hasBeenVisited = (grid[y][x+1] === '/')
        const isMax1Bigger = (grid[y][x+1].charCodeAt() <= (grid[y][x].charCodeAt() + 1))
        const isE = (grid[y][x+1] === 'E')
        if(!hasBeenVisited && (isMax1Bigger || isE)) possibleNewPositions.push([x+1, y])
    }

    if(!possibleNewPositions) return Infinity

    const stepsFromHere = []
    for(const [newX, newY] of possibleNewPositions) {
        const gridCopy = structuredClone(grid)
        gridCopy[y][x] = '/'
        // console.log(findMinStepsAux(gridCopy, newX, newY))
        stepsFromHere.push(findMinStepsAux(gridCopy, newX, newY))
    }
    console.log("x", x, "y", y, "stepsFromHere", stepsFromHere)

    if(x===0 && y===0) return Math.min(...stepsFromHere)
    else return 1 + Math.min(...stepsFromHere)
}

const findMinSteps = grid => {
    grid[0][0] = 'a'
    return findMinStepsAux(grid, 0, 0)
}

const main = input => {
    const grid = parseInput(input)
    const minSteps = findMinSteps(grid)
    return minSteps
}

// console.log(main(`SE
// ab`))

console.log(main(`Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`))