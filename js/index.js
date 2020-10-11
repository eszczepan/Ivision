import jobs from './data.js';

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

const generateJobs = (data) => {
  const lightboxList = lightbox.querySelector('.lightbox__list');
  data.map(element => {
    const item = document.createElement('li');
    item.classList.add("lightbox__item");

    const pJob = document.createElement('p');
    pJob.classList.add("lightbox__job");
    pJob.innerText = element.job;

    const pCity = document.createElement('p');
    pCity.classList.add("lightbox__city");
    pCity.innerText = element.city;

    item.appendChild(pJob);
    item.appendChild(pCity);
    
    lightboxList.appendChild(item);
  })
}

generateJobs(jobs);