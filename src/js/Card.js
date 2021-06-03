export const card = element => {
  const rootCard = document.querySelector('#root2');
  rootCard.innerHTML = '';

  const { name, languages, population, capital, flag } = element[0];

  const languageElemetns = languages.map(item => `<li>${item.name}</li>`).join('');

    
  const cardBody = `<div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Capital -
                                            <small class="text-primary">${capital}</small>
                                    </h4>
                                     <h3 class="card-title">Population -
                                            <small class="text-primary">${population}</small>
                                    </h3>
                                          <h3>Language:</h3>
                                         <ul>
                                                        ${languageElemetns}
                                         </ul>
                                </div>
                            </div>
                                <div class="col-md-4">
                                    <img src=${flag} alt="flag">
                                 </div>
                            </div>`;

  const itemCard = document.createElement('div');
  itemCard.classList.add('card');
  itemCard.classList.add('md-12');
  itemCard.style = 'max-width: 540px;';
  itemCard.innerHTML = `<h2 class="text-center">${name}</h2>`;
  itemCard.insertAdjacentHTML('beforeend', cardBody);

  rootCard.append(itemCard);
};
