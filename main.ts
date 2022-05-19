let pacman = game.createSprite(2, 2)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
pacman.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
})
basic.forever(function () {
    basic.pause(400)
    if (input.acceleration(Dimension.X) > 200) {
        pacman.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pacman.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
    }
})
basic.forever(function () {
    if (pacman.isTouching(janaria)) {
        soundExpression.spring.play()
        game.addScore(1)
        janaria.delete()
        mamua = game.createSprite(randint(0, 4), randint(0, 4))
        janaria.set(LedSpriteProperty.Brightness, 10)
    }
    if (pacman.isTouching(mamua)) {
        soundExpression.giggle.play()
        game.gameOver()
    }
})
