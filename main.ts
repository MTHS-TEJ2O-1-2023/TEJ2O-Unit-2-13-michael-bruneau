/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Oct 2023
 * This program does loop
*/

// variables
let loopCounter: number = 4
let neopixelStrip: neopixel.Strip = null

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  loopCounter = 4

  while (loopCounter > -1) {
    basic.pause(500)
    basic.showNumber(loopCounter)
    loopCounter = loopCounter - 1
  }
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})