import { onChangePages } from './onChangePage';
import { elementsList } from './ElementList';

const PORTION_PAGES = 10;
const root = document.querySelector('#root');

export const pagination = (elemets, rootList) => {
  elementsList(elemets.slice(0, PORTION_PAGES), rootList);
  const navNode = root.querySelector('.county_paginator');
  if (navNode) {
    navNode.parentNode.removeChild(navNode);
  }
  const pages = new Array(Math.ceil(elemets.length / PORTION_PAGES)).fill('');

  const pagesElement = pages
    .map((item, index) => {
      return `<li class="page-item ${index === 0 && 'active'}"><a class="page-link" href="#">${
        index + 1
      }</a></li>`;
    })
    .join(' ');

  const wrapperPagination = `
      <nav class="county_paginator" aria-label="county_paginator">
        <ul class="pagination pagination-sm mt-2 col-md-6 mx-auto">
            ${pagesElement}
        </ul>
      </nav>
  `;
  root.insertAdjacentHTML('afterbegin', wrapperPagination);

  const pagesRef = root.querySelectorAll('.page-item');

  pagesRef?.forEach(item =>
    item.addEventListener('click', e =>
      onChangePages(e, item, pagesRef, elemets, PORTION_PAGES, rootList),
    ),
  );
};
