/*  export const fetchCountries = async name => {
  let response = await c;
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something wrong');
  }
  return data;
}; */
import CountryCard from '../templates/country-Card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-conainer'),
};
fetchCountrybyName()
    .then(renderCountryCard)
    .catch(onFetchError);

function fetchCountrybyName() {
    return fetch(`https://restcountries.eu/rest/v2/alpha/AUT`).then(response => {
      return response.json();
    });    
}

function renderCountryCard(country) {
    const markup = CountryCard(country);
    refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
    alert('Упс, что-то пошло не так');
}