function doABarrelRoll (_3: number) {
    motors.largeBC.steer(0, 50, _3, MoveUnit.Rotations)
    pause(100)
}
sensors.touch1.onEvent(ButtonEvent.Pressed, function () {
    music.playSoundEffect(sounds.mechanicalHorn1)
})
brick.setStatusLight(StatusLight.Orange)
forever(function () {
    music.setVolume(100)
    music.playSoundEffect(sounds.communicationBravo)
})
