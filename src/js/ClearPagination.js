const root = document.querySelector('#root');
export const clearPaginator = () => {
  const navNode = root.querySelector('.county_paginator');
  if (navNode) {
    navNode.parentNode.removeChild(navNode);
  }
};
