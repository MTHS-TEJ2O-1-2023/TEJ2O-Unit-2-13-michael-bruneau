/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Oct 2023
 * This program does loop
*/

// variables
let loopCounter: number = 4

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  loopCounter = 4

  while (loopCounter > 0) {
    basic.pause(500)
    basic.showNumber(loopCounter)
    loopCounter = loopCounter - 1
  }
})