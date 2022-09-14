import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createVideogame, getGenres } from "../../actions/index";
import c from "./create.module.css";

export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const genres1 = genres.slice(0, 10);
  const genres2 = genres.slice(10, 20);

  const [game, setGame] = useState({
    name: "",
    description: " ",
    image: "",
    released: "",
    rating: 1,
    genres: [],
    platforms: [],
  });
  const [error, setError] = useState({
    name: "",
    description: "",
    genres: "",
    platforms: "",
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (game.genres.length < 1) {
      setError({
        ...error,
        genres: "Tienes que elegir un genero",
      });
    } else {
      setError({
        ...error,
        genres: "",
      });
    }
    // console.log("game cambio", game.genres);
  }, [game.genres]);

  useEffect(() => {
    if (game.platforms.length < 1) {
      setError({
        ...error,
        platforms: "Tienes que elegir como minimo una plataforma",
      });
    } else {
      setError({
        ...error,
        platforms: "",
      });
    }
    // console.log("game cambio", game.genres);
  }, [game.platforms]);

  useEffect(() => {
    if (/\d/.test(game.name) || game.name.length < 1) {
      //*/\d/ si hay numeros
      setError({
        ...error,
        name: "El nombre esta vacio o contiene numeros",
      });
    } else {
      setError({
        ...error,
        name: "",
      });
    }
  }, [game.name]);

  useEffect(() => {
    if (!game.description) {
      setError({
        ...error,
        description: "La descripcion no puede estar vacia",
      });
    } else {
      setError({
        ...error,
        description: "",
      });
    }
  }, [game.description]);

  useEffect(() => {
    if (game.rating < 1 || game.rating > 5) {
      setError({
        ...error,
        rating: "La calificación tiene que estar dentro de (1 a 5)",
      });
    } else {
      setError({
        ...error,
        rating: "",
      });
    }
  }, [game.rating]);

  const randomPlatforms = [
    "PC",
    "iOS",
    "Android",
    "macOS",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox",
    "PS Vita",
  ];

  const ChangeInput = (e) => {
    if (e.target.name === "genres" || e.target.name === "platforms") {
      let arr = game[e.target.name];

      if (e.target.checked) {
        setGame({
          ...game,
          [e.target.name]: arr.concat(e.target.value),
        });
      }
      if (!e.target.checked) {
        setGame({
          ...game,
          [e.target.name]: arr.filter((r) => r !== e.target.value),
        });
      }
    } else {
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };

    // Validaciones
    if (!obj.name) {
      alert("Hey! Tienes que darle un nombre.");
      return;
    }
    if (!obj.description) {
      alert("Hey! Te falto darle una descripción.");
      return;
    }
    if (!obj.released) {
      alert("Hey! Olvidaste los datos de la fecha de lanzamiento.");
      return;
    }
    if (obj.rating > 5 || obj.rating < 0) {
      alert("Hey! La calificación debe estar entre 0 y 5.");
      return;
    }
    if (!obj.genres.length) {
      alert("Hey! Tienes que elegir 1 genero como minimo.");
      return;
    }
    if (!obj.platforms.length) {
      alert("Hey! Tienes que elegir 1 plataforma como minimo.");
      return;
    }

    dispatch(createVideogame(obj));
    e.target.reset();
    alert("Videojuego creado con éxito!");
    /* dispatch(getVideogames()) */

    setGame({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: 0,
      genres: [],
      platforms: [],
    });
  };

  return (
    <div className={c.background}>
      <div className={c.volver}>
        <Link className={c.quitar} to="/home">
          Volver
        </Link>
      </div>

      <div className={c.container}>
        <h1>Crea tu videojuego!</h1>
        <form
          id="survey-form"
          className={c.form}
          noValidate
          onChange={(e) => ChangeInput(e)}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={c.primero}>
            <div className={c.divTitles}>
              <div>
                <label>Nombre:</label>
                <input
                  className={c.label}
                  type="text"
                  name="name"
                  value={game.name}
                ></input>
                <div className={c.error}>
                  <p>
                    {error.name ===
                    "El nombre esta vacio o contiene numeros" ? (
                      <p>El nombre no puede estar vacio ni contener numeros.</p>
                    ) : null}
                  </p>
                </div>
              </div>
              <div>
                <label>Descripción:</label>
                <input
                  className={c.label}
                  type="text"
                  name="description"
                  value={game.description}
                ></input>
                <div className={c.error}>
                  <p>
                    {error.description ===
                    "La descripcion no puede estar vacia" ? (
                      <p>La descripcion no puede estar vacia.</p>
                    ) : null}
                  </p>
                </div>
              </div>
              <div className={c.fechayrating}>
                <div className={c.fecha}>
                  <label htmlFor="fecha">Publicación:</label>
                  <input
                    id="fecha"
                    className={c.label}
                    type="date"
                    name="released"
                    value={game.released}
                  ></input>
                </div>

                <div className={c.rating}>
                  <label htmlFor="rating">Clasificación:</label>
                  <input
                    id="rating"
                    className={c.label}
                    type="number"
                    name="rating"
                    value={game.rating}
                  ></input>
                  <div className={c.error}>
                    <p>
                      {error.rating ===
                      "La calificación tiene que estar dentro de (1 a 5)" ? (
                        <p>
                          La calificación tiene que estar dentro de (1 a 5).
                        </p>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className={c.imagen}>
                <label>URL Imagen:</label>
                <input
                  className={c.label}
                  type="text"
                  name="image"
                  value={game.image}
                ></input>
              </div>
            </div>
            <div className={c.segundo}>
              <div className={c.checkboxs}>
                <div className={c.checks}>
                  <label>Generos:</label>
                  <div className={c.gendivs}>
                    <div className={c.cuadraditos}>
                      {genres1.map((gen) => (
                        <div key={gen.id}>
                          <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                          ></input>

                          <label name={gen}>{gen.name}</label>
                        </div>
                      ))}
                    </div>
                    <div className={c.cuadraditos2}>
                      {genres2.map((gen) => (
                        <div key={gen.id}>
                          <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                          ></input>
                          <label name={gen}>{gen.name}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={c.error}>
                    <p>
                      {error.genres === "Tienes que elegir un genero" ? (
                        <p>Tienes que elegir minimo un genero.</p>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={c.tercero}>
              <div className={c.checks}>
                <label>Plataformas:</label>
                <div>
                  {randomPlatforms.map((P) => (
                    <div key={P}>
                      <label htmlFor={P} name={P}>
                        {P}
                      </label>
                      <input
                        key={P}
                        type="checkbox"
                        name="platforms"
                        value={P}
                      ></input>
                    </div>
                  ))}
                </div>
                <div className={c.error}>
                  <p>
                    {error.platforms ===
                    "Tienes que elegir como minimo una plataforma" ? (
                      <p>Tienes que elegir como minimo una plataforma.</p>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={c.button}>
            <button type="submit">Crear!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
