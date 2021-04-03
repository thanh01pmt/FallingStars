let x = 0
let x1 = 1
let x2 = 2
let x3 = 3
let x4 = 4
let z = 255
let z1 = 255
let z2 = 255
let z3 = 255
let z4 = 255
let y = randint(-1, -10)
let y1 = randint(-1, -10)
let y2 = randint(-1, -10)
let y3 = randint(-1, -10)
let y4 = randint(-1, 10)
let time = 100
basic.forever(function () {
    if (y >= 10) {
        y = randint(-1, -10)
    } else {
        y = y + 1
    }
    if (y1 >= 10) {
        y1 = randint(-1, -10)
    } else {
        y1 = y1 + 1
    }
    if (y2 >= 10) {
        y2 = randint(-1, -10)
    } else {
        y2 = y2 + 1
    }
    if (y3 >= 10) {
        y3 = randint(-1, -10)
    } else {
        y3 = y3 + 1
    }
    if (y4 >= 10) {
        y4 = randint(-1, -10)
    } else {
        y4 = y4 + 1
    }
    led.plotBrightness(x4, y4, z4)
    led.plotBrightness(x4, y4 - 1, z4 - 180)
    led.plotBrightness(x4, y4 - 2, z4 - 212)
    led.plotBrightness(x4, y4 - 3, z4 - 240)
    led.plotBrightness(x4, y4 - 4, z4 - 255)
    led.plotBrightness(x3, y3, z3)
    led.plotBrightness(x3, y3 - 1, z3 - 180)
    led.plotBrightness(x3, y3 - 2, z3 - 212)
    led.plotBrightness(x3, y3 - 3, z3 - 240)
    led.plotBrightness(x3, y3 - 4, z3 - 255)
    led.plotBrightness(x2, y2, z2)
    led.plotBrightness(x2, y2 - 1, z2 - 180)
    led.plotBrightness(x2, y2 - 2, z2 - 212)
    led.plotBrightness(x2, y2 - 3, z2 - 240)
    led.plotBrightness(x2, y2 - 4, z2 - 255)
    led.plotBrightness(x1, y1, z1)
    led.plotBrightness(x1, y1 - 1, z1 - 180)
    led.plotBrightness(x1, y1 - 2, z1 - 212)
    led.plotBrightness(x1, y1 - 3, z1 - 240)
    led.plotBrightness(x1, y1 - 4, z1 - 255)
    led.plotBrightness(x, y, z)
    led.plotBrightness(x, y - 1, z - 180)
    led.plotBrightness(x, y - 2, z - 212)
    led.plotBrightness(x, y - 3, z - 240)
    led.plotBrightness(x, y - 4, z - 255)
    basic.pause(time)
})
basic.forever(function () {
	
})
