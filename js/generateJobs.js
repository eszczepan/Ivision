const generateJobs = (data) => {
  const lightboxList = document.querySelector('.lightbox__list');
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

export default generateJobs;