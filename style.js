const item1 = document.querySelector(".i1")
const item2 = document.querySelector(".i2")
const item3 = document.querySelector(".i3")
const item4 = document.querySelector(".i4")
const header = document.querySelector("header")
const container = document.querySelector("div.container")
const nav_hidden = document.querySelector("ul.hidden")
// const nav_links = document.querySelector("div.nav_links")
const burger = document.getElementById("burger");
const items = document.querySelector("div.container_items")


window.addEventListener("load", function(){
    const TL = gsap.timeline({paused: true})
    TL.staggerFrom(header,0.7, {top: -200, opacity: 0, ease: "power2.out"})
    TL.staggerFrom(container,0.7, {top: -200, opacity: 0, ease: "power2.out"} )
    // TL.staggerFrom(select,0.3, {opacity: 0, ease: "power2.out"} )
    TL.staggerFrom(items,1, {left: -1000,opacity: 0, ease: "power2.out"} )



    TL.play();
})

burger.addEventListener( 'click', function(){
    nav_hidden.classList.toggle("active")
    // nav_links.classList.toggle("link_active")
    burger.classList.toggle('burger_active')
})


const insta = document.querySelector(".instagram");
const faceboo = document.querySelector(".facebook");
const ytb = document.querySelector(".youtube");

insta.addEventListener("mouseenter", function(){
    faceboo.style.filter = 'blur(2px) invert(1)';
    ytb.style.filter = 'blur(2px) invert(1)';
});

insta.addEventListener("mouseleave", function(){
    faceboo.style.filter = 'invert(1)';
    ytb.style.filter = 'invert(1)';
});

faceboo.addEventListener("mouseenter", function(){
    insta.style.filter = 'blur(2px) invert(1)';
    ytb.style.filter = 'blur(2px) invert(1)';
});

faceboo.addEventListener("mouseleave", function(){
    insta.style.filter = 'invert(1)';
    ytb.style.filter = 'invert(1)';
});

ytb.addEventListener("mouseenter", function(){
    faceboo.style.filter = 'blur(2px) invert(1)';
    insta.style.filter = 'blur(2px) invert(1)';
});

ytb.addEventListener("mouseleave", function(){
    faceboo.style.filter = 'invert(1)';
    insta.style.filter = 'invert(1)';
});


























item1.addEventListener("mouseenter", function(){
    item1.style.transform = 'scale(1.1)';
    item2.style.transform = 'scale(0.9)';
    item3.style.transform = 'scale(0.9)';
    item4.style.transform = 'scale(0.9)';
});

item1.addEventListener("mouseleave", function(){
    item1.style.transform = 'scale(1)';
    item2.style.transform = 'scale(1)';
    item3.style.transform = 'scale(1)';
    item4.style.transform = 'scale(1)';
});

item2.addEventListener("mouseenter", function(){
    item2.style.transform = 'scale(1.1)';
    item1.style.transform = 'scale(0.9)';
    item3.style.transform = 'scale(0.9)';
    item4.style.transform = 'scale(0.9)';
});

item2.addEventListener("mouseleave", function(){
    item2.style.transform = 'scale(1)';
    item1.style.transform = 'scale(1)';
    item3.style.transform = 'scale(1)';
    item4.style.transform = 'scale(1)';
});


item3.addEventListener("mouseenter", function(){
    item3.style.transform = 'scale(1.1)';
    item2.style.transform = 'scale(0.9)';
    item1.style.transform = 'scale(0.9)';
    item4.style.transform = 'scale(0.9)';
});

item3.addEventListener("mouseleave", function(){
    item3.style.transform = 'scale(1)';
    item2.style.transform = 'scale(1)';
    item1.style.transform = 'scale(1)';
    item4.style.transform = 'scale(1)';
});


item4.addEventListener("mouseenter", function(){
    item4.style.transform = 'scale(1.1)';
    item2.style.transform = 'scale(0.9)';
    item3.style.transform = 'scale(0.9)';
    item1.style.transform = 'scale(0.9)';
});

item4.addEventListener("mouseleave", function(){
    item4.style.transform = 'scale(1)';
    item2.style.transform = 'scale(1)';
    item3.style.transform = 'scale(1)';
    item1.style.transform = 'scale(1)';
});

