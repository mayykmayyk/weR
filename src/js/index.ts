import flickityInit from './components/flickityInit';
import forEachPolyfill from './components/forEachPolyfill';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    flickityInit()
  },
  false
)
