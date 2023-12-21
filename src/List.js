import React from "react";
import Item from "./Item";
function List({books}){
    return(
        <ul>
            {books.map(book=>(
                <Item key={book.id} book={book}/>
            ))}
        </ul>
    )
}
export default List;