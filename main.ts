radio.onReceivedString(function (receivedString) {
    if (receivedString == 0) {
    	
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
    } else {
    	
    }
})
basic.forever(function () {
	
})
