const initialState = {
  videogames: [],
  videogamesdb: [],
  videogamesapi: [],
  genres: [],
  searchVideogame: [],
  createVideogame: null,
  searchVideogameById: [],
  searchVideogameByName: [],
  filteredVideogames: [],
  orderBy: "All",
  filterBy: "All",
  origen: "All",
  pagina: 1,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };
    case "GET_VIDEOGAMESdb":
      return {
        ...state,
        videogamesdb: action.payload,
      };
    case "GET_VIDEOGAMESapi":
      return {
        ...state,
        videogamesapi: action.payload,
      };

    case "DELETE_VIDEOGAME":
      return {
        ...state,
        videogamesdb: action.payload,
      };

    case "SEARCH_VIDEOGAMES":
      return {
        ...state,
        searchVideogameByName: action.payload,
      };

    case "GET_VIDEOGAME_BY_ID":
      return {
        ...state,
        searchVideogameById: action.payload,
      };

    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "CREATE_VIDEOGAME":
      return {
        ...state,
        createVideogame: action.payload,
      };

    case "RESET":
      return {
        ...state,
        videogames: [],
        videogamesdb: [],
        videogamesapi: [],
        genres: [],
        searchVideogame: [],
        createVideogame: null,
        searchVideogameById: [],
        searchVideogameByName: [],
        filteredVideogames: [],
        orderBy: "All",
        filterBy: "All",
        origen: "All",
        pagina: 1,
      };

    case "FILTER_BY_GENRE":
      return {
        ...state,
        filteredVideogames: action.payload.videogameGenre,
        filterBy: action.payload.genres,
      };

    case "ORDER_ASC_NAME":
    case "ORDER_ASC_RATING":
    case "ORDER_DESC_NAME":
    case "ORDER_DESC_RATING":
      return {
        ...state,
        filteredVideogames: action.payload.videogamesOrder,
        orderBy: action.payload.name,
      };

    case "ORDER_BY_CREATOR":
      return {
        ...state,
        filteredVideogames: action.payload.videogames,
        // filterBy: action.payload.source,
        origen: action.payload.source,
      };
    case "CHANGE_PAGINA":
      // console.log(action.payload);
      return {
        ...state,
        pagina: action.payload,
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        searchVideogameById: [],
      };

    default:
      return state;
  }
}
