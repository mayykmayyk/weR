import flickityInit from './components/flickityInit';
import forEachPolyfill from './components/forEachPolyfill';
import steps from './components/steps';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    flickityInit()
    steps()
  },
  false
)
