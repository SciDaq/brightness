/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace dimmer {

    let brightness = 0
    //% block
    export function writeText(text: string, bright:number) {

        MakeDarker(bright);
        basic.showString(text);
    }
    function MakeDarker(num: number) {
        brightness = 100
        while (num < brightness) {
            led.setBrightness(brightness)
            brightness += -1
            basic.pause(1)
        }
    }
    function MakeBrighter(num: number) {
        for (let index = 0; index <= num; index++) {
            basic.pause(1)
            led.setBrightness(index)
        }
        brightness = num
    }
}