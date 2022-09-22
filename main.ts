input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    save = num1
})
input.onButtonPressed(Button.B, function () {
    num1 += -1
})
input.onGesture(Gesture.Shake, function () {
    A = num1 + 9
    b = num1 - 9
    c = num1 ** (num1 / 4)
    D = 0
    E = 0
    F = 0
    G = 0
    H = 0
    I = 0
    J = 0
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let c = 0
let b = 0
let A = 0
let save = 0
let num1 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
