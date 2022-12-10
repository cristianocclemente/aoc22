const get_x_values = instructions => {
    let cycle = 1
    let x = 1
    let cycles_before_read_next_instruction = 0
    let amount_to_add = 0

    let x_values = []

    while(true) {
        if(cycles_before_read_next_instruction === 0) {
            x += amount_to_add
            const instruction = instructions.shift()
            if(!instruction) {
                x_values.push(x)
                break
            }
            if(instruction === "noop") {
                amount_to_add = 0
                cycles_before_read_next_instruction = 1
            }
            else if(instruction.match(/addx/)) {
                amount_to_add = parseInt(instruction.match(/-?\d+/)[0])
                cycles_before_read_next_instruction = 2
            }
        }
        x_values.push(x)
        cycle++
        cycles_before_read_next_instruction--
    }

    return x_values
}

const get_lit_pixels = x_values => {
    const lit_pixels = [[], [], [], [], [], []]
    for(cycle=1; cycle<=240; cycle++) {
        const drawing_pixel = (cycle-1) % 40
        const sprite = [x_values[cycle-1]-1, x_values[cycle-1], x_values[cycle-1]+1]
        if(sprite.includes(drawing_pixel)) lit_pixels[Math.floor(cycle / 40)].push(drawing_pixel)
    }
    return lit_pixels
}

const get_image = lit_pixels => {
    let image = ""

    for(row of lit_pixels) {
        for(i=0; i<=39; i++) {
            if(row.includes(i)) image += "# "
            else image += ". "
        }
        image += "\n"
    }
    return image
}

const main = input => {
    const instructions = input.split('\n')
    const x_values = get_x_values(instructions)
    const lit_pixels = get_lit_pixels(x_values)
    const image = get_image(lit_pixels)
    return image
}

console.log(main(`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`))

console.log(main(`noop
noop
noop
addx 6
addx -1
noop
addx 5
noop
noop
addx -12
addx 19
addx -1
noop
addx 4
addx -11
addx 16
noop
noop
addx 5
addx 3
addx -2
addx 4
noop
noop
noop
addx -37
noop
addx 3
addx 2
addx 5
addx 2
addx 10
addx -9
noop
addx 1
addx 4
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 3
addx -2
addx 2
addx 5
addx -40
addx 25
addx -22
addx 2
addx 5
addx 2
addx 3
addx -2
noop
addx 23
addx -18
addx 2
noop
noop
addx 7
noop
noop
addx 5
noop
noop
noop
addx 1
addx 2
addx 5
addx -40
addx 3
addx 8
addx -4
addx 1
addx 4
noop
noop
noop
addx -8
noop
addx 16
addx 2
addx 4
addx 1
noop
addx -17
addx 18
addx 2
addx 5
addx 2
addx 1
addx -11
addx -27
addx 17
addx -10
addx 3
addx -2
addx 2
addx 7
noop
addx -2
noop
addx 3
addx 2
noop
addx 3
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx -5
addx -2
addx -30
addx 14
addx -7
addx 22
addx -21
addx 2
addx 6
addx 2
addx -1
noop
addx 8
addx -3
noop
addx 5
addx 1
addx 4
noop
addx 3
addx -2
addx 2
addx -11
noop
noop
noop`))