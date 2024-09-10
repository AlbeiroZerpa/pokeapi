import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/pokemon";
import { IdPoke } from "../interfaces/idPoke";

export const usePokemon = ({ id }: IdPoke) => {
  const [pokeConsulta, setpokeConsulta] = useState<Pokemon | null>(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setpokeConsulta(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  return { pokeConsulta };
};
