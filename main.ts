function doABarrelRoll (_3: number) {
    motors.largeBC.steer(0, 50, _3, MoveUnit.Rotations)
}
brick.setStatusLight(StatusLight.Orange)
forever(function () {
    music.setVolume(100)
    music.playSoundEffect(sounds.communicationBravo)
})
