import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import c from "./searchbar.module.css";
export default function Searchbar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }
  return (
    <div className={c.searchbar}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar juego"
          type="text"
        ></input>
        <NavLink to={`/results/${name}`}>
          <button name="name" type="submit">
            <img
              width="20px"
              height="20px"
              src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-High-Quality-Image.png"
              alt=""
            />
          </button>
        </NavLink>
      </form>
    </div>
  );
}
