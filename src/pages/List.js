

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {Readc} from "./Readc";

export default function List(){
    const { readinglist } = useContext(GlobalContext);
    const heartIcon = require("../images/heart.png");
    return (



        <div className = "book-list-page">
            <div className="book-list-container" > 
            <div className="book-list-title-container"> 
               <h1 className="book-list-title"> My Books </h1>
                <img className="heart-icon" src={heartIcon} alt="heart picture" /> 

            </div>
              
                {readinglist.length > 0 ? (
                    <div className="book-layout">
                        {readinglist.map((book) => (
                        <Readc book={book} key={book.id} type="readinglist" />
                        ))}
                    </div>
                    ) : (
                    <h2 > You have no books in your list. Add some!</h2>
                    )}
        

            </div>

        </div>









        // <div>
            
        //     {/* title of this page with icon */}
        //     <div className="book-list-title-container"> 
        //         <h1 className="book-list-title"> My Books </h1>
        //         <img className="heart-icon" src={heartIcon} alt="heart picture" /> 

        //     </div>
            

        //     <div>
        //         {watchlist.map((book) => (
        //             <Readc book={book} />
                
        //         ))}
        //     </div>

        // </div>
        
        


    );
    
};