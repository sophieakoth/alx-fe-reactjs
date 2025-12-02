
import React, { useEffect, useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    

function RecipeDetail(){

    
     
      const { id } = useParams(); // Get recipe ID from URL
      const [recipe, setRecipe] = useState(null);
    
      useEffect(() => {
        // Fetch data.json
        fetch('/data.json') // If data.json is in public folder
          .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch recipes');
            return res.json();
          })
          .then((data) => {
            const foundRecipe = data.find((r) => r.id === parseInt(id));
            setRecipe(foundRecipe || null);
          })
          .catch((error) => console.error(error));
      }, [id]);
    
      if (!recipe) {
        return (
          <div className="p-6 text-center">
            <p className="text-gray-600">Recipe not found.</p>
            <Link to="/" className="text-blue-500 hover:underline">
              Go back to Home
            </Link>
          </div>
        );
      }
    
      return (
        <div className="max-w-4xl mx-auto p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
          />
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.description}</p>
    
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
    
          <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
          <p className="text-gray-700">{recipe.instructions}</p>
    
          <Link
            to="/"
            className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      );
    }
    




export default RecipeDetail