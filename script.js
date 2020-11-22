const counters = document.querySelectorAll('.counter');
const speed = 500;
let i = 0;

function loopCounter() {
  counters.forEach((counter) => {
    counter.innerText = '';

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
  const { scrollTop, clientHeight, offsetHeight } = document.documentElement;

  if (scrollTop + clientHeight >= offsetHeight - 1) {
    loopCounter();
  }
});
