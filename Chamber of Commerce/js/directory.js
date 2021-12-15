const requestURL = "json/directory.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    const directory = jsonObject["directory"];
    console.table(directory);// get rid of when done.
    for(let i = 0; i < directory.length; i++){
        let card = document.createElement("div");
        card.setAttribute("class", "card")
        
        let logo = document.createElement("img");
        imgUrl = directory[i].logo;
        imgAlt = directory[i].logoAlt;
        logo.setAttribute("src", imgUrl);
        logo.setAttribute("alt", imgAlt);
        card.appendChild(logo);

        let container = document.createElement("div");

        let h3 = document.createElement("h3");
        let name = directory[i].businessName;
        h3.textContent = name;
        console.log(name);
        container.appendChild(h3);

        

        let p = document.createElement("p");
        p.textContent = `☎️${directory[i].phone}`;
        container.appendChild(p);
        let address = document.createElement("p");
        address.textContent = `📍${directory[i].address} ${directory[i].zip}`;
        container.appendChild(address);

        let site = document.createElement("a");
        let webAddress = directory[i].website;
        site.textContent = "Visit Website";
        site.setAttribute("href", webAddress);
        container.appendChild(site);
        card.appendChild(container);

        document.querySelector("section.directory").appendChild(card);
    }
})