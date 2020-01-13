namespace SpriteKind {
    export const move1 = SpriteKind.create()
    export const homing = SpriteKind.create()
    export const boom = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.boom, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player2.changeScoreBy(Math.randomRange(-1, -3))
    sprite.destroy()
    if (info.player2.score() <= 0) {
        boss.destroy(effects.disintegrate, 1000)
        game.over(true)
    }
})
// lava
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    if (info.score() <= 5) {
        scene.placeOnRandomTile(mySprite, 4)
        info.changeLifeBy(-1)
        info.startCountdown(10)
    } else {
        info.changeLifeBy(-1)
    }
})
scene.onHitTile(SpriteKind.move1, 9, function (sprite) {
    move.setVelocity(0, -100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy <= 110 && mySprite.vx <= 110) {
        controller.moveSprite(mySprite, 300, 300)
        info.startCountdown(0.1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 f f f f 2 . . . . . 
. . . . 2 f 5 5 5 5 f 2 . . . . 
. . . 2 f 5 5 5 5 5 5 f 2 . . . 
. . . 2 f 5 f 5 5 f 5 f 2 . . . 
. . . 2 f 5 5 5 5 5 5 f 2 . . . 
. . . . 2 f 5 f f 5 f 2 . . . . 
. . . . 2 f 5 5 5 5 f 2 . . . . 
. . . . . 2 f f f f 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 0, 0)
    scene.placeOnRandomTile(sprite, 1)
})
function tiles2 () {
    scene.setTile(15, img`
e b e e e e e e e b e e e e e e 
e b e e e e e e e b e e e e e e 
e b e e e e e e e b e e e e e e 
b b b b b b b b b b b b b b b b 
e e e e e b e e e e e e e b e e 
e e e e e b e e e e e e e b e e 
e e e e e b e e e e e e e b e e 
b b b b b b b b b b b b b b b b 
e b e e e e e e e b e e e e e e 
e b e e e e e e e b e e e e e e 
e b e e e e e e e b e e e e e e 
b b b b b b b b b b b b b b b b 
e e e e e b e e e e e e e b e e 
e e e e e b e e e e e e e b e e 
e e e e e b e e e e e e e b e e 
b b b b b b b b b b b b b b b b 
`, true)
    scene.setTile(9, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
    scene.setTile(11, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b c b b b b b b b b c b b c 
c d d c b b b b b b b b c d d c 
c d d c 4 b b 5 5 b b 4 c d d c 
c d d c b e 5 b b 5 e b c d d c 
c d d c b e 4 5 5 4 e b c d d c 
c b b c 4 b 5 4 f 5 b 4 c b b c 
c d d c b b 4 4 e 4 b b c d d c 
c d d c b b e 4 4 e b b c d d c 
c d d c b b b e e b b b c d d c 
c d d c b b b b b b b b c d d c 
a c c c c c c c c c c c c c c a 
`, true)
    scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(8, img`
b b b b b b b b b b b b b b b b 
b c b e 4 4 4 4 4 4 4 4 e b c b 
b b e 4 4 4 4 4 4 4 4 4 4 e b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
b b d 4 4 4 4 4 4 4 4 4 4 d b b 
b b d 4 4 4 4 4 4 4 4 4 4 d b b 
b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
b b 4 4 d d d d d d d d 4 4 b b 
b b c 4 4 4 4 4 4 4 4 4 4 c b b 
b b b c c c c c c c c c c b b b 
b c b b b b b b b b b b b b c b 
b b b b b b b b b b b b b b b b 
`, true)
    // boss
    scene.setTile(7, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
}
// goal
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    info.changeScoreBy(1)
    levels()
})
// starttime
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    info.startCountdown(1)
})
// goaldoor
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    scene.setTile(11, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b b f f f f f f f f b b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c b b c f f f f f f f f c b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f c c f b d d c 
c d d b f c c c f f f f b d d c 
c d d b c c c f f c c c b d d c 
a c c a c c c c c c c c a c c a 
`, false)
    scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
})
function create () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 f 1 1 f 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.ay = 350
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 70, 0)
    // change this value to set the level
    info.setScore(6)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 6) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, 100)
        projectile.follow(boss, 120)
        projectile.setKind(SpriteKind.boom)
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    if (info.score() == 3) {
        mySprite.vy = -300
        info.startCountdown(6)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.move1, function (sprite, otherSprite) {
    mySprite.setVelocity(0, -100)
    info.startCountdown(3)
})
scene.onHitTile(SpriteKind.move1, 15, function (sprite) {
    move.setVelocity(0, 100)
})
function levels () {
    info.changeLifeBy(1)
    if (info.score() == 1) {
        scene.setTileMap(img`
f 9 9 5 9 f 9 9 9 9 9 9 9 9 9 f 
f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 9 9 9 9 9 9 9 9 f 9 9 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 
f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 
f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 
f 1 1 f 1 1 1 1 1 1 1 1 1 1 b 8 
f 4 f 9 9 9 9 9 9 9 9 9 9 9 f f 
`)
        scene.placeOnRandomTile(mySprite, 4)
    }
    if (info.score() == 2) {
        scene.setTileMap(img`
1 5 1 1 f 1 f 1 f 1 f 1 9 1 1 1 
9 f 1 1 1 1 1 1 1 1 1 1 9 1 1 1 
1 4 1 1 1 1 1 1 1 1 1 1 9 1 1 1 
1 f 1 1 1 9 1 9 1 1 2 1 9 1 1 1 
9 1 9 f f 1 f 1 f 1 1 1 9 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 
1 1 1 1 1 1 1 1 f 1 1 1 9 1 1 1 
1 1 1 1 1 1 1 9 1 1 1 1 9 1 1 1 
1 1 1 1 1 1 f 1 1 1 1 1 9 1 1 1 
1 1 1 1 1 9 1 1 1 f 9 9 9 1 1 1 
1 1 1 1 f 1 1 1 9 1 f 1 9 1 1 1 
1 1 1 9 1 1 1 f 1 1 1 1 9 9 9 9 
1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 
1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 f f f f 9 f f f 9 f f 1 1 8 
`)
        scene.placeOnRandomTile(mySprite, 4)
        for (let value of scene.getTilesByType(2)) {
            move = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.move1)
            move.setVelocity(0, 100)
            scene.place(value, move)
        }
        scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
        scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    }
    if (info.score() == 3) {
        move.destroy()
        scene.setTileMap(img`
8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 f 1 1 1 1 1 1 1 1 1 1 1 
1 9 9 9 9 9 1 f 9 9 9 9 1 1 1 1 
1 1 1 9 9 9 9 9 9 f f f f 1 1 1 
1 1 1 1 9 9 9 9 1 1 1 1 9 9 f 5 
1 1 1 1 1 f f 1 1 1 1 1 1 9 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 9 f 1 
1 1 9 1 1 1 1 1 1 1 1 1 1 f 1 1 
1 1 9 1 1 1 1 1 1 9 9 1 1 1 1 f 
1 1 9 9 1 1 1 1 9 9 9 1 1 1 1 1 
1 1 9 9 1 1 1 1 9 9 9 9 1 1 1 1 
1 1 9 9 1 1 1 9 9 9 9 9 1 1 1 1 
1 1 9 9 9 1 1 9 9 9 9 9 1 1 1 1 
4 2 9 9 9 2 1 9 9 9 9 9 9 2 1 1 
`)
        scene.placeOnRandomTile(mySprite, 4)
        controller.moveSprite(mySprite, 100, 0)
        scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
        scene.setTile(2, img`
b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 
b b 5 5 5 5 5 5 5 5 5 5 5 5 b b 
b b 5 5 5 5 5 5 5 5 5 5 5 5 b b 
b b b 5 5 5 5 5 5 5 5 5 5 b b b 
b b b 5 5 5 5 5 5 5 5 5 5 b b b 
b b b b b 5 b b b b 5 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
    }
    if (info.score() == 4) {
        scene.setTileMap(img`
5 1 f f f f f f f f 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 f 1 1 f f f 1 f 
f f f 1 f f f 1 f f f f 1 f 1 f 
1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 
1 f f f 1 f 1 f f f 1 f f f f f 
1 f 1 1 1 f 1 1 1 f 1 1 f 1 1 1 
1 f 1 f f f f f 1 f f f f 1 f b 
1 f f f 1 1 1 1 1 1 1 1 f 1 f 8 
1 1 1 1 1 f 1 f f f f 1 f 1 f f 
1 f f f 1 1 1 f 1 1 1 1 f 1 1 1 
1 f 1 f f 1 f f 1 f f 1 f f f 1 
f f 1 1 1 1 1 1 1 f 1 1 1 1 f 1 
1 f 1 f 1 f f f f f 1 f f f f 1 
1 1 1 f 1 f 1 1 1 1 1 1 1 f 1 1 
f f f f 1 f 1 f f f f f 1 f 1 f 
4 1 1 1 1 f 1 1 1 f 1 1 1 1 1 f 
`)
        scene.placeOnRandomTile(mySprite, 4)
        scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
        scene.setTile(11, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b c b b b b b b b b c b b c 
c d d c b b b b b b b b c d d c 
c d d c 4 b b 5 5 b b 4 c d d c 
c d d c b e 5 b b 5 e b c d d c 
c d d c b e 4 5 5 4 e b c d d c 
c b b c 4 b 5 4 f 5 b 4 c b b c 
c d d c b b 4 4 e 4 b b c d d c 
c d d c b b e 4 4 e b b c d d c 
c d d c b b b e e b b b c d d c 
c d d c b b b b b b b b c d d c 
a c c c c c c c c c c c c c c a 
`, true)
        controller.moveSprite(mySprite, 80, 80)
    }
    if (info.score() == 5) {
        scene.setTileMap(img`
8 b 1 1 1 1 f f f 1 f f f f f 1 
f f 1 f f 1 1 1 1 1 1 1 1 f 1 1 
4 f 1 1 f 1 f f f f f f 1 f 1 f 
1 f 1 f f 1 f 1 1 1 1 1 1 1 1 f 
1 1 1 f 1 1 f 1 f f f 1 f f 1 1 
f f f f f 1 f 1 f 1 1 1 1 f f 1 
f f 1 f 1 1 f f f 1 f f f f f 1 
f 1 1 1 1 f f 1 f 1 1 1 f 1 1 1 
f 1 f f 1 f f 1 f f f 1 f f f f 
f 1 1 f 1 1 f 1 1 f f 1 1 1 1 1 
f 1 f f f 1 1 f 1 1 f f 1 f f 1 
f 1 1 f 1 1 f f f f f 1 f f 1 1 
f f f f 1 f 5 1 f 1 1 1 1 1 1 f 
1 1 1 f 1 f 1 f f f f f 1 f f f 
1 f f f 1 f 1 f 1 1 1 f 1 f 1 1 
1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 
`)
        scene.placeOnRandomTile(mySprite, 4)
        scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
        controller.moveSprite(mySprite, 80, 80)
        scene.setTile(11, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b c b b b b b b b b c b b c 
c d d c b b b b b b b b c d d c 
c d d c 4 b b 5 5 b b 4 c d d c 
c d d c b e 5 b b 5 e b c d d c 
c d d c b e 4 5 5 4 e b c d d c 
c b b c 4 b 5 4 f 5 b 4 c b b c 
c d d c b b 4 4 e 4 b b c d d c 
c d d c b b e 4 4 e b b c d d c 
c d d c b b b e e b b b c d d c 
c d d c b b b b b b b b c d d c 
a c c c c c c c c c c c c c c a 
`, true)
    }
    if (info.score() == 6) {
        game.splash("boss hp displayed", "top right corner")
        game.splash("you can now shoot with", "space bar/A")
        game.splash("press keyboard X", "for sudden speed boost")
        scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 1 1 1 e 1 1 e 1 1 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 e e e e e e e e 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 1 e e 7 e e e 1 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 e e e e e e e e 1 9 9 9 
9 9 9 1 1 e e e e e e 1 1 9 9 9 
9 9 9 1 1 1 e 1 1 e 1 4 1 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
        mySprite.ay = 0
        scene.placeOnRandomTile(mySprite, 4)
        controller.moveSprite(mySprite, 110, 110)
        for (let value2 of scene.getTilesByType(7)) {
            boss = sprites.create(img`
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 f f f f f f f f f f 1 1 1 
1 1 1 f 1 f 1 1 1 1 f 1 f 1 1 1 
1 1 1 f f 1 1 f f 1 1 f f 1 1 1 
1 1 1 f 1 1 f 6 6 f 1 1 f 1 1 1 
1 1 1 f 1 f 6 6 6 6 f 1 f 1 1 1 
1 1 1 f 1 f 6 6 6 6 f 1 f 1 1 1 
1 1 1 f 1 1 f 6 6 f 1 1 f 1 1 1 
1 1 1 f f 1 1 f f 1 1 f f 1 1 1 
1 1 1 f 1 f 1 1 1 1 f 1 f 1 1 1 
1 1 1 f f f f f f f f f f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
`, SpriteKind.Enemy)
            scene.place(value2, boss)
        }
        // boss hitpoint
        info.player2.setScore(200)
        info.player1.setLife(30)
        scene.setTile(14, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    }
}
info.onCountdownEnd(function () {
    if (info.score() < 6) {
        info.changeLifeBy(-1)
    } else {
        controller.moveSprite(mySprite, 110, 110)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 f 1 1 f 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -170
    }
})
info.player1.onLifeZero(function () {
    game.over(false)
    if (true) {
        game.splash("try again")
        info.setScore(6)
        levels()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    sprite.destroy()
})
let projectile: Sprite = null
let projectile2: Sprite = null
let move: Sprite = null
let mySprite: Sprite = null
let boss: Sprite = null
game.splash("levels=score")
create()
tiles2()
levels()
// play around with this number
game.onUpdateInterval(1500, function () {
    if (info.score() == 6) {
        if (info.player2.score() > 50) {
            for (let index = 0; index < 2; index++) {
                scene.placeOnRandomTile(boss, 14)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 0, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -50, 50)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 0, -100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 50, -50)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, -100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, 0)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 50, 50)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, 0)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -50, -50)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, -100)
            }
        } else {
            boss.follow(mySprite, 105)
            boss.setImage(img`
2 c c c c c c c c c c c c c c 2 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c f f f f f f f f f f c c c 
c c c f 1 f 1 1 1 1 f 1 f c c c 
c c c f f 1 1 f f 1 1 f f c c c 
c c c f 1 1 f 2 2 f 1 1 f c c c 
c c c f 1 f 2 2 2 2 f 1 f c c c 
c c c f 1 f 2 2 2 2 f 1 f c c c 
c c c f 1 1 f 2 2 f 1 1 f c c c 
c c c f f 1 1 f f 1 1 f f c c c 
c c c f 1 f 1 1 1 1 f 1 f c c c 
c c c f f f f f f f f f f c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
2 c c c c c c c c c c c c c c 2 
`)
            scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 1 1 1 1 9 1 9 9 9 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 1 1 1 1 7 1 1 1 1 9 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 1 9 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
            for (let index = 0; index < 3; index++) {
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 0, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 0, -100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, -100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, 100)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, 100, 0)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, 0)
                projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f 2 2 2 2 2 2 2 2 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, -100, -100)
            }
        }
    }
})
game.onUpdate(function () {
    if (info.player2.score() > 47 && info.player2.score() < 51) {
        info.setLife(15)
        info.player2.setScore(47)
    }
})
