// export function getVideogames() {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/videogames`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: "GET_VIDEOGAMES", payload: json });
//       });
//   };
// }

export function getVideogames() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/videogames`);
    const devolver = await res.json();
    // console.log("getVideogames");
    return dispatch({ type: "GET_VIDEOGAMES", payload: devolver });
  };
}
export function getVideogamesDb() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/videogames`);
    const devolver = await res.json();
    let juegosDb = Object.values(devolver).filter(
      (e) => e.source === "Created"
    );
    // console.log("getVideogamesDb");
    return dispatch({ type: "GET_VIDEOGAMESdb", payload: juegosDb });
  };
}
export function getVideogamesApi() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/videogames`);
    const devolve = await res.json();
    let juegosApi = Object.values(devolve).filter((e) => e.source === "Api");

    // console.log("getVideogamesApi");
    return dispatch({ type: "GET_VIDEOGAMESapi", payload: juegosApi });
  };
}

// export function searchVideogames(name) {
//   return (dispatch) =>
//     fetch(`http://localhost:3001/videogames?name=${name}`)
//       .then((resp) => resp.json())
//       .then((json) => {
//         dispatch({
//           type: "SEARCH_VIDEOGAMES",
//           payload: json,
//         });
//       });
// }
export function searchVideogames(name) {
  return async function (dispatch) {
    const devolver = await fetch(
      `http://localhost:3001/videogames?name=${name}`
    );
    const json = await devolver.json();
    dispatch({
      type: "SEARCH_VIDEOGAMES",
      payload: json,
    });
  };
}

export function getVideogameById(id) {
  return async function (dispatch) {
    const devolver = await fetch(`http://localhost:3001/videogame/${id}`);
    const json = await devolver.json();
    dispatch({
      type: "GET_VIDEOGAME_BY_ID",
      payload: json,
    });
  };
}
// export function getVideogameById(id) {
//   return (dispatch) =>
//     fetch(`http://localhost:3001/videogame/${id}`)
//       .then((resp) => resp.json())
//       .then((json) => {
//         dispatch({
//           type: "GET_VIDEOGAME_BY_ID",
//           payload: json,
//         });
//       });
// }

export function getGenres() {
  return async function (dispatch) {
    const devolver = await fetch(`http://localhost:3001/genres`);
    const json = await devolver.json();
    dispatch({
      type: "GET_GENRES",
      payload: json,
    });
  };
}
// export function getGenres() {
//   return (dispatch) =>
//     fetch(`http://localhost:3001/genres`)
//       .then((resp) => resp.json())
//       .then((json) => {
//         dispatch({
//           type: "GET_GENRES",
//           payload: json,
//         });
//       });
// }

export function createVideogame(obj) {
  return (dispatch) =>
    fetch("http://localhost:3001/videogame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_VIDEOGAME",
          payload: json,
        });
      });
}

export const resetAll = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};
export const changePagina = (num) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_PAGINA",
      payload: num,
    });
  };
};

export const clearDetails = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_DETAIL",
      payload,
    });
  };
};

export function deleteGame(name) {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/videogame/${name}/delete`, {
      method: "DELETE",
    });
    const json = await res.json();
    dispatch({
      type: "DELETE_VIDEOGAME",
      payload: json,
    });
  };
}

export const filterByGenre = (genres) => (dispatch, getState) => {
  let filteredGames = [];
  let origen = getState().origen;
  let orden = getState().orderBy;
  let allvideogames = getState().videogames;
  let videogamesdb = getState().videogamesdb;
  let videogamesapi = getState().videogamesapi;

  // console.log("Filtrar por creador:" + origen);
  // console.log("Genero:" + genres);

  if (orden === "asc_name") {
    allvideogames = allvideogames.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    videogamesdb = videogamesdb.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    videogamesapi = videogamesapi.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }

  if (orden === "asc_rating") {
    allvideogames = allvideogames.sort((a, b) => a.rating - b.rating);
    videogamesdb = videogamesdb.sort((a, b) => a.rating - b.rating);
    videogamesapi = videogamesapi.sort((a, b) => a.rating - b.rating);
  }

  if (orden === "desc_name") {
    allvideogames = allvideogames.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    videogamesdb = videogamesdb.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    videogamesapi = videogamesapi.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  if (orden === "desc_rating") {
    allvideogames = allvideogames.sort((a, b) => b.rating - a.rating);
    videogamesdb = videogamesdb.sort((a, b) => b.rating - a.rating);
    videogamesapi = videogamesapi.sort((a, b) => b.rating - a.rating);
  }

  if (genres === "All" && origen === "All") {
    filteredGames = allvideogames;
    console.log(filteredGames);
  }
  if (genres === "All" && origen === "Created") {
    filteredGames = videogamesdb;
    console.log(filteredGames);
  }
  if (genres === "All" && origen === "Api") {
    filteredGames = videogamesapi;
    console.log(filteredGames);
  }
  if (genres !== "All" && origen === "All") {
    filteredGames = allvideogames.filter((game) =>
      game.genres.includes(genres)
    );
  }
  if (genres !== "All" && origen === "Created") {
    filteredGames = videogamesdb.filter((game) => game.genres.includes(genres));
    console.log("ejecute esto");
  }
  if (genres !== "All" && origen === "Api") {
    filteredGames = videogamesapi.filter((game) =>
      game.genres.includes(genres)
    );
  }

  dispatch({
    type: "FILTER_BY_GENRE",
    payload: {
      genres,
      videogameGenre: filteredGames,
    },
  });
};

export const orderAsc = (type) => (dispatch, getState) => {
  const origen = getState().origen;
  const genres = getState().filterBy;
  let filtered;

  if (origen === "All" && genres === "All") {
    filtered = getState().videogames;
  }
  if (origen === "Created" && genres === "All") {
    filtered = getState().videogamesdb;
  }
  if (origen === "Api" && genres === "All") {
    filtered = getState().videogamesapi;
  }

  if (origen === "All" && genres !== "All") {
    filtered = getState().videogames.filter((game) =>
      game.genres.includes(genres)
    );
  }
  if (origen === "Created" && genres !== "All") {
    filtered = getState().videogamesdb.filter((game) =>
      game.genres.includes(genres)
    );
  }
  if (origen === "Api" && genres !== "All") {
    filtered = getState().videogamesapi.filter((game) =>
      game.genres.includes(genres)
    );
  }

  let videogamesOrder = [];

  if (type === "asc_name") {
    videogamesOrder = filtered.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (type === "asc_rating") {
    videogamesOrder = filtered.sort((a, b) => a.rating - b.rating);
  }
  if (type === "All") {
    videogamesOrder = filtered;
  }
  dispatch({
    type: "ORDER_ASC_RATING",
    payload: {
      videogamesOrder,
      name: type,
    },
  });
};

export const orderDesc = (type) => (dispatch, getState) => {
  let filtered;
  const origen = getState().origen;
  const genres = getState().filterBy;

  if (origen === "All" && genres === "All") {
    filtered = getState().videogames;
  }
  if (origen === "Created" && genres === "All") {
    filtered = getState().videogamesdb;
  }
  if (origen === "Api" && genres === "All") {
    filtered = getState().videogamesapi;
  }

  if (origen === "All" && genres !== "All") {
    filtered = getState().videogames.filter((game) =>
      game.genres.includes(genres)
    );
  }
  if (origen === "Created" && genres !== "All") {
    filtered = getState().videogamesdb.filter((game) =>
      game.genres.includes(genres)
    );
  }
  if (origen === "Api" && genres !== "All") {
    filtered = getState().videogamesapi.filter((game) =>
      game.genres.includes(genres)
    );
  }
  let videogamesOrder = [];

  if (type === "desc_name") {
    videogamesOrder = filtered.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  } else if (type === "desc_rating") {
    videogamesOrder = filtered.sort((a, b) => b.rating - a.rating);
  }
  dispatch({
    type: "ORDER_DESC_RATING",
    payload: {
      videogamesOrder,
      name: type,
    },
  });
};

export const orderByCreator = (source) => (dispatch, getState) => {
  let genres = getState().filterBy;
  const orden = getState().orderBy;
  let allvideogames = getState().videogames;
  let videogamesdb = getState().videogamesdb;
  let videogamesapi = getState().videogamesapi;
  let videogames = [];

  if (orden === "asc_name") {
    allvideogames = allvideogames.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    videogamesdb = videogamesdb.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    videogamesapi = videogamesapi.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }

  if (orden === "asc_rating") {
    allvideogames = allvideogames.sort((a, b) => a.rating - b.rating);
    videogamesdb = videogamesdb.sort((a, b) => a.rating - b.rating);
    videogamesapi = videogamesapi.sort((a, b) => a.rating - b.rating);
  }

  if (orden === "desc_name") {
    allvideogames = allvideogames.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    videogamesdb = videogamesdb.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    videogamesapi = videogamesapi.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  if (orden === "desc_rating") {
    allvideogames = allvideogames.sort((a, b) => b.rating - a.rating);
    videogamesdb = videogamesdb.sort((a, b) => b.rating - a.rating);
    videogamesapi = videogamesapi.sort((a, b) => b.rating - a.rating);
  }

  if (genres === "All" && source === "All") {
    videogames = allvideogames;
  }

  if (genres === "All" && source === "Created") {
    videogames = videogamesdb;
  }

  if (genres === "All" && source === "Api") {
    videogames = videogamesapi;
  }

  if (genres !== "All" && source === "Created") {
    videogames = videogamesdb.filter((game) => game.genres.includes(genres));
  }
  if (genres !== "All" && source === "Api") {
    videogames = videogamesapi.filter((game) => game.genres.includes(genres));
  }
  if (genres !== "All" && source === "All") {
    videogames = allvideogames.filter((game) => game.genres.includes(genres));
  }

  // console.log("ejecute CREADOR");

  dispatch({
    type: "ORDER_BY_CREATOR",
    payload: {
      videogames,
      source,
    },
  });
};
