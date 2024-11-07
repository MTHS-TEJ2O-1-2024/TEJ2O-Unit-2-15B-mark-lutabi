/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark lutabi
 * Created on: November,6
 * This program ...
*/


// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let movement = 0

// setup
basic.showIcon(IconNames.Happy)

// when "A" is pressed, the pixels move around the perimeter of the Micro:bit
input.onButtonPressed(Button.A, function () {

    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    basic.pause(500)

    // loop pixel to move around the Micro:bit
    while (loopCounter < 4) {
        movement = 0
        while (movement < 4) {
            sprite.move(1)
            basic.pause(500)
            movement++
        }
        sprite.turn(Direction.Right, 90)
        loopCounter++
    }

    // delete sprite and show happy face at the end
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

