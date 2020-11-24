const counters = document.querySelectorAll('.counter');
const speed = 500;
let i = 0;

function loopCounter() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;
      if (count < target) {
        counter.innerText =
          (count + inc) % 1 !== 0 ? (count + inc).toFixed(2) : count + inc;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
}

window.addEventListener('scroll', (e) => {
  const top = counters[0].offsetTop;

  const { scrollTop, clientHeight, offsetHeight } = document.documentElement;

  /* if (scrollTop + clientHeight >= offsetHeight - 1) {
    loopCounter();
	} */

  if (scrollTop + clientHeight > top + 50) {
    loopCounter();
  } else {
    counters.forEach((counter) => {
      counter.innerText = '0';
    });
  }
});
