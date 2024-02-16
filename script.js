
const src = gsap.timeline({
    scrollTrigger:{
        trigger:"#container-third",
        scroller:"body",
        markers:true,
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