"""
Created by: Michael B
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

# variables
loop_counter = 4

# setup
display.show(Image.HAPPY)
sleep(500)
display.clear()
np = neopixel.NeoPixel(pin16, 5)
np[0] = (0, 0, 0)
np[1] = (0, 0, 0)
np[2] = (0, 0, 0)
np[3] = (0, 0, 0)
np.show()

# loop
while True:
    if button_a.is_pressed():
        display.clear()
        np[0] = (255, 0, 0)
        np[1] = (255, 0, 0)
        np[2] = (255, 0, 0)
        np[3] = (255, 0, 0)
        np.show()

        # if loop_counter greater than -1 loop code
        while loop_counter > -1:
            sleep(500)

            # count from 4 to 0
            display.scroll(str(loop_counter))

            # turn off neopixel
            np[(3 - loop_counter)] = (0, 0, 0)
            np.show()

            # count down
            loop_counter = loop_counter - 1

        display.clear()
        display.show(Image.HAPPY)
