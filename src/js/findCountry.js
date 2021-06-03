
import CountryList from '../templates/country-list.hbs';

 const refs = {
  listContainer: document.querySelector('.js-list-conainer'),
};
/* fetchCountrybyName().then(renderCountryList).catch(onFetchError); */

/* const inputRef = document.querySelector('#country'); */

/* function fetchCountrybyName() {
  return fetch(`https://restcountries.eu/rest/v2/name/om`).then(response => {
    return response.json();
  });
} */
fetchCountrybyName();
function fetchCountrybyName() {
    fetch(`https://restcountries.eu/rest/v2/name/om`)
    .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country);
    });
}

function renderCountryList(country) {
  const markup = CountryList(country);
    refs.listContainer.innerHTML = markup;
    
} 

 function onFetchError(error) {
  alert('Упс, что-то пошло не так');
} 

export const elementsList = (elements, rootList) => {
  const arrElemetns = elements
    .map(element => {
      return `<li class="list-group-item">${element.name}</li>`;
    })
    .join('');

  const rootUl = document.createElement('ul');
  rootUl.classList.add('list-group');

  rootUl.innerHTML = arrElemetns;
  rootList.append(rootUl);

  const listCountiest = document.querySelectorAll('#root1 .list-group-item');

  listCountiest.forEach(counry =>
    counry.addEventListener('click', e => onCheckedCountry(e, counry, listCountiest, elements)),
  );
};