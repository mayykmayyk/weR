import flickityInit from './components/flickityInit';
import forEachPolyfill from './components/forEachPolyfill';
import headerOnScroll from './components/header';
import memberHover from './components/memberHover';
import steps from './components/steps';


document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    flickityInit()
    steps()
    memberHover()
    headerOnScroll()
  },
  false
)
