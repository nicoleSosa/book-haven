import React, {useContext} from 'react';
  import { GlobalContext } from '../context/GlobalState';

// we will use local storage in order to access the books stored in the reading list when application
// is open again


export const Card = ({book}) => {

const { addBookToReadinglist, readinglist} = useContext(GlobalContext);
  
 
 let storedBook = readinglist.find(o => o.id === book.id);
const readinglistDisabled = storedBook ? true: false;
  
  return (
    <div className="book-card-style">
        <div className="book-cover">
          <img src={book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail} alt="nothing"/>
        </div>
        {/* adding additional information about each book to the card  */}
        <div className="book-info">
          <div >
            <h3 className="book-result-title"> 
              {/* ensure program won't break in case there isn't a title  */}
              {book.volumeInfo.title ? book.volumeInfo.title : " "} 
            </h3>
            <h4 className="book-author"> by {book.volumeInfo.authors}</h4>
          </div>
          <div className="add-btn-container">
            <button className="add-btn"  
            disabled = {readinglistDisabled}
            onClick={() => addBookToReadinglist(book)}>
              Add to reading List

            </button>

           

          </div>


        </div>
    </div>
  )
};