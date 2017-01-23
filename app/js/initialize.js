document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');

  const smoothScroll = require('smooth-scroll');

  smoothScroll.init({
    offset: 85,
    selectorHeader: 'navbar'
  });
});

Zepto($ => {
  console.log('Zepto initialized!');
  $(".gmap-container").mouseleave(function() {
    $('.gmap-container iframe').css("pointer-events", "none");
  });
});