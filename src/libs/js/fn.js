export function checkDevice(){
    const mobileDevice = ['Android', 'webOS','iPhone','iPad','iPod','BlackBerry','Windows Phone']
    let isMobileDevice = mobileDevice.some(e=> navigator.userAgent.match(e))
    return isMobileDevice
}

export function handleScrollTop (getBehavior) {
    document.querySelector("#main").scrollTo({
        top: 0,
        behavior: getBehavior,
    });
}