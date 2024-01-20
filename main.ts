input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
basic.showIcon(IconNames.Angry)
