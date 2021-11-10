const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pName = prophets[i].name + ' ' + prophets[i].lastname;
        h2.textContent = pName;
        card.appendChild(h2);
        

        let p1 = document.createElement('p');
        p1.textContent = 'Birth Date: ' + prophets[i].birthdate;
        card.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = 'Birth Place: ' + prophets[i].birthplace;
        card.appendChild(p2);

        let img = document.createElement('img');
        img.setAttribute('src', prophets[i].imageurl, 'alt', pName);
        card.appendChild(img);

        // card.setAttribute('class', card);

        document.querySelector('div.cards').appendChild(card);
    }
  });

  