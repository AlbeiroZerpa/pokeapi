import { useEffect, useState } from "react";
import { PokemonSpecies } from "../interfaces/pokemonSpecies";
import { IdPoke } from "../interfaces/idPoke";
import { useChainEvol } from "./useChainEvol";

export const usePokemonSpecies = ({ id }: IdPoke) => {
  const [pokeSpecies, setPokeSpecies] = useState<PokemonSpecies | null>(null);
  const [chainEvolUrl, setChainEvolUrl] = useState("");
  useEffect(() => {
    if (
      (typeof id !== "number" && typeof id !== "string") ||
      (typeof id === "number" && isNaN(id)) ||
      id === ""
    ) {
      return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeSpecies(data);
        setChainEvolUrl(data.evolution_chain.url);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const chainEvolId = Number(chainEvolUrl.split("/")[6]);
  const { chainEvol } = useChainEvol(chainEvolId);

  return { pokeSpecies, chainEvol };
};
