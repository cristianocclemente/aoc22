const parseInput = input => {
    const blueprint = input.split('\n').map(bp => bp.match(/\d+/g).map(char => parseInt(char)))
    const blueprints = []
    for(const costs of blueprint) {
        blueprints.push({
            id: costs[0],
            ore: {
                ore: costs[1],
                clay: 0,
                obsidian: 0,
            },
            clay: {
                ore: costs[2],
                clay: 0,
                obsidian: 0,
            },
            obsidian: {
                ore: costs[3],
                clay: costs[4],
                obsidian: 0,
            },
            geode: {
                ore: costs[5],
                clay: 0,
                obsidian: costs[6],
            },
        })
    }
    return blueprints
}

const getMaxGeodesAux = (bp, inventory, robots, minute) => {
    if(minute === 25) return inventory.geodes
    const resourcesProduced = {ore: robots.ore, clay: robots.clay, obsidian: robots.obsidian, geodes: robots.geodes}
    const newInventory = {ore: inventory.ore + resourcesProduced.ore, clay: inventory.clay + resourcesProduced.clay, obsidian: inventory.obsidian + resourcesProduced.obsidian, geodes: inventory.geodes + resourcesProduced.geodes}
    // console.log(newInventory)
    return getMaxGeodesAux(bp, newInventory, robots, minute+1)
}

const getMaxGeodes = bp => {
    const emptyInventory = {ore: 0, clay: 0, obsidian: 0, geodes: 0}
    const initialRobots = {ore: 1, clay: 0, obsidian: 0, geodes: 0}
    return getMaxGeodesAux(bp, emptyInventory, initialRobots, 1)
}

const main = input => {
    const blueprints = parseInput(input)
    // console.log(blueprints)
    let sum = 0
    for(const bp of blueprints) {
        const maxGeodes = getMaxGeodes(bp)
        // console.log(bp.id, maxGeodes)
        sum += bp.id * maxGeodes
    }
    // console.log(sum)
    return sum
}

console.log(main(`Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`))