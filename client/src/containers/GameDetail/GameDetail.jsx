import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById, clearDetails } from "../../actions/index";
import NotFound from "../../components/NotFound/NotFound";
import c from "./gamedetail.module.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(clearDetails());
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getVideogameById(id));
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={c.container}>
      <div className={c.padre}>
        <div className={c.hijo}>
          <div className={c.imagen}>
            <img src={videogame.image} alt={videogame.name} />
          </div>
          <div className={c.cuadrado}></div>

          <div className={c.nombre}>
            <h1>{videogame.name} </h1>
          </div>

          <div className={c.fecha}>
            <h5>
              Fecha de lanzamiento: <p>({videogame.released})</p>
            </h5>
          </div>

          <div className={c.detalle}>
            Detalle: <p>{videogame.description}</p>
          </div>

          <div className={c.generos}>
            <h5>
              Generos: <p>{videogame.genres}</p>
            </h5>
          </div>
          <div className={c.clasificacion}>
            <h5>
              Clasificación:
              <p>★{videogame.rating}</p>
            </h5>
          </div>
          <div className={c.plataformas}>
            <h5>Plataformas:</h5>
            <p>{videogame.platforms}</p>
          </div>
          <Link to="/home" className={c.boton}>
            <button type="submit">🡸</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
