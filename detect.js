const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')
 
// PC version
console.log("Browser rezulst: "+ ua.browser.family)
console.log("Device result: "+ ua.device.family)

// Mobile version 
alert("Browser result: "+ ua.browser.family)
alert("Device result: "+ ua.device.family)