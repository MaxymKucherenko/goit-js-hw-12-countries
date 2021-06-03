import './sass/main.scss';
import debounce from 'lodash/debounce';
import { fetchCountries } from './js/fetchCountries';
import { swalAlert } from './js/SawapAllerts';
import { createTable } from './js/CreateTable';

const rootList = document.querySelector('#root');
const rootLeft = document.querySelector('#root1');
const rootRight = document.querySelector('#root2');
const inputRef = document.querySelector('#country');

const onInput = e => {
  const value = e.target.value.trim();

  if (value.length === 0) {
    const navNode = rootList.querySelector('.county_paginator');
    if (navNode) {
      navNode.parentNode.removeChild(navNode);
    }
    rootLeft.innerHTML = '';
    rootRight.innerHTML = '';
    return;
  }

  fetchCountries(value)
    .then(res => {
      rootLeft.innerHTML = '';
      rootRight.innerHTML = '';
      if (res.length > 0) {
        createTable(res);
      }
    })
    .catch(err => {
      if (err.message === 'Unexpected end of JSON input') {
        rootLeft.innerHTML = '';
        rootRight.innerHTML = '';
        return;
      }
      swalAlert(err.message);
    });
};

inputRef.addEventListener('input', debounce(onInput, 500));