document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app 2');

  const smoothScroll = require('smooth-scroll');

  smoothScroll.init({
    offset: 85,
    selectorHeader: 'navbar'
  });
});
