IR.IR_callbackUser(function () {
    if (IR.IR_read() == remoteControl.op()) {
        basic.showArrow(ArrowNames.North)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    } else if (IR.IR_read() == remoteControl.neer()) {
        basic.showArrow(ArrowNames.South)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CCW, 100)
    } else if (IR.IR_read() == remoteControl.links()) {
        basic.showArrow(ArrowNames.West)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 100)
    } else if (IR.IR_read() == remoteControl.rechts()) {
        basic.showArrow(ArrowNames.East)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)
    } else if (false) {
    	
    } else {
        Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
    }
})
Maqueen_V5.I2CInit()
IR.IR_init()
remoteControl.init_rc_hx1838()
basic.forever(function () {
	
})
