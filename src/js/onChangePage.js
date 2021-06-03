import { elementsList } from './ElementList';

export const onChangePages = (e, item, pagesRef, arr, PORTION_PAGES, rootList) => {
  rootList.textContent = null;

  const target = e.target;
  if (!target.classList.contains === 'page-item') return;
  pagesRef.forEach(page => page.classList.remove('active'));
  item.classList.add('active');
  const value = parseInt(item.textContent);

  const start = (value - 1) * PORTION_PAGES;
  const end = start + PORTION_PAGES;

  const pageShowArr = arr.slice(start, end);
  elementsList(pageShowArr, rootList);
};
