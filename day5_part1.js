const parseInput = input => {
    const lines = input.split('\n')
    const indexOfEmptyLine = lines.findIndex(line => line==='')

    let stacks = []
    const stacksRaw = lines.slice(0, indexOfEmptyLine)
    for(stackRaw of stacksRaw)
        stacks = [...stacks, stackRaw.split('')]

    let commands = []
    const commandsRaw = lines.slice(indexOfEmptyLine+1)
    for(commandRaw of commandsRaw)
        commands = [...commands, commandRaw.match(/\d+/g).map(char => parseInt(char))]

    return [stacks, commands]
}

const applyCommand = (stacks, command) => {
    const [numberCrates, origin, destination] = command
    for(i=1; i<=numberCrates; i++) {
        originStack = stacks[origin-1]
        const crateBeingMoved = originStack[originStack.length-1]
        originStack.pop()
        stacks[destination-1] = [...stacks[destination-1], crateBeingMoved]
    }
    return stacks
}

const applyCommands = (stacks, commands) => {
    let currentStacks = stacks
    for(let command of commands)
        currentStacks = applyCommand(currentStacks, command)
    return currentStacks
}

const toMessage = stacks => {
    let message = ""
    for(stack of stacks)
        message += stack[stack.length-1]
    return message 
}

const main = input => {
    const [stacks, commands] = parseInput(input)
    const finalStacks = applyCommands(stacks, commands)
    const message = toMessage(finalStacks)
    return message
}

module.exports = {
    parseInput,
    applyCommand,
    applyCommands,
    toMessage,
    main
}