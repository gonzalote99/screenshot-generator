const wrapper = document.querySelector('.wrapper'),
ssInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
ssImg = wrapper.querySelector('.ss-img img');


generateBtn.addEventListener('click', () => {
let ssValue = ssInput.value;
if(!ssValue) return;
preValue = ssValue;
generateBtn.innerText = 'generating screenshot';
ssImg.src = `https://image.thum.io/get/width/1200/png/maxAge/1/wait/1/${ssValue}`;
ssImg.addEventListener('load', () => {
  wrapper.classList.add('active');
  generateBtn.innerText = 'generate screenshot';
});
});

ssInput.addEventListener('keyup', () => {
  if(!ssInput.value) {
    wrapper.classList.remove('active');
  }
})
