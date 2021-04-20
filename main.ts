scene.setBackgroundColor(6)
let Bob = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 5 5 . . . . 
    . . 5 . . . . . . 5 f 5 . . . . 
    . . . 5 . . . . . 5 5 5 . . . . 
    . . . . 5 . . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 . . 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Bob.setPosition(24, 86)
Bob.say("HI")
let Steave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
Steave.setPosition(129, 86)
pause(2000)
Steave.say("Hello!")
pause(2000)
Steave.say("How are you?!", 1000)
pause(1000)
Bob.say("Good what about you?", 2000)
pause(2000)
Steave.say("Good!")
pause(2000)
Steave.say("what are you doing here?", 2000)
pause(2000)
Bob.say("Just about to leave", 1000)
pause(2000)
Steave.say("Oh ok nice meeting you", 2000)
pause(2000)
Bob.say("ya you too", 2000)
pause(2000)
Steave.say("Bye", 500)
Steave.setPosition(160, 120)
Bob.setPosition(0, 120)
scene.setBackgroundColor(15)
