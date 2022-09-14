import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getGenres,
  filterByGenre,
  orderByCreator,
  orderAsc,
  orderDesc,
} from "../../actions/index";
import c from "./filter.module.css";

export function Filter({ paginate }) {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);

  // useEffect(() => {
  //   dispatch(getGenres());
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Filtrado por genre
  const handleFilter = (e) => {
    // console.log(e.target.value);
    dispatch(filterByGenre(e.target.value));
    paginate(e, 1);
  };

  // Ordenado
  const handleOrder = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else if (
      e.target.value === "desc_name" ||
      e.target.value === "desc_rating"
    ) {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(orderAsc(e.target.value));
    }
  };

  // Filtrado por API/DB
  const handleCreator = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(orderByCreator(e.target.value));
      paginate(e, 1);
    }
    if (e.target.value === "All") {
      dispatch(orderByCreator(e.target.value));
      paginate(e, 1);
    }
  };

  return (
    <div className={c.filter}>
      <div>
        <h2>FILTROS</h2>
        <div>Género</div>
        <select onChange={(e) => handleFilter(e)}>
          <option value="All" default>
            Todos
          </option>
          {genres.map((G) => (
            <option key={G.id} value={G.name}>
              {G.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>A-z | Z-a/Rating</div>

        <select onChange={(e) => handleOrder(e)}>
          <option value="All" default>
            Todos
          </option>
          <option value="asc_name">Alfabéticamente (A-Z)</option>
          <option value="desc_name">Alfabéticamente (Z-A)</option>
          <option value="asc_rating">Rating (Menor-Mayor)</option>
          <option value="desc_rating">Rating (Mayor-Menor)</option>
        </select>
      </div>
      <div>
        <div>Origen</div>
        <select onChange={(e) => handleCreator(e)}>
          <option value="All" default>
            Todos
          </option>
          <option value="Api">Api</option>
          <option value="Created">Base Datos</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
