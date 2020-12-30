//robotjs

var robot = require('robotjs')

function main() {
    console.log('starting...')

    sleep(2582)

    var a = 366
    var b =  265

    var c = 416
    var d = 366

    var e = 370
    var f = 240

    
    while (true) {
        sleep(1000)
        robot.moveMouseSmooth(a, b)
        robot.mouseClick()
        sleep(15083)
        
        drop()
        
        robot.moveMouseSmooth(c, d)
        robot.mouseClick()
        sleep(58838)

        drop()
        
        robot.moveMouseSmooth(e, f)
        robot.mouseClick()
        sleep(21245)
        
    }
}
    
    function drop() {
        var invent_y = 580
        var invent_x = 280

        var drop_y =  564
        var drop_z =  320
        // cant get fucking shift button to down to shift drop so use rightclick till sorted
        robot.moveMouseSmooth(invent_y, invent_x)
        robot.mouseClick('right')
        // robot.keyToggle('shift', 'down')
        robot.moveMouseSmooth(drop_y, drop_z)
        sleep(123)
        robot.mouseClick()
        // robot.keyToggle('shift', 'up')
    }

    function testScreenCapture() {
        var img = robot.screen.capture(0, 0, 1679, 1049)

        var pixelColor = img.colorAt(841, 623)
        console.log(pixelColor)

    }


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

testScreenCapture()
// main()