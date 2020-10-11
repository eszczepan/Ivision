import jobs from './data.js';
import generateJobs from './generateJobs.js';

generateJobs(jobs);

// LIGHTBOX
const lightbox = document.querySelector('.lightbox');
const headerBtn = document.querySelector('.header__button');
const lightboxBtn = document.querySelector('.lightbox__button');

const openModal = () => {
  lightbox.classList.remove('closed');
}

const closeModal = () => {
  if (lightbox.matches(".closed")) return;
  lightbox.classList.add('closed');
}

const handleClickOutside = (e) => {
  if (e.target === e.currentTarget) closeModal();
}

const handleKeyUp = (e) => {
  if (e.key === "Escape") return closeModal();
}

headerBtn.addEventListener('click', openModal);
lightboxBtn.addEventListener('click', closeModal);
lightbox.addEventListener("click", handleClickOutside);
window.addEventListener("keyup", handleKeyUp);


// BURGER MENU 
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const handleClick = () => {
  menu.classList.toggle('open');
  burger.classList.toggle('burger--active');
}

burger.addEventListener('click', handleClick);