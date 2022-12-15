const parseInput = input => {
    const linesAsArrayOfNumbers = input.split('\n').map(line => line.match(/-?\d+/g).map(string => parseInt(string)))
    const sensors = []
    const beacons = []
    for(const [s_x, s_y, b_x, b_y] of linesAsArrayOfNumbers) {
        sensors.push([s_x, s_y])
        beacons.push([b_x, b_y])
    }
    return [sensors, beacons]
} 

const printPretty = (sensors, beacons, excluded) => {
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for(const [x, y] of [...sensors, ...beacons]) {
        if(x < minX) minX=x
        if(x > maxX) maxX=x
        if(y < minY) minY=y
        if(y > maxY) maxY=y
    }
    let image = ""
    for(let y=minY; y<=maxY; y++) {
        for(let x=minX; x<=maxX; x++) {
            if(sensors.map(s => s.toString()).includes([x, y].toString())) image += 'S'
            else if(beacons.map(b => b.toString()).includes([x, y].toString())) image += 'B'
            else if(excluded.map(e => e.toString()).includes([x, y].toString())) image += '#'
            else image += '.'
        }
        image += '\n'
    }
    console.log(image)
}

const getPoints = (point, distance) => {
    const points = []
    const [p_x, p_y] = point
    for(let x=-distance; x<=distance; x++) {
        const y = distance-Math.abs(x)
        points.push([p_x+x, p_y+y], [p_x+x, p_y-y])
    }
    return points
}

const getExcluded = (beacons, sensor) => {
    const excluded = []
    for(let d=1;; d++) {
        const points = getPoints(sensor, d)
        excluded.push(...points)
        if(beacons.map(beacon => beacon.toString()).some(beacon => points.map(point => point.toString()).includes(beacon))) break
    }
    return excluded
}

const main = (input, targetY) => {
    const [sensors, beacons] = parseInput(input)

    const excluded = []
    for(const sensor of sensors) excluded.push(...getExcluded(beacons, sensor))

    const excludedPositionsY = new Set()
    for(const [x, y] of excluded) if(y===targetY && !sensors.map(s => s.toString()).includes([x, y].toString()) && !beacons.map(b => b.toString()).includes([x, y].toString())) excludedPositionsY.add([x,y].toString())
    return excludedPositionsY.size
}

console.log(main(`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`, 10))

console.log(main(`Sensor at x=1363026, y=2928920: closest beacon is at x=1571469, y=3023534
Sensor at x=2744178, y=3005943: closest beacon is at x=3091714, y=3106683
Sensor at x=223983, y=2437431: closest beacon is at x=-278961, y=3326224
Sensor at x=2454616, y=2576344: closest beacon is at x=2885998, y=2387754
Sensor at x=1551436, y=29248: closest beacon is at x=1865296, y=-1279130
Sensor at x=2997120, y=2493979: closest beacon is at x=2885998, y=2387754
Sensor at x=1588355, y=3153332: closest beacon is at x=1571469, y=3023534
Sensor at x=3539081, y=3302128: closest beacon is at x=3309042, y=3583067
Sensor at x=3973905, y=60392: closest beacon is at x=3515381, y=-806927
Sensor at x=3305001, y=3120691: closest beacon is at x=3091714, y=3106683
Sensor at x=3859262, y=2668840: closest beacon is at x=3574747, y=2000000
Sensor at x=2475557, y=3997856: closest beacon is at x=2364210, y=4052453
Sensor at x=2775306, y=3668540: closest beacon is at x=3309042, y=3583067
Sensor at x=3018235, y=2285225: closest beacon is at x=2885998, y=2387754
Sensor at x=3033163, y=3294719: closest beacon is at x=3091714, y=3106683
Sensor at x=3079956, y=3215569: closest beacon is at x=3091714, y=3106683
Sensor at x=3994355, y=1831842: closest beacon is at x=3574747, y=2000000
Sensor at x=1741021, y=3231978: closest beacon is at x=1571469, y=3023534
Sensor at x=1873455, y=3917294: closest beacon is at x=2364210, y=4052453
Sensor at x=3128140, y=2938277: closest beacon is at x=3091714, y=3106683
Sensor at x=732217, y=3603298: closest beacon is at x=-278961, y=3326224
Sensor at x=3884431, y=3834735: closest beacon is at x=3309042, y=3583067
Sensor at x=3679358, y=1029949: closest beacon is at x=3574747, y=2000000
Sensor at x=2260133, y=3563353: closest beacon is at x=2364210, y=4052453
Sensor at x=60149, y=3320681: closest beacon is at x=-278961, y=3326224
Sensor at x=3132535, y=2405693: closest beacon is at x=2885998, y=2387754
Sensor at x=3028313, y=2829410: closest beacon is at x=3091714, y=3106683
Sensor at x=3142423, y=3921417: closest beacon is at x=3309042, y=3583067
Sensor at x=2636416, y=939525: closest beacon is at x=2885998, y=2387754
Sensor at x=524530, y=681397: closest beacon is at x=-1031499, y=681463
Sensor at x=3155000, y=1666362: closest beacon is at x=3574747, y=2000000
Sensor at x=2169350, y=3040469: closest beacon is at x=1571469, y=3023534
Sensor at x=1663350, y=1595182: closest beacon is at x=1571469, y=3023534
Sensor at x=3311582, y=3386773: closest beacon is at x=3309042, y=3583067`, 2000000))