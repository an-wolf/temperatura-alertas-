basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() <= 25) {
        basic.showString("Temp.baja")
        basic.showArrow(ArrowNames.South)
    } else if (input.temperature() >= 35) {
        basic.showString("Temp.Alta")
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showString("Temp.normal")
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
