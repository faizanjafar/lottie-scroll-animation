var animData = {
  container: document.getElementById('lottie-three'),
  path: 'https://assets-global.website-files.com/65155fd11c623f6be0740f5d/654dd378a548b27d5c5f98bf_lottie-140.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "animScroll",
}, animScroll, tl;


var animScroll = bodymovin.loadAnimation(animData)


animScroll.addEventListener('DOMLoaded', function () {
  tl = new TimelineMax({repeat: 0})
  tl.to({frame: 0}, 1, {
    frame: animScroll.totalFrames-1,
    onUpdate: function() {
      animScroll.goToAndStop(Math.round(this.target.frame), true)
    },
    Ease:Linear.easeNone
  })
  
  var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".env-three",
  offset: 300,
  duration: 3000 })
  scene.setTween(tl).setPin("#lottie-three").addTo(controller);
})
