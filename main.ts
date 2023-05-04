basic.forever(function () {
    if (input.soundLevel() >= 0 && input.soundLevel() <= 119) {
        basic.showIcon(IconNames.Happy)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
    }
    if (input.soundLevel() >= 120 && input.soundLevel() <= 180) {
        basic.showIcon(IconNames.Surprised)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
    }
    if (input.soundLevel() >= 181 && input.soundLevel() <= 255) {
        basic.showIcon(IconNames.Sad)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, true)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
