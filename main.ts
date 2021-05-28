input.onPinPressed(TouchPin.P2, function () {
    dør = dør * -1
})
let dør = 0
dør = 1
led.enable(false)
let strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (dør == 1) {
        servos.P1.setAngle(90)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (dør == -1) {
        servos.P1.setAngle(0)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
