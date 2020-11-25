const counter = document.querySelector('.counter');
const counts = document.querySelectorAll('.count');
const speed = 500;
let i = 0;

function loopCounter() {
  counts.forEach((count) => {
    const updateCount = () => {
      const target = +count.getAttribute('data-target');
      const countDOM = +count.innerText;

      const inc = target / speed;
      if (countDOM < target) {
        count.innerText =
          (countDOM + inc) % 1 !== 0
            ? (countDOM + inc).toFixed(2)
            : countDOM + inc;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
}

window.addEventListener('scroll', (e) => {
  const top = counter.offsetTop;

  const { scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight > top + 100) {
    loopCounter();
  } else {
    counts.forEach((count) => {
      count.innerText = '0';
    });
  }
});
