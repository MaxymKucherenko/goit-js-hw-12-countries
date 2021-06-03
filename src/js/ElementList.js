import { onCheckedCountry } from './onCheckedCountry';

export const elementsList = (elements, rootList) => {
  const arrElemetns =  elements.map(element => {
    return `<li class="list-group-item">${element.name}</li>`
  }).join('')

  const rootUl = document.createElement('ul')
  rootUl.classList.add('list-group')

  rootUl.innerHTML = arrElemetns
  rootList.append(rootUl)

  const listCountiest = document.querySelectorAll('#root1 .list-group-item')

  listCountiest.forEach(counry => counry.addEventListener('click',
    (e)=>onCheckedCountry(e,counry,listCountiest, elements))
  )
}
