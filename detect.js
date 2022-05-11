const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')

// Mobile version
setTimeout(() => {
    if (ua.device !== null) {
        //alert("Browser result: "+ ua.browser.family)
        alert("Full Data: " + JSON.stringify(ua.device))
        alert("Device result: " + ua.device.family)
    }
}, 2000)

if (ua.browser !== null) {
    setTimeout(() => {
        // PC version
        alert("Full Data: " + JSON.stringify(ua.browser))
        alert("Browser rezulst: " + ua.browser.family)
    }, 2000)
}
