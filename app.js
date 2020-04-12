document.body.style.setProperty('--innerVH', `${window.innerHeight || window.visualViewport.height}px`);



const space = document.getElementById("space"),
      spaceWidth = space.scrollWidth,
      spaceHeight = space.scrollHeight,
      perspective = 100;

space.style.setProperty(`--perspective`, `${perspective}px`);

function makeStar() {
  const star = document.createElement(`time`),
        starWidth = gsap.utils.random(1, 2, 1),
        starHeight = starWidth * gsap.utils.random(20, 40, 1),
        randomRotation = gsap.utils.random(-120, 120, 1),
        scaleModifier = Math.random(),
        visibleRangeMaximum = (spaceWidth - spaceHeight > 0 ? spaceWidth : spaceHeight) / 2;

  gsap.set(star, {
    width: `${starWidth}px`,
    height: `${starHeight}px`,
    transform: `
      translateY(${starHeight / 2}px)
      rotate(${randomRotation}deg)
      rotateX(90deg)
      translateZ(0px)
      scaleX(${scaleModifier})
    `,
  });
  
  gsap.to(star, {
    duration: "random(5, 20)",
    transform: `
      translateY(${starHeight / 2}px)
      rotate(${randomRotation}deg)
      rotateX(90deg)
      translateZ(${perspective + visibleRangeMaximum}px)
      scaleX(${scaleModifier})
    `,
    repeat: -1,
    ease: `none`,
  }).progress(Math.random());
  
  space.appendChild(star);
}

for (let i = 0; i < 200; i++) {
   makeStar();
}



const moltenCracksMask = document.querySelector(`#cracks--molten-mask`);

gsap.to(moltenCracksMask, {
  duration: 20,
  repeat: -1,
  ease: `none`,
  attr: {
    transform: `translate(465 340)  rotate(360 0 0) `
  },
  force3D: true,
})



const elTurbulence = document.querySelector(`#turbulence`);

gsap.to(elTurbulence, {
  duration: 4,
  repeat: -1,
  ease: `none`,
  onUpdate: function() {
    const baseFrequencyX = this.progress() * .004 + .02,
          baseFrequencyY = this.progress() * .04 + .01;
    
    elTurbulence.setAttribute(`baseFrequency`, `${baseFrequencyX} ${baseFrequencyY}`);
  }
})
