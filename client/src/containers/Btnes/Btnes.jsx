import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  getGenres,
  getVideogames,
  getVideogamesApi,
  getVideogamesDb,
  resetAll,
} from "../../actions";
import c from "./btn.module.css";
export default function Btnes() {
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
    dispatch(getVideogames());
    dispatch(getVideogamesDb());
    dispatch(getVideogamesApi());
    dispatch(getGenres());
  }
  return (
    <div className={c.container}>
      {/* <div className={c.inicio}>
        <Link className={c.quitar} to="/">
          <h3>INICIO</h3>
          <img
            src="https://cdn.icon-icons.com/icons2/203/PNG/128/diagram-06_24511.png"
            alt=""
            width="50px"
            height="50px"
          />
        </Link>
      </div> */}

      {/* <div className={c.inicio}>
        <Link className={c.quitar} to="/home">
          <h3>JUEGOS</h3>
        </Link>
      </div> */}
      <div className={c.crear}>
        <Link className={c.quitar} to="/create">
          <h3>CREAR</h3>
          <img
            src="https://cdn.icon-icons.com/icons2/262/PNG/64/add_29356.png"
            alt=""
            width="50px"
            height="50px"
          />
        </Link>
      </div>
      <div className={c.eliminar}>
        <Link className={c.quitar} to="/delete">
          <h3>ELIMINAR</h3>
          <img
            src="https://cdn.icon-icons.com/icons2/262/PNG/64/trash_can_29441.png"
            alt=""
            width="50px"
            height="50px"
          />
        </Link>
      </div>
      {/* <div className={c.reset} onClick={reset}>
        <h3>REINICIAR</h3>
        <img
          src="https://cdn.icon-icons.com/icons2/262/PNG/64/trash_can_29441.png"
          alt=""
          width="50px"
          height="50px"
        />
      </div> */}
    </div>
  );
}
