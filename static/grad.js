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
  linear-gradient(${direction()}, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${direction()}, ${rgba()} 0%, ${rgba()} ${num(100)}%), 
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%),
  linear-gradient(${num(360)}deg, ${rgba()} 0%, ${rgba()} ${num(100)}%)
  `;

const apply = bg => {
  // document.getElementsByClassName('grad')[0].style.backgroundImage = bg;
  document
    .getElementsByClassName('grad')[0]
    .setAttribute('style', `background: ${bg}`);

  document.styleSheets[0].addRule(
    'body:before',
    `
    content: ""; 
    position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
    right: 0; 
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(black));
    -webkit-mask-image: linear-gradient(to bottom, transparent, black);
		mask-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(black));
    mask-image: linear-gradient(to bottom, transparent, black);
    `
  );

  document.getElementsByClassName('code')[0].value = bg;
};

const bg = grad();
apply(bg);
