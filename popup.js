'use strict';
function setAlarm() {
    let minutes = parseFloat($("#time").val())
    chrome.alarms.create('reminderAlarm', {
        periodInMinutes: minutes
    })
    window.close()
}
$("#submit").click(setAlarm)