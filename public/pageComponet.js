


const media = () => {
    let clientViewPort = document.documentElement.clientWidth
    let header_wrapper = document.querySelector('.header_wrapper')
    let right_nav = document.querySelector('.right_nav')
    let prefered = document.querySelector('.prefered')
    
   
    if(clientViewPort < 560){
        Object.assign(header_wrapper.style, {
            flexDirection: 'column'
        })
        Object.assign(right_nav.style, {
            marginTop: "1rem"
        })
        Object.assign(prefered.style, {
            display: "none"
        })

    }else{
        Object.assign(header_wrapper.style, {
          
            flexDirection: ''
        })
        Object.assign(right_nav.style, {
            marginTop: ''
        })
        Object.assign(prefered.style, {
            display: ""
        })
    }

}
//header_wrapper
window.addEventListener('resize', media)




