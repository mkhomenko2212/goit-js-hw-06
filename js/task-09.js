
const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;


const onChangeColor= () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyColor.style.backgroundColor;
}


changeColorBtn.addEventListener("click", onChangeColor);
