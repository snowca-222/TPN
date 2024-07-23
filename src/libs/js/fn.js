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

export function memberSearch_place(country,cities,memberLists) {
    console.log(country, cities)
    let filterLists = []
    if(memberLists){
        if(country === 'USA'){
            memberLists.filter(e => {
                if(e.activeInUSA){
                    filterLists.push(e)
                    
                }
            }
            )
        }
        if(country === 'TW'){
            memberLists.filter(e =>{
                if(e.licensureTaiwan){
                    filterLists.push(e)
                }
            })
        }
    }
    return filterLists
}