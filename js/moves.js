const pokemonMoves = document.querySelector('#pokemonMoves');

const mostrarMovimientos = (pokemon) => {
  pokemonMoves.innerHTML = /*html*/`
  <div class="card border-danger bg-danger text-white" style="width: 18rem;">
  <img src="${pokemon.sprite.home.front_default}" class="card-img-top" alt="Pokemon actual">
      <div class="card-body">
      <h5 class="card-title">${pokemon.Name.toUpperCase()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        ${pokemon.Movements.map(el=>listarMovimientos(el)).join('')}
      </ul>
      <div class="card-body bg-dark d-flex justify-content-evenly">
        <a href="./index.html" class="card-link text-decoration-none link-light fw-bold"><i class="bi bi-house-door"></i> Inicio</a>
      </div>
    </div>
  `
}

const listarMovimientos = (movimiento) => {
  const nombreMovimiento = movimiento.move.name;
  return `<li class="list-group-item border-danger list-group-item-action fw-bold">${nombreMovimiento}</li>`
}

var NoPokemonModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
  keyboard: false
})

if(localStorage.getItem("pokedesk")) {
  console.log("Hay")
  const initialState = localStorage.getItem("pokedesk");
  mostrarMovimientos(JSON.parse(initialState));
} else {
  NoPokemonModal.show()
  console.log("No hay")
}
