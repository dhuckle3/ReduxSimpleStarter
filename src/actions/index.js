export function selectBook(book) {
  // Return an Action - and object with a type property
  return {
      type: 'BOOK_SELECTED',
      payload: book
  };
}
