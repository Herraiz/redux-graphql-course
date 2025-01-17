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
const REMOVE_CHARACTER = "REMOVE_CHARACTER";

// Reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payload, fetching: false };
    case REMOVE_CHARACTER:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// Action - Action creators

export const getCharactersAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_CHARACTERS,
  });

  return Axios.get(URL)
    .then((res) => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_CHARACTERS_ERROR,
        payload: err.response.message,
      });
    });
};

// removeCharacterAction
export const removeCharacterAction = (position) => (dispatch, getState) => {
const { array } = getState().chars;
const filteredCharacters = array.filter((_, index) => index !== position);
dispatch({
    type: REMOVE_CHARACTER,
    payload: filteredCharacters,
});
};
