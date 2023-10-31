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
        loop_counter = loop_counter - 1
        np[0] = (255, 0, 0)
        np[1] = (255, 0, 0)
        np[2] = (255, 0, 0)
        np[3] = (255, 0, 0)

        while True:
            sleep(500)
            display.scroll(str(loop_counter))

            np[3 - loop_counter] = (0, 0, 0)
