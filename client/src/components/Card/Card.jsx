import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import c from "./card.module.css";

function Card({ data }) {
  return (
    <Link className={c.quitar} to={`/videogames/${data.id}`}>
      <div className={c.card}>
        {data.image === null || !data.image ? null : (
          <img className={c.img} src={data.image} alt={data.name} />
        )}

        <div className={c.textCard}>
          <div className={c.nameGenres}>
            <div className={c.name}>{data.name}</div>
            <div className={c.genres}>{data.genres}</div>
          </div>
          <div className={c.divRating}>
            <div className={c.rating}>★ {data.rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
