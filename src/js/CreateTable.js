import { card } from './Card';
import { elementsList } from './ElementList';
import { pagination } from './Pagination';
import { clearPaginator } from './ClearPagination';

export const createTable = elements => {
  const rootList = document.querySelector('#root1');
  rootList.innerHTML = null;
  if (!Array.isArray(elements)) throw 'Something wrong';

  if (elements.length > 1 && elements.length < 10) {
    clearPaginator();
    elementsList(elements, rootList);
  }
  if (elements.length > 10) {
    pagination(elements, rootList);
  }
  if (elements.length === 1) {
    clearPaginator();
    card(elements);
  }
};
