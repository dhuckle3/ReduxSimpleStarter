// State here is not the application state; it's the state this reducer is
// responsible for
export default function(state = null, action) {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }
  return state;

}
