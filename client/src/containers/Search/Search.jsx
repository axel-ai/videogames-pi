import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames } from "../../actions/index";
import Videogames from "../../components/Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import NotFound from "../../components/NotFound/NotFound";
import { Link, NavLink } from "react-router-dom";
import c from "./search.module.css";

export default function Search() {
  const dispatch = useDispatch();
  let { name } = useParams();

  const searchVideogame = useSelector((state) => state.searchVideogameByName);

  useEffect(() => {
    dispatch(searchVideogames(name));
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(8);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  // let currentPageGames = searchVideogame;
  let currentPageGames = searchVideogame.slice(
    firtsCardPerPage,
    lastCardPerPage
  );

  return (
    <div className={c.search}>
      {searchVideogame.length > 0 ? (
        <>
          <h1>Resultados con "{name}"</h1>
          <Videogames videogames={currentPageGames} />
          <Pagination
            videogamesPerPage={videogamesPerPage}
            totalVideogames={searchVideogame.length}
            paginate={paginate}
          />
        </>
      ) : (
        <NotFound image={"nogames"} />
      )}
      <Link className={c.btnatras} to={`/home`}>
        <button>VOLVER ATRAS</button>
      </Link>
    </div>
  );
}
