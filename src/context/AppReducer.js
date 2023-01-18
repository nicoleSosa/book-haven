export default (state, action) => {
    switch (action.type) {
      case "ADD_BOOK_TO_READINGLIST":
        return {
          ...state,
          readinglist: [action.payload, ...state.readinglist],
        };
       
        case "REMOVE_BOOK_FROM_READINGLIST":
          return {
            ...state,
            readinglist: state.readinglist.filter(
              (book) => book.id !== action.payload
            ),
          };
      default:
        return state;
    }
  };