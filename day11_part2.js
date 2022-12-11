const parseInput = input => {
    const monkeysAsArrayOfStrings = input.split('\n\n').map(monkeyString => monkeyString.split('\n'))

    const monkeys = []

    for(monkeyAsArrayOfStrings of monkeysAsArrayOfStrings) {
        const monkey = {}
        monkey.items = monkeyAsArrayOfStrings[1].match(/\d+/g).map(string => parseInt(string))
        monkey.operator = monkeyAsArrayOfStrings[2].match(/[*+]/g)[0]
        monkey.operand = parseInt(monkeyAsArrayOfStrings[2].match(/[*+] \w+|\d+/g)[0].split(' ')[1]) || "old"
        monkey.divisor = parseInt(monkeyAsArrayOfStrings[3].match(/\d+/g)[0])
        monkey.monkey_true = parseInt(monkeyAsArrayOfStrings[4].match(/\d+/g)[0])
        monkey.monkey_false = parseInt(monkeyAsArrayOfStrings[5].match(/\d+/g)[0])
        monkeys.push(monkey)
    }

    return monkeys
}

const turn = (monkeys, m) => {
    let items_inspected = 0

    for(item = monkeys[m].items.shift(); item; item = monkeys[m].items.shift()) {
        items_inspected++
        const operand = (monkeys[m].operand === "old") ? item : monkeys[m].operand
        if(monkeys[m].operator === '+') item += operand
        else if(monkeys[m].operator === '*') item *= operand
        //item = Math.floor(item % monkeys[m].divisor)
        //if(item === 0) monkeys[monkeys[m].monkey_true].items.push(item)
        if(item % monkeys[m].divisor === 0) monkeys[monkeys[m].monkey_true].items.push(item)
        else monkeys[monkeys[m].monkey_false].items.push(item)
    }

    return items_inspected
}

const round = monkeys => {
    const monkey_to_items_inspected_round = new Array(monkeys.length).fill(0);

    for(m=0; m<=monkeys.length-1; m++)
        monkey_to_items_inspected_round[m] = turn(monkeys, m)

    return monkey_to_items_inspected_round
}

const main = input => {
    const monkeys = parseInput(input)

    const monkey_to_items_inspected = new Array(monkeys.length).fill(0)

    for(r=1; r<=10000; r++) {
        const monkey_to_items_inspected_round = round(monkeys)
        //console.log("r:", r, "monkeys:", monkeys)
        for(m=0; m<=monkeys.length-1; m++) monkey_to_items_inspected[m] += monkey_to_items_inspected_round[m]
        if(r === 1) {
          console.log("r:", r)
          console.log("monkey_to_items_inspected:", monkey_to_items_inspected)
          console.log("monkeys", monkeys)
        }
    }

    //console.log("monkey_to_items_inspected", monkey_to_items_inspected)
    const most_active_to_least_active = monkey_to_items_inspected.sort((a,b)=>b-a)
    return most_active_to_least_active[0] * most_active_to_least_active[1]
}

console.log(main(`Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`))

// console.log(main(`Monkey 0:
// Starting items: 93, 54, 69, 66, 71
// Operation: new = old * 3
// Test: divisible by 7
//   If true: throw to monkey 7
//   If false: throw to monkey 1

// Monkey 1:
// Starting items: 89, 51, 80, 66
// Operation: new = old * 17
// Test: divisible by 19
//   If true: throw to monkey 5
//   If false: throw to monkey 7

// Monkey 2:
// Starting items: 90, 92, 63, 91, 96, 63, 64
// Operation: new = old + 1
// Test: divisible by 13
//   If true: throw to monkey 4
//   If false: throw to monkey 3

// Monkey 3:
// Starting items: 65, 77
// Operation: new = old + 2
// Test: divisible by 3
//   If true: throw to monkey 4
//   If false: throw to monkey 6

// Monkey 4:
// Starting items: 76, 68, 94
// Operation: new = old * old
// Test: divisible by 2
//   If true: throw to monkey 0
//   If false: throw to monkey 6

// Monkey 5:
// Starting items: 86, 65, 66, 97, 73, 83
// Operation: new = old + 8
// Test: divisible by 11
//   If true: throw to monkey 2
//   If false: throw to monkey 3

// Monkey 6:
// Starting items: 78
// Operation: new = old + 6
// Test: divisible by 17
//   If true: throw to monkey 0
//   If false: throw to monkey 1

// Monkey 7:
// Starting items: 89, 57, 59, 61, 87, 55, 55, 88
// Operation: new = old + 7
// Test: divisible by 5
//   If true: throw to monkey 2
//   If false: throw to monkey 5`))