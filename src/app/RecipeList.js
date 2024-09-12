const RecipeList = ({recipe}) => {
  return (
    <div className="recipeList-container">
       
        <div>

        <ul className="ul-list">
            {recipe.length>0?(
                recipe.map((item, index) => (
                    <div key={index} className="content">
                        <h3 className="recipe-label">{item.recipe.label}</h3>
                        <img src={item.recipe.image} alt={item.recipe.label}  />

                        <div className="tarif">
                        <h4>Ingredients:</h4>
                        <ul>
                            {item.recipe.ingredients.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))}
                        </ul>
                            </div>
                    </div>
                ))
            ) :(<div></div>)}
        </ul>
        </div>

    </div>
  )
}
export default RecipeList