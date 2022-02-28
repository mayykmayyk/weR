import flickityInit from './components/flickityInit';
import forEachPolyfill from './components/forEachPolyfill';
import memberHover from './components/memberHover';
import steps from './components/steps';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    flickityInit()
    steps()
    memberHover()
  },
  false
)
