function buscarCarta() {
  let nome = document.getElementById("carta").value;
  let url = "https://api.magicthegathering.io/v1/cards?name=" + nome;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let cartas = data.cards;
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      if (cartas.length == 0) {
        resultado.innerHTML = "Nenhuma carta encontrada";
      }

      cartas.forEach((carta) => {
        let div = document.createElement("div");
        div.innerHTML = "<p>" + carta.name + "</p>";

        if (carta.imageUrl) {
          let img = document.createElement("img");
          img.src = carta.imageUrl;
          img.width = 200;
          div.appendChild(img);
        }

        resultado.appendChild(div);
      });
    });
}
