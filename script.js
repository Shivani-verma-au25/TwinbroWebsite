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
    const canvas = document.querySelector("#inner-overlay>canvas");
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
      https://www.twinbru.com/img/frames/ring/654/webp/000.webp
  https://www.twinbru.com/img/frames/ring/654/webp/001.webp
  https://www.twinbru.com/img/frames/ring/654/webp/002.webp
  https://www.twinbru.com/img/frames/ring/654/webp/003.webp
  https://www.twinbru.com/img/frames/ring/654/webp/004.webp
  https://www.twinbru.com/img/frames/ring/654/webp/005.webp
  https://www.twinbru.com/img/frames/ring/654/webp/006.webp
  https://www.twinbru.com/img/frames/ring/654/webp/007.webp
  https://www.twinbru.com/img/frames/ring/654/webp/008.webp
  https://www.twinbru.com/img/frames/ring/654/webp/009.webp
  https://www.twinbru.com/img/frames/ring/654/webp/010.webp
  https://www.twinbru.com/img/frames/ring/654/webp/011.webp
  https://www.twinbru.com/img/frames/ring/654/webp/012.webp
  https://www.twinbru.com/img/frames/ring/654/webp/013.webp
  https://www.twinbru.com/img/frames/ring/654/webp/014.webp
  https://www.twinbru.com/img/frames/ring/654/webp/015.webp
  https://www.twinbru.com/img/frames/ring/654/webp/016.webp
  https://www.twinbru.com/img/frames/ring/654/webp/017.webp
  https://www.twinbru.com/img/frames/ring/654/webp/018.webp
  https://www.twinbru.com/img/frames/ring/654/webp/019.webp
  https://www.twinbru.com/img/frames/ring/654/webp/020.webp
  https://www.twinbru.com/img/frames/ring/654/webp/021.webp
  https://www.twinbru.com/img/frames/ring/654/webp/022.webp
  https://www.twinbru.com/img/frames/ring/654/webp/023.webp
  https://www.twinbru.com/img/frames/ring/654/webp/024.webp
  https://www.twinbru.com/img/frames/ring/654/webp/025.webp
  https://www.twinbru.com/img/frames/ring/654/webp/026.webp
  https://www.twinbru.com/img/frames/ring/654/webp/027.webp
  https://www.twinbru.com/img/frames/ring/654/webp/028.webp
  https://www.twinbru.com/img/frames/ring/654/webp/029.webp
  https://www.twinbru.com/img/frames/ring/654/webp/030.webp
  https://www.twinbru.com/img/frames/ring/654/webp/031.webp
  https://www.twinbru.com/img/frames/ring/654/webp/032.webp
  https://www.twinbru.com/img/frames/ring/654/webp/033.webp
  https://www.twinbru.com/img/frames/ring/654/webp/034.webp
  https://www.twinbru.com/img/frames/ring/654/webp/035.webp
  https://www.twinbru.com/img/frames/ring/654/webp/036.webp
  https://www.twinbru.com/img/frames/ring/654/webp/037.webp
  https://www.twinbru.com/img/frames/ring/654/webp/038.webp
  https://www.twinbru.com/img/frames/ring/654/webp/039.webp
  https://www.twinbru.com/img/frames/ring/654/webp/040.webp
  https://www.twinbru.com/img/frames/ring/654/webp/041.webp
  https://www.twinbru.com/img/frames/ring/654/webp/042.webp
  https://www.twinbru.com/img/frames/ring/654/webp/043.webp
  https://www.twinbru.com/img/frames/ring/654/webp/044.webp
  https://www.twinbru.com/img/frames/ring/654/webp/045.webp
  https://www.twinbru.com/img/frames/ring/654/webp/046.webp
  https://www.twinbru.com/img/frames/ring/654/webp/047.webp
  https://www.twinbru.com/img/frames/ring/654/webp/048.webp
  https://www.twinbru.com/img/frames/ring/654/webp/049.webp
  https://www.twinbru.com/img/frames/ring/654/webp/050.webp
  https://www.twinbru.com/img/frames/ring/654/webp/051.webp
  https://www.twinbru.com/img/frames/ring/654/webp/052.webp
  https://www.twinbru.com/img/frames/ring/654/webp/053.webp
  https://www.twinbru.com/img/frames/ring/654/webp/054.webp
  https://www.twinbru.com/img/frames/ring/654/webp/055.webp
  https://www.twinbru.com/img/frames/ring/654/webp/056.webp
  https://www.twinbru.com/img/frames/ring/654/webp/057.webp
  https://www.twinbru.com/img/frames/ring/654/webp/058.webp
  https://www.twinbru.com/img/frames/ring/654/webp/059.webp
  https://www.twinbru.com/img/frames/ring/654/webp/060.webp
  https://www.twinbru.com/img/frames/ring/654/webp/061.webp
  https://www.twinbru.com/img/frames/ring/654/webp/062.webp
  https://www.twinbru.com/img/frames/ring/654/webp/063.webp
  https://www.twinbru.com/img/frames/ring/654/webp/064.webp
  https://www.twinbru.com/img/frames/ring/654/webp/065.webp
  https://www.twinbru.com/img/frames/ring/654/webp/066.webp
  https://www.twinbru.com/img/frames/ring/654/webp/067.webp
  https://www.twinbru.com/img/frames/ring/654/webp/068.webp
  https://www.twinbru.com/img/frames/ring/654/webp/069.webp
  https://www.twinbru.com/img/frames/ring/654/webp/070.webp
  https://www.twinbru.com/img/frames/ring/654/webp/071.webp
  https://www.twinbru.com/img/frames/ring/654/webp/072.webp
  https://www.twinbru.com/img/frames/ring/654/webp/073.webp
  https://www.twinbru.com/img/frames/ring/654/webp/074.webp
  https://www.twinbru.com/img/frames/ring/654/webp/075.webp
  https://www.twinbru.com/img/frames/ring/654/webp/076.webp
  https://www.twinbru.com/img/frames/ring/654/webp/077.webp
  https://www.twinbru.com/img/frames/ring/654/webp/078.webp
  https://www.twinbru.com/img/frames/ring/654/webp/079.webp
  https://www.twinbru.com/img/frames/ring/654/webp/080.webp
  https://www.twinbru.com/img/frames/ring/654/webp/081.webp
  https://www.twinbru.com/img/frames/ring/654/webp/082.webp
  https://www.twinbru.com/img/frames/ring/654/webp/083.webp
  https://www.twinbru.com/img/frames/ring/654/webp/084.webp
  https://www.twinbru.com/img/frames/ring/654/webp/085.webp
  https://www.twinbru.com/img/frames/ring/654/webp/086.webp
  https://www.twinbru.com/img/frames/ring/654/webp/087.webp
  https://www.twinbru.com/img/frames/ring/654/webp/088.webp
  https://www.twinbru.com/img/frames/ring/654/webp/089.webp
  https://www.twinbru.com/img/frames/ring/654/webp/090.webp
  https://www.twinbru.com/img/frames/ring/654/webp/091.webp
  https://www.twinbru.com/img/frames/ring/654/webp/092.webp
  https://www.twinbru.com/img/frames/ring/654/webp/093.webp
  https://www.twinbru.com/img/frames/ring/654/webp/094.webp
  https://www.twinbru.com/img/frames/ring/654/webp/095.webp
  https://www.twinbru.com/img/frames/ring/654/webp/096.webp
  https://www.twinbru.com/img/frames/ring/654/webp/097.webp
  https://www.twinbru.com/img/frames/ring/654/webp/098.webp
  https://www.twinbru.com/img/frames/ring/654/webp/099.webp
  https://www.twinbru.com/img/frames/ring/654/webp/100.webp
  https://www.twinbru.com/img/frames/ring/654/webp/101.webp
  https://www.twinbru.com/img/frames/ring/654/webp/102.webp
  https://www.twinbru.com/img/frames/ring/654/webp/103.webp
  https://www.twinbru.com/img/frames/ring/654/webp/104.webp
  https://www.twinbru.com/img/frames/ring/654/webp/105.webp
  https://www.twinbru.com/img/frames/ring/654/webp/106.webp
  https://www.twinbru.com/img/frames/ring/654/webp/107.webp
  https://www.twinbru.com/img/frames/ring/654/webp/108.webp
  https://www.twinbru.com/img/frames/ring/654/webp/109.webp
  https://www.twinbru.com/img/frames/ring/654/webp/110.webp
  https://www.twinbru.com/img/frames/ring/654/webp/111.webp
  https://www.twinbru.com/img/frames/ring/654/webp/112.webp
  https://www.twinbru.com/img/frames/ring/654/webp/113.webp
  https://www.twinbru.com/img/frames/ring/654/webp/114.webp
  https://www.twinbru.com/img/frames/ring/654/webp/115.webp
  https://www.twinbru.com/img/frames/ring/654/webp/116.webp
  https://www.twinbru.com/img/frames/ring/654/webp/117.webp
  https://www.twinbru.com/img/frames/ring/654/webp/118.webp
  https://www.twinbru.com/img/frames/ring/654/webp/119.webp
  https://www.twinbru.com/img/frames/ring/654/webp/120.webp
  https://www.twinbru.com/img/frames/ring/654/webp/121.webp
  https://www.twinbru.com/img/frames/ring/654/webp/122.webp
  https://www.twinbru.com/img/frames/ring/654/webp/123.webp
  https://www.twinbru.com/img/frames/ring/654/webp/124.webp
  https://www.twinbru.com/img/frames/ring/654/webp/125.webp
  https://www.twinbru.com/img/frames/ring/654/webp/126.webp
  https://www.twinbru.com/img/frames/ring/654/webp/127.webp
  https://www.twinbru.com/img/frames/ring/654/webp/128.webp
  https://www.twinbru.com/img/frames/ring/654/webp/129.webp
  https://www.twinbru.com/img/frames/ring/654/webp/130.webp
  https://www.twinbru.com/img/frames/ring/654/webp/131.webp
  https://www.twinbru.com/img/frames/ring/654/webp/132.webp
  https://www.twinbru.com/img/frames/ring/654/webp/133.webp
  https://www.twinbru.com/img/frames/ring/654/webp/134.webp
  https://www.twinbru.com/img/frames/ring/654/webp/135.webp
  https://www.twinbru.com/img/frames/ring/654/webp/136.webp
  https://www.twinbru.com/img/frames/ring/654/webp/137.webp
  https://www.twinbru.com/img/frames/ring/654/webp/138.webp
  https://www.twinbru.com/img/frames/ring/654/webp/139.webp
  https://www.twinbru.com/img/frames/ring/654/webp/140.webp
  https://www.twinbru.com/img/frames/ring/654/webp/141.webp
  https://www.twinbru.com/img/frames/ring/654/webp/142.webp
  https://www.twinbru.com/img/frames/ring/654/webp/143.webp
  https://www.twinbru.com/img/frames/ring/654/webp/144.webp
  https://www.twinbru.com/img/frames/ring/654/webp/145.webp
  https://www.twinbru.com/img/frames/ring/654/webp/146.webp
  https://www.twinbru.com/img/frames/ring/654/webp/147.webp
  https://www.twinbru.com/img/frames/ring/654/webp/148.webp
  https://www.twinbru.com/img/frames/ring/654/webp/149.webp
  https://www.twinbru.com/img/frames/ring/654/webp/150.webp
  https://www.twinbru.com/img/frames/ring/654/webp/151.webp
  https://www.twinbru.com/img/frames/ring/654/webp/152.webp
  https://www.twinbru.com/img/frames/ring/654/webp/153.webp
  https://www.twinbru.com/img/frames/ring/654/webp/154.webp
  https://www.twinbru.com/img/frames/ring/654/webp/155.webp
  https://www.twinbru.com/img/frames/ring/654/webp/156.webp
  https://www.twinbru.com/img/frames/ring/654/webp/157.webp
  https://www.twinbru.com/img/frames/ring/654/webp/158.webp
  https://www.twinbru.com/img/frames/ring/654/webp/159.webp
  https://www.twinbru.com/img/frames/ring/654/webp/160.webp
  https://www.twinbru.com/img/frames/ring/654/webp/161.webp
  https://www.twinbru.com/img/frames/ring/654/webp/162.webp
  https://www.twinbru.com/img/frames/ring/654/webp/163.webp
  https://www.twinbru.com/img/frames/ring/654/webp/164.webp
  https://www.twinbru.com/img/frames/ring/654/webp/165.webp
  https://www.twinbru.com/img/frames/ring/654/webp/166.webp
  https://www.twinbru.com/img/frames/ring/654/webp/167.webp
  https://www.twinbru.com/img/frames/ring/654/webp/168.webp
  https://www.twinbru.com/img/frames/ring/654/webp/169.webp
  https://www.twinbru.com/img/frames/ring/654/webp/170.webp
  https://www.twinbru.com/img/frames/ring/654/webp/171.webp
  https://www.twinbru.com/img/frames/ring/654/webp/172.webp
  https://www.twinbru.com/img/frames/ring/654/webp/173.webp
  https://www.twinbru.com/img/frames/ring/654/webp/174.webp
  https://www.twinbru.com/img/frames/ring/654/webp/175.webp
  https://www.twinbru.com/img/frames/ring/654/webp/176.webp
  https://www.twinbru.com/img/frames/ring/654/webp/177.webp
  https://www.twinbru.com/img/frames/ring/654/webp/178.webp
  https://www.twinbru.com/img/frames/ring/654/webp/179.webp
  https://www.twinbru.com/img/frames/ring/654/webp/180.webp
  https://www.twinbru.com/img/frames/ring/654/webp/181.webp
  https://www.twinbru.com/img/frames/ring/654/webp/182.webp
  https://www.twinbru.com/img/frames/ring/654/webp/183.webp
  https://www.twinbru.com/img/frames/ring/654/webp/184.webp
  https://www.twinbru.com/img/frames/ring/654/webp/185.webp
  https://www.twinbru.com/img/frames/ring/654/webp/186.webp
  https://www.twinbru.com/img/frames/ring/654/webp/187.webp
  https://www.twinbru.com/img/frames/ring/654/webp/188.webp
  https://www.twinbru.com/img/frames/ring/654/webp/189.webp
  https://www.twinbru.com/img/frames/ring/654/webp/190.webp
  https://www.twinbru.com/img/frames/ring/654/webp/191.webp
  https://www.twinbru.com/img/frames/ring/654/webp/192.webp
  https://www.twinbru.com/img/frames/ring/654/webp/193.webp
  https://www.twinbru.com/img/frames/ring/654/webp/194.webp
  https://www.twinbru.com/img/frames/ring/654/webp/195.webp
  https://www.twinbru.com/img/frames/ring/654/webp/196.webp
  https://www.twinbru.com/img/frames/ring/654/webp/197.webp
  https://www.twinbru.com/img/frames/ring/654/webp/198.webp
  https://www.twinbru.com/img/frames/ring/654/webp/199.webp
  https://www.twinbru.com/img/frames/ring/654/webp/200.webp
  https://www.twinbru.com/img/frames/ring/654/webp/201.webp
  https://www.twinbru.com/img/frames/ring/654/webp/202.webp
  https://www.twinbru.com/img/frames/ring/654/webp/203.webp
  https://www.twinbru.com/img/frames/ring/654/webp/204.webp
  https://www.twinbru.com/img/frames/ring/654/webp/205.webp
  https://www.twinbru.com/img/frames/ring/654/webp/206.webp
  https://www.twinbru.com/img/frames/ring/654/webp/207.webp
  https://www.twinbru.com/img/frames/ring/654/webp/208.webp
  https://www.twinbru.com/img/frames/ring/654/webp/209.webp
  https://www.twinbru.com/img/frames/ring/654/webp/210.webp
  https://www.twinbru.com/img/frames/ring/654/webp/211.webp
  https://www.twinbru.com/img/frames/ring/654/webp/212.webp
  https://www.twinbru.com/img/frames/ring/654/webp/213.webp
  https://www.twinbru.com/img/frames/ring/654/webp/214.webp
  https://www.twinbru.com/img/frames/ring/654/webp/215.webp
  https://www.twinbru.com/img/frames/ring/654/webp/216.webp
  https://www.twinbru.com/img/frames/ring/654/webp/217.webp
  https://www.twinbru.com/img/frames/ring/654/webp/218.webp
  https://www.twinbru.com/img/frames/ring/654/webp/219.webp
  https://www.twinbru.com/img/frames/ring/654/webp/220.webp
  https://www.twinbru.com/img/frames/ring/654/webp/221.webp
  https://www.twinbru.com/img/frames/ring/654/webp/222.webp
  https://www.twinbru.com/img/frames/ring/654/webp/223.webp
  https://www.twinbru.com/img/frames/ring/654/webp/224.webp
  https://www.twinbru.com/img/frames/ring/654/webp/225.webp
  https://www.twinbru.com/img/frames/ring/654/webp/226.webp
  https://www.twinbru.com/img/frames/ring/654/webp/227.webp
  https://www.twinbru.com/img/frames/ring/654/webp/228.webp
  https://www.twinbru.com/img/frames/ring/654/webp/229.webp
  https://www.twinbru.com/img/frames/ring/654/webp/230.webp
  https://www.twinbru.com/img/frames/ring/654/webp/231.webp
  https://www.twinbru.com/img/frames/ring/654/webp/232.webp
  https://www.twinbru.com/img/frames/ring/654/webp/233.webp
  https://www.twinbru.com/img/frames/ring/654/webp/234.webp
  https://www.twinbru.com/img/frames/ring/654/webp/235.webp
  https://www.twinbru.com/img/frames/ring/654/webp/236.webp
  https://www.twinbru.com/img/frames/ring/654/webp/237.webp
  https://www.twinbru.com/img/frames/ring/654/webp/238.webp
  https://www.twinbru.com/img/frames/ring/654/webp/239.webp
  https://www.twinbru.com/img/frames/ring/654/webp/240.webp
  https://www.twinbru.com/img/frames/ring/654/webp/241.webp
  https://www.twinbru.com/img/frames/ring/654/webp/242.webp
  https://www.twinbru.com/img/frames/ring/654/webp/243.webp
  https://www.twinbru.com/img/frames/ring/654/webp/244.webp
  https://www.twinbru.com/img/frames/ring/654/webp/245.webp
  https://www.twinbru.com/img/frames/ring/654/webp/246.webp
  https://www.twinbru.com/img/frames/ring/654/webp/247.webp
  https://www.twinbru.com/img/frames/ring/654/webp/248.webp
  https://www.twinbru.com/img/frames/ring/654/webp/249.webp
  https://www.twinbru.com/img/frames/ring/654/webp/250.webp
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 251;
    
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
      repeat:-1,
      yoyo:true,
      duration:5,
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
      var ratio = Math.min(hRatio, vRatio);
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
      repeat:-1,
      yoyo:true,
      duration:.5
    });
  }
canvas()


// custom cursor

function customCursor(){
  let cur = document.querySelector('#cursor')
  let main = document.querySelector('#main')

  window.addEventListener('mousemove',(evnt)=>{
    // cur.style.top = `${evnt.y}px`
    // cur.style.left = `${evnt.x}px`
    cur.style.transform = `translate(${evnt.clientX}px,${evnt.clientY}px)`
  })
}
customCursor()


// *********** circle movement*****************

// function moveCircle(){
//   document.querySelectorAll('.circle').forEach( (item) => {
//     item.addEventListener('mousemove', (dets)=> {
//       var diff = dets.clientY - item.getBoundingClientRect().top;

//       gsap.to(item.querySelector('.circle'),{
//         ease:Power1,
//         top:diff,
//         left:dets.clientX
//       })
//     })
//   })
// }
// moveCircle()


// function circleMove(){
//   let cirlParent = document.querySelectorAll('.c')
//   let curs1 = document.querySelector('#cursor')
  
//   window.addEventListener('mousemove',function(e){
//     // console.log(e)
//     // alert('hello')
//     curs1.style.transform = `traslate(${e.clientX},(${e.clientY}))`
//     cirlParent.style.transform = `traslate(${e.clientX},(${e.clientY}))`
//   })

//   cirlParent.forEach(function(elem){
//     elem.addEventListener('mouseenter',function(dets){
//       // console.log(dets);
//       // document.querySelector('#div-1').style.transform = `translate(${dets.clientx},(${dets.clientY}))`
//     })

//     elem.addEventListener('mouseleave',function(){
//       // console.log(dets);
//       // document.querySelector('#div-1').style.transform = `translate(${dets.clientx},(${dets.clientY}))`
//     })
//   })
// }
// circleMove()


// gsap scrollTriger start page1

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page1',
    scroller:'#main',
    // markers:true,
    start:'0% 0%',
    end:'90% 20%',
    scrub:.15
  }
})
tl1.to('nav>#center',{
  y:-100,
  duration:1.2
})
tl1.to('#left>svg',{
  rotate:'280deg',
  duration:2
},"anm")
tl1.to('#left>h2',{
  x:'-50%',
  opacity:0,
  // zIndex:-1,
  duration:2
},"anm")


// gsap scrollTriger start page2

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page2',
    scroller:'#main',
    markers:true,
    start:'100% 110%',
    end:'100% 110%',
    scrub:3
  }
})
tl2.from('.small-text>p',{
  y:30,
  duration:1,
  stagger:.1,
})
tl2.from('.big-text>p',{
  y:150,
  duration:1,
  stagger:.1,
})
tl2.from('.animated-button>.btn-div',{
  y:20,
  duration:1,
  stagger:.1,
})
tl2.from('.wrapper>.elem>svg',{
  y:100,
  duration:1,
  stagger:.25,
})


// *************** canvas page3 animation ********************


function canvasSecond(){
  const canvas = document.querySelector("#page3 canvas");
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
    https://www.twinbru.com/img/frames/ribbon/full/1920/webp/000.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/001.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/002.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/003.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/004.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/005.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/006.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/007.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/008.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/009.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/010.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/011.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/012.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/013.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/014.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/015.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/016.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/017.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/018.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/019.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/020.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/021.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/022.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/023.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/024.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/025.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/026.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/027.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/028.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/029.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/030.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/031.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/032.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/033.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/034.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/035.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/036.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/037.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/038.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/039.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/040.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/041.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/042.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/043.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/044.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/045.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/046.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/047.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/048.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/049.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/050.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/051.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/052.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/053.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/054.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/055.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/056.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/057.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/058.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/059.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/060.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/061.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/062.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/063.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/064.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/065.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/066.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/067.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/068.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/069.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/070.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/071.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/072.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/073.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/074.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/075.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/076.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/077.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/078.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/079.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/080.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/081.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/082.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/083.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/084.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/085.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/086.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/087.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/088.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/089.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/090.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/091.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/092.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/093.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/094.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/095.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/096.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/097.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/098.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/099.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/100.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/101.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/102.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/103.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/104.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/105.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/106.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/107.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/108.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/109.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/110.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/111.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/112.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/113.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/114.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/115.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/116.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/117.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/118.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/119.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/120.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/121.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/122.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/123.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/124.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/125.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/126.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/127.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/128.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/129.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/130.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/131.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/132.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/133.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/134.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/135.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/136.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/137.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/138.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/139.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/140.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/141.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/142.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/143.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/144.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/145.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/146.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/147.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/148.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/149.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/150.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/151.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/152.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/153.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/154.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/155.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/156.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/157.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/158.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/159.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/160.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/161.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/162.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/163.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/164.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/165.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/166.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/167.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/168.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/169.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/170.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/171.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/172.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/173.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/174.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/175.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/176.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/177.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/178.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/179.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/180.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/181.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/182.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/183.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/184.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/185.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/186.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/187.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/188.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/189.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/190.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/191.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/192.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/193.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/194.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/195.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/196.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/197.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/198.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/199.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/200.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/201.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/202.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/203.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/204.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/205.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/206.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/207.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/208.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/209.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/210.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/211.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/212.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/213.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/214.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/215.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/216.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/217.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/218.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/219.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/220.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/221.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/222.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/223.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/224.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/225.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/226.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/227.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/228.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/229.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/230.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/231.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/232.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/233.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/234.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/235.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/236.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/237.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/238.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/239.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/240.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/241.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/242.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/243.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/244.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/245.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/246.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/247.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/248.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/249.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/250.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/251.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/252.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/253.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/254.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/255.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/256.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/257.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/258.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/259.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/260.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/261.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/262.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/263.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/264.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/265.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/266.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/267.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/268.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/269.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/270.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/271.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/272.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/273.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/274.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/275.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/276.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/277.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/278.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/279.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/280.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/281.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/282.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/283.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/284.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/285.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/286.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/287.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/288.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/289.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/290.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/291.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/292.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/293.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/294.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/295.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/296.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/297.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/298.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/299.webp
  https://www.twinbru.com/img/frames/ribbon/full/1920/webp/300.webp
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
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
      trigger: `#page3`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
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
    var ratio = Math.min(hRatio, vRatio);
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
    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
  canvasSecond()
  

  // page4 circle 3d animation

  const Img = document.querySelector('.outter-circle>img')
  const cursor = document.querySelector('#cursor')
  // console.log(Img);

  window.addEventListener('mousemove',function(dets){
    // console.log(dets.x);
    const rotx = 58 - dets.x/10
    const roty = Math.abs(rotx)
    // console.log(roty);
    // console.log(rotx);
    Img.style.transform =  `rotateX(${rotx}deg) rotateY(-${roty}deg)`
    // cursor.style.backgrounColor = ''
  })

Img.addEventListener('mouseleave',function(dets){
  setTimeout(() => {
    Img.style.transform =  `rotateX(0deg) rotateY(0deg)`
  }, 2000);
})

// cursor color change animation
function addColorCursor(){
  let center_ball = document.querySelector('#center-p4')
  let cursor = document.querySelector('#cursor')
  let digital_fab = document.querySelector('#digtal-fab')
  
  center_ball.addEventListener('mousemove',function(){
    cursor.style.backgroundColor = '#00000048'
  })

  center_ball.addEventListener('mouseleave',function(){
    cursor.style.backgroundColor = '#ffff'
  })
  // digital fabric animation
  digital_fab.addEventListener('mousemove',function(){
    cursor.style.backgroundColor = '#00000048'
  })
  digital_fab.addEventListener('mouseleave',function(){
    cursor.style.backgroundColor = '#ffff'
  })

}
addColorCursor()

// *********** page5 text animation ****************

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page5',
    scroller:'#main',
    start:'0% 80%',
    end:'20% 50%',
    markers:true,
    scrub:2
  },
  // stagger:.1
})
tl3.from('.small-text-p5>p',{
    y:-30,
    duration:1,
    stagger:.1,
})




// ****************** page 5 canavs animation ********************

function canvasThird(){
  const canvas = document.querySelector("#page6>canvas");
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
    https://www.twinbru.com/img/frames/arch/salmon/1280/webp/000.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/001.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/002.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/003.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/004.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/005.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/006.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/007.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/008.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/009.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/010.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/011.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/012.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/013.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/014.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/015.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/016.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/017.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/018.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/019.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/020.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/021.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/022.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/023.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/024.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/025.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/026.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/027.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/028.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/029.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/030.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/031.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/032.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/033.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/034.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/035.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/036.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/037.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/038.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/039.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/040.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/041.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/042.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/043.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/044.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/045.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/046.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/047.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/048.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/049.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/050.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/051.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/052.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/053.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/054.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/055.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/056.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/057.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/058.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/059.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/060.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/061.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/062.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/063.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/064.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/065.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/066.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/067.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/068.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/069.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/070.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/071.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/072.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/073.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/074.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/075.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/076.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/077.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/078.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/079.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/080.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/081.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/082.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/083.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/084.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/085.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/086.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/087.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/088.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/089.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/090.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/091.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/092.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/093.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/094.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/095.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/096.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/097.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/098.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/099.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/100.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/101.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/102.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/103.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/104.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/105.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/106.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/107.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/108.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/109.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/110.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/111.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/112.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/113.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/114.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/115.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/116.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/117.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/118.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/119.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/120.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/121.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/122.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/123.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/124.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/125.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/126.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/127.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/128.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/129.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/130.webp
    
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 130;
  
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
      trigger: `#page6`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
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
    trigger: "#page6",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
  canvasThird()