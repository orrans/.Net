(function () {
  const peopleData = document.querySelector(".people .data");
  peopleData.innerHTML = "<ul></ul>";

  getPage("https://swapi.dev/api/people/", true);

  function getPage(url, getNext) {
    console.log("getting url", url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach(({ url, name }) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const charID = url.slice(0, -1).split(`/`).slice(-1);
          const picURL = `https://starwars-visualguide.com/assets/img/characters/${charID}.jpg`;
          li.id = `post_${url}`;
          li.innerText = `${name}`;
          img.src = picURL;
          img.classList.add(`img`);
          li.appendChild(img);
          peopleData.querySelector("ul").appendChild(li);
        });
        if (getNext) {
          const pages = Math.ceil(json.count / 10);
          for (let i = 0; i < pages; i++) {
            getPage(`https://swapi.dev/api/people/?page=${i+1}`, false);
          }
        }
      });
  }
})();

// https://swapi.dev/api/people/1

// https://starwars-visualguide.com/assets/img/characters/1.jpg
