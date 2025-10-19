basic.forever(function () {
    basic.pause(100)
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.OBSTACLE)) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        basic.pause(1000)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    }
})
