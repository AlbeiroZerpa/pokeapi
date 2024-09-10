import { useEffect, useState } from "react";
import { Chain, ChainEvolution } from "../interfaces/chainEvolve";

export const useChainEvol = (id: string | number) => {
  const [chainEvol, setChainEvol] = useState<string[]>([]);

  useEffect(() => {
    if (
      (typeof id !== "number" && typeof id !== "string") ||
      (typeof id === "number" && isNaN(id)) ||
      id === ""
    ) {
      return;
    }
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
      .then((response) => response.json())
      .then((data: ChainEvolution) => {
        const speciesNames: string[] = [];
        function extractSpecies(chain: Chain) {
          if (chain.species) {
            speciesNames.push(chain.species.url);
          }
          if (chain.evolves_to && chain.evolves_to.length > 0) {
            chain.evolves_to.forEach((evolution) => {
              extractSpecies(evolution);
            });
          }
        }
        extractSpecies(data.chain);
        setChainEvol(speciesNames);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return { chainEvol };
};
