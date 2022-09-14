import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  deleteGame,
  getVideogames,
  getVideogamesDb,
  orderByCreator,
} from "../../actions/index";

import c from "./delete.module.css";

export default function Delete() {
  const juegos = useSelector((state) => state.videogamesdb);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogamesDb());
  }, [dispatch]);

  function eliminar(e) {
    e.preventDefault();
    dispatch(deleteGame(e.target.value));
    alert(`${e.target.value} Eliminado`);
    dispatch(getVideogamesDb());
  }

  // function ver(e) {
  //   e.preventDefault();
  //   console.log(juegos);
  // }

  return (
    <>
      <div>
        <Link className={c.btnVolver} to="/home">
          Volver
        </Link>
      </div>
      <div className={c.container}>
        {juegos.length > 0
          ? Array.isArray(juegos)
            ? juegos.map((e) => (
                <div key={e.id} className={c.card}>
                  <div className={c.textCard}>
                    <div className={c.nameGenres}>
                      <div className={c.name}>{e.name}</div>
                    </div>
                  </div>
                  <div className={c.btn}>
                    <button value={e.name} onClick={eliminar}>
                      X
                    </button>
                  </div>
                </div>
              ))
            : null
          : null}
      </div>
    </>
  );
}
