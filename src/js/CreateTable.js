import { card } from './Card';
import { elementsList } from './ElementList';
import { swalAlert } from './SawapAllerts';


export const createTable = elements => {
  const rootList = document.querySelector('#root1');
  rootList.innerHTML = null;
  if (!Array.isArray(elements)) throw 'Something wrong';

  if (elements.length > 1 && elements.length < 10) {
    elementsList(elements, rootList);
  }
    if (elements.length > 10) {
        swalAlert('Too many matches found. Please enter a more specific query!');
    };
  
  if (elements.length === 1) {
    card(elements);
  }
};
