export const fetchCountries = async name => {
  let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something wrong');
  }
  return data;
}; 
