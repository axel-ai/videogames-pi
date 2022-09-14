import React from "react";
import { Link } from "react-router-dom";
import c from "./landingpage.module.css";

export default function LandingPage() {
  return (
    <div className={c.contenedor}>
      <section>
        {/* <div className={c.circle}></div> */}
        <div className={c.content}>
          <div className={c.titulo}>
            <h2>
              Proyecto Individual <br />
              <span>
                VIDEO <br /> GAMES
              </span>
            </h2>
          </div>

          {/* <div className={c.imagen}>
            <img
              src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png"
              alt=""
              width="300px"
              height="250px"
            />
          </div> */}

          <div className={c.text}>
            {/* <h3>INFO</h3>
            <p>
              Pagina donde se pueden ver los distintos videojuegos disponibles
              junto con información relevante de los mismos utilizando la api
              externa rawg y a partir de ella poder, entre otras cosas: <br />
              Buscar juegos en específico <br />
              filtrar juegos por género, alfabéticamente o rating, origen sea
              Api o Db
              <br />
              crear juegos guardandolos en nuestra base de datos
            </p> */}

            <Link className={c.btn} to="/home">
              COMENZAR!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
