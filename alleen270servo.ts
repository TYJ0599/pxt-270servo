/**
 * Blocks for driving the Kitronik Simple Servo Control Board
 */
//% weight=100 color=#00A654 icon="\uf013" block="Servo"
//% groups='["270 Servo", "360 Servo"]'

namespace kitronik_simple_servo {

    /**
     * Selection of the servo to drive
     */
    export enum ServoChoice {
        //% block="1"
        servo0,
        //% block="2"
        servo1,
        //% block="3"
        servo2,
        //% block="4"
        servo3,
        //% block="5"
        servo4,
        //% block="6"
        servo5,
        //% block="7"
        servo6,
        //% block="8"
        servo7,
        //% block="9"
        servo8,
        //% block="10"
        servo9,
        //% block="11"
        servo10,
        //% block="12"
        servo11,
        //% block="13"
        servo12,
        //% block="14"
        servo13,
        //% block="15"
        servo14,
        //% block="16"
        servo15,
        //% block="17"
        servo16
    }

    /**
     * Selection of direction to turn for continuous servos
     */
    export enum ServoDirection {
        //% block="vooruit"
        CCW,
        //% block="achteruit"
        CW
    }

    /**
     * Global variables to set the servo pins for each servo 
     */
    let servo0Pin = AnalogPin.P0
    let servo1Pin = AnalogPin.P1
    let servo2Pin = AnalogPin.P2
    let servo3Pin = AnalogPin.P3
    let servo4Pin = AnalogPin.P4
    let servo5Pin = AnalogPin.P5
    let servo6Pin = AnalogPin.P6
    let servo7Pin = AnalogPin.P7
    let servo8Pin = AnalogPin.P8
    let servo9Pin = AnalogPin.P9
    let servo10Pin = AnalogPin.P10
    let servo11Pin = AnalogPin.P11
    let servo12Pin = AnalogPin.P12
    let servo13Pin = AnalogPin.P13
    let servo14Pin = AnalogPin.P14
    let servo15Pin = AnalogPin.P15
    let servo16Pin = AnalogPin.P16

    /**
     * Turn the selected servo to the angle set in degrees
     * @param servoSelection is the selection of the servo to control
     * @param degrees is the position which the servo is set to
     */
    //% group="270 Servo"
    //% blockId=kitronik_simple_servo_angle
    //% block="zet servo %servoSelection op hoek van %degrees graden"
    //% color=#00A654
    //% degrees.min=0 degrees.max=270
    //% degrees.defl=135
    //% weight=100 blockGap=8
    export function setServoAngle270(servoSelection: ServoChoice, degrees: number) {
        if (degrees > 270) degrees = 270
        if (degrees < 0) degrees = 0

        degrees = (degrees / 270) * 180

        if (servoSelection == ServoChoice.servo0) {
            pins.servoWritePin(servo0Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo1) {
            pins.servoWritePin(servo1Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo2) {
            pins.servoWritePin(servo2Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo3) {
            pins.servoWritePin(servo3Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo4) {
            pins.servoWritePin(servo4Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo5) {
            pins.servoWritePin(servo5Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo6) {
            pins.servoWritePin(servo6Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo7) {
            pins.servoWritePin(servo7Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo8) {
            pins.servoWritePin(servo8Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo9) {
            pins.servoWritePin(servo9Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo10) {
            pins.servoWritePin(servo10Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo11) {
            pins.servoWritePin(servo11Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo12) {
            pins.servoWritePin(servo12Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo13) {
            pins.servoWritePin(servo13Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo14) {
            pins.servoWritePin(servo14Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo15) {
            pins.servoWritePin(servo15Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo16) {
            pins.servoWritePin(servo16Pin, degrees)
        }
    }


    /**
     * Turn the selected servo back to a neutral position at 135 degrees
     * @param servoSelection is the selection of the servo to control
     */
    //% group="270 Servo"
    //% blockId=kitronik_simple_servo_neutral
    //% block="zet servo %servoSelection in het midden"
    //% color=#00A654
    //% weight=90 blockGap=8
    export function setServoNeutral(servoSelection: ServoChoice) {
        if (servoSelection == ServoChoice.servo0) {
            pins.servoWritePin(servo0Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo1) {
            pins.servoWritePin(servo1Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo2) {
            pins.servoWritePin(servo2Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo3) {
            pins.servoWritePin(servo3Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo4) {
            pins.servoWritePin(servo4Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo5) {
            pins.servoWritePin(servo5Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo6) {
            pins.servoWritePin(servo6Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo7) {
            pins.servoWritePin(servo7Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo8) {
            pins.servoWritePin(servo8Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo9) {
            pins.servoWritePin(servo9Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo10) {
            pins.servoWritePin(servo10Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo11) {
            pins.servoWritePin(servo11Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo12) {
            pins.servoWritePin(servo12Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo13) {
            pins.servoWritePin(servo13Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo14) {
            pins.servoWritePin(servo14Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo15) {
            pins.servoWritePin(servo15Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo16) {
            pins.servoWritePin(servo16Pin, 90)
        }
    }

    /**
     * For a continuous rotation servo, set the rotation direction and the percentage speed (0 to 100%)
     * @param servoSelection is the selection of the servo to control
     * @param direction is the choice direction for the servo to move either clockwise or counter-clockwise
     * @param percentSpeed is the percentage of speed between neutral position and full end point
     */
    //% group="360 Servo"
    //% blockId=kitronik_simple_servo_run_percentage
    //% block="laat servomotor %servoSelection %direction draaien met snelheid %percentSpeed \\%"
    //% percentSpeed.min=0 percentSpeed.max=100
    //% percentSpeed.defl=50
    //% color=#00A654
    //% weight=80 blockGap=8
    export function servoRunPercentage(servoSelection: ServoChoice, direction: ServoDirection, percentSpeed: number) {
        if (percentSpeed > 100) percentSpeed = 100
        if (percentSpeed < 0) percentSpeed = 0

        let speed = 90
        if (direction == ServoDirection.CW) {
            speed = Math.round(Math.map(percentSpeed, 0, 100, 90, 180))
        }
        else if (direction == ServoDirection.CCW) {
            speed = Math.round(Math.map(percentSpeed, 0, 100, 90, 0))
        }
      
        if (servoSelection == ServoChoice.servo0) {
            pins.servoWritePin(servo0Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo1) {
            pins.servoWritePin(servo1Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo2) {
            pins.servoWritePin(servo2Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo3) {
            pins.servoWritePin(servo3Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo4) {
            pins.servoWritePin(servo4Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo5) {
            pins.servoWritePin(servo5Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo6) {
            pins.servoWritePin(servo6Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo7) {
            pins.servoWritePin(servo7Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo8) {
            pins.servoWritePin(servo8Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo9) {
            pins.servoWritePin(servo9Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo10) {
            pins.servoWritePin(servo10Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo11) {
            pins.servoWritePin(servo11Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo12) {
            pins.servoWritePin(servo12Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo13) {
            pins.servoWritePin(servo13Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo14) {
            pins.servoWritePin(servo14Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo15) {
            pins.servoWritePin(servo15Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo16) {
            pins.servoWritePin(servo16Pin, speed)
        }
    }

    /**
     * Stop the selected servo moving
     * @param servoSelection is the selection of the servo to control
     */
    //% blockId=kitronik_simple_servo_stop
    //% block="laat servomotor %servoSelection stoppen"
    //% color=#00A654
    //% weight=100 blockGap=8
    export function servoStop(servoSelection: ServoChoice) {
        if (servoSelection == ServoChoice.servo0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        else if (servoSelection == ServoChoice.servo1) {
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        else if (servoSelection == ServoChoice.servo2) {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        else if (servoSelection == ServoChoice.servo3) {
            pins.digitalWritePin(DigitalPin.P3, 0)
        }
        else if (servoSelection == ServoChoice.servo4) {
            pins.digitalWritePin(DigitalPin.P4, 0)
        }
        else if (servoSelection == ServoChoice.servo5) {
            pins.digitalWritePin(DigitalPin.P5, 0)
        }
        else if (servoSelection == ServoChoice.servo6) {
            pins.digitalWritePin(DigitalPin.P6, 0)
        }
        else if (servoSelection == ServoChoice.servo7) {
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
        else if (servoSelection == ServoChoice.servo8) {
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        else if (servoSelection == ServoChoice.servo9) {
            pins.digitalWritePin(DigitalPin.P9, 0)
        }
        else if (servoSelection == ServoChoice.servo10) {
            pins.digitalWritePin(DigitalPin.P10, 0)
        }
        else if (servoSelection == ServoChoice.servo11) {
            pins.digitalWritePin(DigitalPin.P11, 0)
        }
        else if (servoSelection == ServoChoice.servo12) {
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        else if (servoSelection == ServoChoice.servo13) {
            pins.digitalWritePin(DigitalPin.P13, 0)
        }
        else if (servoSelection == ServoChoice.servo14) {
            pins.digitalWritePin(DigitalPin.P14, 0)
        }
        else if (servoSelection == ServoChoice.servo15) {
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
        else if (servoSelection == ServoChoice.servo16) {
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
  
}
