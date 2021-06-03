import { card } from './Card';

export const onCheckedCountry = (e, element, listCountiest, elemets) => {
  if (!e.target.classList.contains === 'list-group-item') {
    return;
  }
  listCountiest.forEach(item => item.classList.remove('active'));
  element.classList.add('active');

  const findElement = elemets.find(elem => elem.name === e.target.textContent);
  card([findElement]);
};
