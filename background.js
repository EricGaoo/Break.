'use strict';

chrome.alarms.onAlarm.addListener(function() {
    chrome.notifications.create({
    type:     'basic',
    iconUrl:  chrome.runtime.getURL('icon/32.png'),
    title:    'Keep your back straight!',
    message:  'A friendly reminder to sit up straight.',
    priority: 0});
});