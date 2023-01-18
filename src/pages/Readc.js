

import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Readc = ({book}) => {

  const {removeBookFromReadinglist} = useContext(GlobalContext);

    return (
     
       <div className="book-list-card">
         <div className="book-list-cover">
           <img src={book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail} alt="nothing"/>
           <button className="book-list-remove-button" onClick= {() => removeBookFromReadinglist(book.id)}> Remove </button>
         </div>
        </div>

    );


};