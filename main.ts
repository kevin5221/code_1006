for (let I = 0; I <= 4; I++) {
    led.plot(0, I)
    led.plot(4, I)
    led.plot(I, 0)
    led.plot(I, 4)
}
basic.pause(500)
basic.forever(function () {
	
})
