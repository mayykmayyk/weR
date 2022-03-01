/**
* show header on scroll
*/

const headerOnScroll = () => {
  const header = document.querySelector('.js-header');

  if (header) {
    window.addEventListener('scroll', () => {
      //@ts-ignore
      if (window.scrollY > header.offsetHeight) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    })
  }
}

export default headerOnScroll