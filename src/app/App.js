'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import RecipeList from "./RecipeList";

const App = () => {

    const [recipe,setRecipe]=useState([]);
    const [search,setSearch]=useState("");

    const Api_Id="3757a845"
    const Api_Key="bc13148583dfe7d3d8a465633f1f07f4"
    const url=`https://api.edamam.com/search?q=${search}&app_id=${Api_Id}&app_key=${Api_Key}`

   
     const getRecipes=async()=>{
        try{
            const response=await axios.get(url);
            const data=response.data
            setRecipe(response.data.hits);
            console.log(data);
        }catch(error){
            console.log("veri çekilirken hata meydana geldi",error);
        }
    }
  
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        getRecipes()

    }


  return (
    <div className="App">
        <h1>Project 9 Recipe App</h1>
        <form onSubmit={handleSubmit}>
        <input
        className="recipe-input"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Aratmak istediğiniz yemeği yazın"
        />
        <button>Ara</button>
        </form>
        <RecipeList recipe={recipe} />
    </div>
  )
}
export default App