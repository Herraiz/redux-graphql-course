// Constants
let initialData = {
  loggedIn: false,
};
let LOGIN = "LOGIN";
// Reducer

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN:
    //   return { ...state, loggedIn: true };
    default:
      return state;
  }
}

// Action - Action creators