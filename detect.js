const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')

// Mobile version
alert("Hello")
if (ua.device !== null) {
    //alert("Browser result: "+ ua.browser.family)
    alert("Full Data: " + JSON.stringify(ua.device))
    alert("Device result: " + ua.device.family)
}
// PC version
console.log("Full Data: " + JSON.stringify(ua.browser))
console.log("Browser rezulst: " + ua.browser.family)
