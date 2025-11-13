// DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '1em', backgroundColor: '#e74c3c', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
