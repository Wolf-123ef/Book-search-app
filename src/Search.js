import React,{useState} from "react";
import Bar from "./Bar";
import List from "./List";
import axios from "axios";
import './App.css';
function Search(){
    const[query,setQuery]=useState('');
    const[books,setBooks]=useState([]);

    const handleSearch=(query)=>{
        setQuery(query);
        if(query.trim() !==" "){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(response=>{
                setBooks(response.data.items || []);
            })
            .catch(error =>{
                console.error("Error fetching books:",error);
            });
        }
    }
    return(
        <div>
            <Bar onSearch={handleSearch}/>
            <List books={books}/>
        </div>
    )
}
export default Search;