import React,{useState} from "react";
import "./App.css";
function Bar({onSearch}){
    const[query,SetQuery]=useState('');
    
    const handleChange = (e)=>{
        SetQuery(e.target.value);
    };
    const handleSubmit= (e)=>{
        e.preventDefault();
        onSearch(query);
    };
    return(
        <form onSubmit={handleSubmit} className="container">
            <input type="text" value={query} onChange={handleChange} placeholder="Search for books here"/>
            <button type="submit"><i class="fa-solid fa-search"></i></button>
        </form>
    );
}
export default Bar;