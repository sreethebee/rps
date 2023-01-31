input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    PA += 1
    Rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Ties += 1
    Rounds += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . . #
        # # # # .
        `)
    PB += 1
    Rounds += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function updatescore () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Want to play Rock Paper Scissors?")
    basic.pause(2000)
    updatescore()
}
let PB = 0
let Ties = 0
let Rounds = 0
let PA = 0
reset()
