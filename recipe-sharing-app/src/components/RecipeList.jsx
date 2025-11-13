import { useRecipeStore } from './recipeStore.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }
    


    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>

            </h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList;