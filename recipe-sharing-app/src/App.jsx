import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import SearchBar from './components/SearchBar.jsx';
import FavoritesList from './components/FavoritesList.jsx'
import RecommendationsList from './components/RecommendationsList.jsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <Routes>
          {/* Redirect root to /recipes */}
          <Route path="/" element={<Navigate to="/recipes" />} />

          {/* Recipe list page with AddRecipeForm */}
          <Route
            path="/recipes"
            element={
              <>
                <AddRecipeForm />
                <SearchBar/>
                <RecipeList />
                
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipes/:recipeId" element={<RecipeDetailsWrapper />} />

          {/* Fallback */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
      <div>
        <FavoritesList/>
        <RecommendationsList/>
      </div>
    </BrowserRouter>
  );
}

// Wrapper to get recipeId from URL
const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={Number(recipeId)} />;
};

export default App;
