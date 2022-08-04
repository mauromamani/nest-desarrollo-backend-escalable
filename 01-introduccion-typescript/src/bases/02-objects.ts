export const pokemonIds = [12, 231, 3];

export interface Pokemon {
  name: string;
  age: number;
}

export const pokemon: Pokemon = {
  name: 'pokemon #1',
  age: 12,
};

pokemonIds.push(22);

export const pokemons: Pokemon[] = [];

export class PokemonClase implements Pokemon {
  constructor(public readonly age: number, public readonly name: string) {}
}
