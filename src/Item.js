import React, { useState } from "react";
import './App.css'
function Item({book}){
    const {volumeInfo}=book;
    const[isClicked,setIsClicked]=useState(false);

    const handleClick=()=>{
        setIsClicked(!isClicked);
    };
    return(
        <div className="main">
         < div>
                {volumeInfo.imageLinks && (
                    <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} onClick={handleClick}/>
                )}
            </div>
            <div>
             <h4>{volumeInfo.title}</h4>
             <h5>{isClicked ? (volumeInfo.authors && volumeInfo.authors.join(",")): ""}</h5>
             <p>{isClicked ? volumeInfo.description:""}</p>
            </div>
            </div>
    )
}
export default Item;