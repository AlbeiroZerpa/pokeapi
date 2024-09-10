import "./css/PokePage.css";
import pokeballDefault from "../assets/default.png";
import { FormEvent, useCallback, useState } from "react";
import { usePokemon } from "../Api/usePokemon";
import { usePokemonSpecies } from "../Hooks/usePokemonSpecies";
import { getNumberEvol } from "../helpers/getNumberEvol";
import { capitalizarText } from "../helpers/capitalizarText";
import { baseStats } from "../helpers/baseStats";
import { Spinner } from "../components/Spinner";

export function PokePage() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const loadApi = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(e.currentTarget.search?.value.toLowerCase() || "");
    e.currentTarget.search.value = "";
    loadApi();
  };

  const handleSubmitnext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pokeConsulta && typeof pokeConsulta.id === "number") {
      setId((pokeConsulta.id + 1).toString());
    }
  };

  const handleSubmitback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pokeConsulta && typeof pokeConsulta.id === "number") {
      setId((pokeConsulta.id - 1).toString());
    }
  };

  const { pokeConsulta } = usePokemon({ id });
  const { pokeSpecies, chainEvol } = usePokemonSpecies({ id });

  const renderDivEvol = useCallback(() => {
    const chainEvolNumber: string[] = getNumberEvol(chainEvol);
    return chainEvolNumber.map((element, index) => (
      <div className="col-4" key={index}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element}.png`}
          className="mx-auto d-block pokeballEvol"
        />
      </div>
    ));
  }, [chainEvol]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="pokedex pokeRed">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mt-2 mb-2 d-flex justify-content-center ">
                <div className="p-3 m-2 rounded-3 bg-light containerPokeball">
                  {pokeConsulta?.sprites?.front_default ? (
                    <img
                      src={pokeConsulta.sprites.front_default}
                      className="img-fluid rounded mx-auto d-block pokeball"
                      alt="..."
                    />
                  ) : (
                    <img
                      src={pokeballDefault}
                      className="img-fluid rounded mx-auto d-block pokeball"
                      alt="..."
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center col-12 mt-2">
                <div className="row m-2 p-2 rounded-3 pokeblue">
                  <form className="d-flex" method="get" onSubmit={handleSubmit}>
                    <input
                      name="search"
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Search"
                    />
                    <button type="submit" className="btn text-white btnSearch">
                      Buscar
                    </button>
                  </form>

                  {id !== "" && (
                    <>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Numero:
                          <br /> <b>{pokeConsulta?.id}</b>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Nombre:
                          <br />
                          <b>
                            {pokeConsulta?.name &&
                              capitalizarText(pokeConsulta?.name)}
                          </b>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Altura:
                          <br />
                          <b>
                            {pokeConsulta?.height &&
                              `${pokeConsulta.height / 10}` + " M"}
                          </b>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Tipos:
                          {pokeConsulta?.types?.[0]?.type.name && (
                            <ul>
                              {pokeConsulta?.types.map((type, index) => (
                                <li key={index}>
                                  {capitalizarText(type.type.name)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Habilidad:
                          {pokeConsulta?.abilities?.[0]?.ability.name && (
                            <ul>
                              {pokeConsulta?.abilities.map((ability, index) => (
                                <li key={index}>
                                  {capitalizarText(ability.ability.name)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 mt-1 border bg-light textDataPoke">
                          Sexo:
                          {pokeSpecies?.gender_rate !== undefined ? (
                            pokeSpecies?.gender_rate < 0 ? (
                              <ul>
                                <li>Sin Sexo</li>
                              </ul>
                            ) : (
                              <ul>
                                <li>Masculino</li>
                                <li>Femenino</li>
                              </ul>
                            )
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {pokeSpecies && (
                  <div className="container mb-4">
                    <div className="row">
                      <div className="col-6 d-grid">
                        <button
                          className="btn btn-dark btnh"
                          type="button"
                          onClick={handleSubmitback}
                        >
                          Anterior
                        </button>
                      </div>
                      <div className="col-6 d-grid ">
                        <button
                          className="btn btn-dark btnh"
                          onClick={handleSubmitnext}
                          type="button"
                        >
                          Siguiente
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 mt-1 mb-1">
                {pokeConsulta?.stats && (
                  <>
                    <div className="container rounded-3 pointsBase p-4">
                      <span className="card-title text-light fs-5">
                        <h5 className="card-title mt-2 mb-2 text-center">
                          Puntos Base
                        </h5>
                        {pokeConsulta.stats.map((baseInfo, index) => (
                          <>
                            <span>{capitalizarText(baseInfo.stat.name)}</span>
                            <div className="progress mb-1" key={index}>
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${baseStats(baseInfo.base_stat)}%`,
                                }}
                              >
                                {baseInfo.base_stat}
                              </div>
                            </div>
                          </>
                        ))}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="col-lg-6 col-12 mt-2 mb-2">
                {pokeConsulta?.types?.[0]?.type.name &&
                  pokeSpecies?.flavor_text_entries && (
                    <div className="container containerEntry rounded-3 text-white p-4">
                      <div className="row-auto">
                        <h5 className="card-title mt-2 text-center">
                          Datos de Entrada
                        </h5>
                        <p className="mt-3">
                          {
                            pokeSpecies?.flavor_text_entries.find(
                              (flavorEntry) => flavorEntry.language.name == "es"
                            )?.flavor_text
                          }
                        </p>
                      </div>
                      <div className="row-auto">
                        <h5 className="card-title mt-2 mb-2 text-center">
                          Tipo
                        </h5>
                        {pokeConsulta?.types.map((type, index) => (
                          <img
                            src={`../../public/icons/${type.type.name}.png`}
                            key={index}
                            className="badgeType m-1 text-center"
                          />
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
            {pokeSpecies?.evolution_chain && (
              <>
                <div className="container rounded-3 p-5 containerEvo">
                  <div className="row rowEvol mb-3">
                    <span className="card-title text-light fs-5 text-center">
                      Evoluciones
                    </span>
                    {renderDivEvol()}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
