const imageContainer = document.querySelector('.image-container');
const heartsContainer = document.querySelector('.hearts');

let lastClickTime = 0;

imageContainer.addEventListener('click', (e) => {
  const currentTime = new Date().getTime();

  if (currentTime - lastClickTime < 500) {
    createHeart(e);
  }// if currentTime is 600 ms and lastClickTime is 200 ms, difference is 400 ms < 500 ms

  lastClickTime = currentTime;
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart', 'heart');

  const x = e.clientX; // get x coordinate of click
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;// get left offset of image container from the page 
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
};