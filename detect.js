const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')
 
console.log("Result: "+ua.browser)
alert("Result: "+ua.browser)