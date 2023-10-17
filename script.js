let rect = document.querySelector("#rectangle");
rect.addEventListener("mousemove", (dets)=>{
    let rectangleLocation = rect.getBoundingClientRect();
    let cursorLocation = dets.clientX - rectangleLocation.left;
    // console.log(dets.clientX - rectangleLocation.left)
    if(cursorLocation<rectangleLocation.width/2){
        console.log("left");
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, cursorLocation);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }
    else {
        console.log("right")
        let blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, cursorLocation);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
})

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect, {
        backgroundColor: "white",
    })
})
