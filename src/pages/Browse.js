

import React, {useState} from "react";
import axios from "axios";
import {Card} from './Card';

export default function Browse(){

    // search button icon image 
    const searchIcon = require("../images/search.png");

    // the input of the user is going to be set as query 
    const [query, setQuery] = useState("");
    const [bookResult, setBookResult] = useState([]);
    const [bookKey,setbookKey] = useState("AIzaSyC8GEL85f7l8kgNmu7VpwNm7390oEjIcFU");

    // function to handle the input of the user 
    function handleChange (event){
       const book = event.target.value;
        setQuery(book);
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+query+"&key="+bookKey+"&maxResults=40").then(data => {
            console.log(data.data.items);
        setBookResult(data.data.items);
        })
       
    }

    return( 
        <div>
            <div className="browse-container">
            <h3 className="browse-title"> Discover Your New Favorite Book </h3>
                <div className="browse-content">
                    <div className="input-styling">
                        <form className="search-container" onSubmit = {handleSubmit}> 
                            <input type="text" placeholder="Search by Book Ttitle/Author" value={query} onChange= {handleChange}/>   
                            <button className="search-btn-style" type="submit">  <img className="search-icon" src={searchIcon} alt="search" />  </button>
                        </form>
                        {/* display results  */}
                        {bookResult.length > 0 && (
                            <ul className="search-results-style">
                                {bookResult.map((book) => (
                                  <div key = {book.id}>
                                       <li > <Card book={book} /> </li>
                                  </div>
                                   ))}
                            </ul>
                        )}

                    </div>
                </div>
            </div>
        </div>
    
    );
};