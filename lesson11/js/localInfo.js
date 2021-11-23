const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement("article");

      let data = document.createElement("div");
      card.appendChild(data);

      let h2 = document.createElement("h2");
      let name = towns[i].name;
      if (name == "Preston" || name == "Soda Springs" || name == "Fish Haven") {
        let img = document.createElement("img");
        img.setAttribute("src", `images/${towns[i].photo}`);
        img.setAttribute("alt", name);
        card.appendChild(img);

        h2.textContent = name;
        data.appendChild(h2);

        let p1 = document.createElement("p");
        p1.textContent = towns[i].motto;
        data.appendChild(p1);

        let year = document.createElement("p");
        year.textContent = `Year Founded: ${towns[i].yearFounded}`;
        data.appendChild(year);

        let curPop = document.createElement("p");
        curPop.textContent = `Current Population: ${towns[i].currentPopulation}`;
        data.appendChild(curPop);

        let rain = document.createElement("p");
        rain.textContent = `Average Rainfall: ${towns[i].averageRainfall}`;
        data.appendChild(rain);

        // events
        let h3 = document.createElement("h3");
        h3.textContent = "Events:";
        data.appendChild(h3);
        for (let x = 0; x <= towns[i].events.length; x++) {
          let event = document.createElement("p");
          event.textContent = towns[i].events[x];
          data.appendChild(event);
        }

        // data.setAttribute("class", "tdata");
        document.querySelector("section.localInfo").appendChild(card);
      }
    }
  });
