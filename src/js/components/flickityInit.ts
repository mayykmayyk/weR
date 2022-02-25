/**
* Initialize flickity
*/
//@ts-nocheck

const flickityInit = () => {
  let service = document.querySelector('.home-carousel');
  let carousel = new Flickity(service, {
    pageDots: false,
    freeScroll: true,
    wrapAround: true,
    contain: true,
  })
}

export default flickityInit