function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

// ************* loco end************

function canvas(){
    const canvas = document.querySelector("#insta>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c523f598759b75efe36c3f_logo.svg
      https://assets.website-files.com/63c51f529f1b455b17d194fb/642ab2c03d018962d5f39e33_0001-p-1080.png
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c542f26e9aaa72c0c5fc9b_milk-p-1080.webp
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63eb5cf1baab5d5cf9dc09b1_milk_mobile_bg.png
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63ca6a95fea0cf62c998fea7_lettering.svg
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c5613a2378567903702dc2_text_bg-p-1080.webp
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c56342a9b6a0016989d6a3_mask_title_img-p-800.webp
      https://assets.website-files.com/63c51f529f1b455b17d194fb/642ab2c03d018962d5f39e33_0001.png
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c542f26e9aaa72c0c5fc9b_milk-p-2000.webp
      https://assets.website-files.com/63c51f529f1b455b17d194fb/6430295d3433e5c987dba955_bubbles.svg
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63c5613a2378567903702dc2_text_bg.webp
      https://assets.website-files.com/63c51f529f1b455b17d194fb/63e2361af042c569d4906703_chicken-p-1080.png
      https://assets.website-files.com/63c51f529f1b455b17d194fb/649ae89d1e2589948c0a82df_orange_bg-p-2000.png
      https://assets.website-files.com/63c51f529f1b455b17d194fb/64819415ddb9563d1fa77fb9_Begg.svg
      https://assets.website-files.com/63c51f529f1b455b17d194fb/649c13c7e68c4b1212f968f1_favicon.png
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 175;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page`,
        start: `top top`,
        end: `700% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page",
      pin: true,
      // markers:true,
      scroller: `#main`,
      start: `top top`,
      end: `700% top`,
    });
  }
// canvas()


// custom cursor

function customCursor(){
  let cur = document.querySelector('#cursor')
  let main = document.querySelector('#main')

  main.addEventListener('mousemove',(evnt)=>{
    cur.style.top = `${evnt.y}px`
    cur.style.left = `${evnt.x}px`
  })
}
customCursor()