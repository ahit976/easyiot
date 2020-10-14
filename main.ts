input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_clear()
    microIoT.microIoT_SendMessage("a", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(2, "message sent.")
})
microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (m0) {
    if (m0 == "a") {
        microIoT.microIoT_showUserText(5, "got message.")
        microIoT.microIoT_showUserText(6, m0)
    } else {
        microIoT.microIoT_showUserText(7, "unknown.")
    }
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_clear()
})
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI("iFeec30", "12345679")
microIoT.microIoT_MQTT(
"WTqUUbcMR",
"Zo38Ux5Ggz",
"Wmzw8bcGR",
microIoT.SERVERS.China
)
basic.showIcon(IconNames.Happy)
microIoT.microIoT_showUserText(0, "init ok")
basic.forever(function () {
	
})
