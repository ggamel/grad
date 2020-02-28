// random number between min and max
const num = max => Math.floor(Math.random() * (max + 1));
// create rgb from rand number and value
const rgba = () =>
  `rgba(${num(255)}, ${num(255)}, ${num(255)}, ${Math.random()})`;
const directions = ['to top', 'to right', 'to bottom', 'to left'];
const direction = () =>
  directions[Math.floor(Math.random() * directions.length)];
// TODO: add default of index 0
// TODO: add hotkey to cycle array for gradient direction
// grad = () => `linear-gradient(${direction()}, ${rgb()} 0%, ${rgb()} 100%)`;
const grad = () => `
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%)
  `;

const apply = bg => {
  document.getElementsByClassName('grad')[0].style.backgroundImage = bg;
};

const bg = grad();
apply(bg);
