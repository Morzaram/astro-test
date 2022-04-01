import _ from "lodash";
export function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => posts);
}

export function getPost(id: number) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => post);
}

export function getCategories() {}

export async function fetchKantoPokemon() {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => data.results);
}

export async function fetchPokemonData(identifier: string | number) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
    .then((response) => response.json())
    .then((pokemon) => pokemon);
}

export async function generatePokemonPaths() {
  let pokemon = await fetchKantoPokemon();

  return pokemon.map((p) => {
    return {
      params: {
        pokemon: p.name,
      },
    };
  });
}
