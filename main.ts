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
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  loopCounter = 4
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

  // loop
  while (loopCounter > -1) {
    basic.pause(500)

    // counting from 4 to 0
    basic.showNumber(loopCounter)

    // turn off neopixels
    neopixelStrip.setPixelColor((3 - loopCounter), neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    // count down
    loopCounter = loopCounter - 1
  }
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
