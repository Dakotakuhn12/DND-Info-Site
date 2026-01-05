const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

console.log("hello");

const monster = document.querySelector(".monster");

const search_button = document.getElementById("search_button");

const mosnter_info_display = document.getElementById(".mosnter_info_display");

const monster_data = monster.value.trim();

url = `https://www.dnd5eapi.co/api/2014/monsters/${monster_data}`;

search_button.addEventListener("click", () => {
  function getMonster() {
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    mosnter_info_display.append(result);
  }
  getMonster();
});
