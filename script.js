
const src = gsap.timeline({
    scrollTrigger:{
        trigger:"#container-third",
        scroller:"body",
        // markers:true,
        start:"0% 0%",
        end:"100% 0%",
        pin:true,
        scrub:1
    }
})
src
.to("#container-third>.third-midium",{
    top:"-100%",
},"sam")
.to("#container-third>.third-last",{
    top:"0%",
},"sam")

const homeAni = gsap.timeline()

homeAni.from(".elem-center",{
    scale: 0
})
homeAni.from(".elem-left>.inner-elems>.in-pic",{
    scale: 0
}, "home-ani")
homeAni.from(".elem-right>.inner-elems>.in-pic",{
    scale: 0
}, "home-ani")

homeAni.from(".hero-video-box",{
    y:"-15%",
    ease: "expo.in"
    // duration: 2
})

homeAni.to(".hero-heads",{
    scale: 1,
    opacity:1
})


const home = gsap.timeline({
    scrollTrigger:{
        trigger:"#container-first>.hero-video-box",
        scroller:"body",
        markers:true,
        start:"10% 0%",
        end:"500% 100%",
        pin: true,
        scrub: 1
    }
})
home.to(".elem-center",{
    width:"1000%",
    // height:"300%",
}, "hom")
home.to(".elem-left",{
    x:"-100%"
}, "hom")
home.to(".elem-right",{
    x:"100%"
}, "hom")