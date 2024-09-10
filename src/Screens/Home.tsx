import "./css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="container-fluid d-flex flex-column text-white justify-content-center align-items-center image__Slider image--Slider--1">
          <h1 className="text-center">
            ¡Conoce todo sobre tu Pokémon favorito!
          </h1>
          <span className="fs-4">
            Mediante la PokeApi puedes recibir muchos datos interesantes...
          </span>
          <div className="row mt-3">
            <div className="col-6">
              <button className="btn btn-danger">
                <Link to="PokePage" className="nav-link active">
                  Ir Ahora
                </Link>
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary">
                <Link to="https://pokeapi.co/" className="nav-link active">
                  PokeApi
                </Link>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container-fluid d-flex flex-column text-white justify-content-center align-items-center image__Slider image--Slider--2">
          <h1 className="text-center">
            ¡Conoce todo sobre tu Pokémon favorito!
          </h1>
          <span className="fs-4">
            Mediante la PokeApi puedes recibir muchos datos interesantes...
          </span>
          <div className="row mt-3">
            <div className="col-6">
              <button className="btn btn-danger">
                <Link to="PokePage" className="nav-link active">
                  Ir Ahora
                </Link>
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary">
                <Link to="https://pokeapi.co/" className="nav-link active">
                  PokeApi
                </Link>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
