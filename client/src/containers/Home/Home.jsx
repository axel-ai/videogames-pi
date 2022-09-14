import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogameById,
  getVideogames,
  getVideogamesDb,
  resetAll,
  getVideogamesApi,
  changePagina,
  getGenres,
} from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../Filter/Filter";
import c from "./home.module.css";
import Searchbar from "../../Searchbar/Searchbar";

import Btnes from "../Btnes/Btnes";

export default function Home() {
  const dispatch = useDispatch();

  const pag = useSelector((state) => state.pagina);
  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const origen = useSelector((state) => state.origen);
  const videogames = useSelector((state) => state.videogames);
  const videogamesdb = useSelector((state) => state.videogamesdb);
  const videogamesapi = useSelector((state) => state.videogamesapi);

  useEffect(() => {
    // dispatch(resetAll());
    dispatch(getVideogames());
    dispatch(getVideogamesDb());
    dispatch(getVideogamesApi());
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // eslint-disable-line react-hooks/exhaustive-deps

  // Filtrado y Ordenado

  let allVideogames;

  if (filterBy === "All" && orderBy === "All" && origen === "All") {
    allVideogames = videogames;
  } else {
    allVideogames = filteredVideogames;
  }

  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    // console.log(num);
    dispatch(changePagina(num));
    // setPage(pag);
  }

  // const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(12);

  let lastCardPerPage = pag * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div className={c.container}>
      <div className={c.container2}>
        <Filter paginate={paginate} />
        <Btnes />
        <Searchbar />
      </div>
      <div className={c.home}>
        <Videogames videogames={currentPageGames} />
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={allVideogames.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
