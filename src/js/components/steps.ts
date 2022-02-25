/**
* script for steps component
*/
//@ts-nocheck

const steps = () => {
  const stepItem = document.querySelectorAll('.step__item');
  const stepButton = document.querySelectorAll('.step__indicator');
  const content = document.querySelectorAll('.step__content');
  const prevBtn = document.querySelector('.js-prev') as HTMLElement;
  const nextBtn = document.querySelector('.js-next') as HTMLElement;
  let increment = 0;

  window.addEventListener('DOMContentLoaded', () => {
    stepItem[0].classList.add('active');
    content[0].classList.add('active');
  })

  nextBtn.onclick = () => {
    content[increment].classList.remove('active');
    increment++;
    if (increment < stepItem.length) {
      stepItem[increment].classList.add('active');
      content[increment].classList.add('active');
    } else {
      for (let i = stepItem.length -1; i > 0; i--) {
        stepItem[i].classList.remove('active');
        content[i].classList.remove('active');
        increment = 0;
        content[increment].classList.add('active');
      }
    }
  }

  prevBtn.onclick = () => {
    if (increment > 0) {
      content[increment].classList.remove('active');
      increment--;
      stepItem[increment+1].classList.remove('active');
      content[increment].classList.add('active');
    } else {
      return;
    }
  }

  for (let x = 0; x < stepButton.length; x++) {
    stepButton[x].onclick = function() {
      if (increment > this.value) {
        do {
          stepItem[increment].classList.remove('active');
          content[increment].classList.remove('active');
          increment--;
        }
        while (increment >= this.value)
      } else {
        content[increment].classList.remove('active');
      }
      stepItem[this.value].classList.add('active');
      content[this.value].classList.add('active');
      increment = this.value;
      for (let v = 0; v < increment; v++) {
        stepItem[v].classList.add('active');
      }
    }
  }
}

export default steps