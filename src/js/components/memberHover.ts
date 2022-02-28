/**
* hover for each company member
*/
//@ts-nocheck

const memberHover = () => {
  const member = document.querySelectorAll('.js-hover');

  member.forEach((n) => {
    n.onmouseover = function() {
      this.classList.add('mouse-over');
    }
    n.onmouseout = function() {
      this.classList.remove('mouse-over');
    }
  })
}

export default memberHover
