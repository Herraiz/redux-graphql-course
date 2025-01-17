import Axios from "axios";

// Constants
const initialData = {
  fetching: false,
  array: [],
  current: {},
};

const URL = "https://rickandmortyapi.com/api/character";
const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

// Reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
    case GET_CHARACTERS_ERROR:
      break;
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// Action - Action creators

export const getCharactersAction = () => (dispatch, getState) => {
  return Axios.get(URL).then((res) => {
    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payload: res.data.results,
    });
  });
};
