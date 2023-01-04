
import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import './App.css'

const App =() =>{
  const APP_ID="ab0a1f9b";
  const APP_KEY="a98217dfe14ba311b30580b1a19eb52f";

const [recipes, setRecepis]=useState([])
const [search,setSearch]=useState("");
const [query, setQuery]=useState('chicken')

useEffect(()=>{
getRecipes()
}, [query])

 const getRecipes= async () =>{
  const respone=await fetch
  (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
  const data=await respone.json();
  setRecepis(data.hits)
  console.log(data.hits)
}


const searchHandle = (e) =>{
setSearch(e.target.value)
//console.log(search)
}
const onSubmit = (e) =>{
  e.preventDefault()
  setQuery(search);
  setSearch('');
}

  return (
 <div className='search'>
  <form className="search-form" onClick={onSubmit}
      >
 <input className='search-bar'
 type="text" placeholder='search for food'
 value={search} 
 onChange={searchHandle}
 />
<button className='submit-btn' type='submit'>search</button>
      </form>
      <div className='recepies'>
      {recipes.map((e) =>(
       <Recipe  
        key={e.recipe.label}
        title={e.recipe.label}
        calories={e.recipe.calories}
        image={e.recipe.image}
        ingredients={e.recipe.ingredients}
           />
      ))}
    </div>
    </div>
  
  )
  }

export default App
