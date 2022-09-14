import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import "./Videogames.css";

export default function Videogames({ videogames }) {
  return (
    <div className="showing">
      {videogames.length > 0 ? (
        videogames.map((data) => <Card key={data.id} data={data} />)
      ) : (
        <Loading />
        // <h3>No se encontro ningun videojuego con esas caracteristicas</h3>
      )}
    </div>
  );
}
