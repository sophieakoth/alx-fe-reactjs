
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)}>
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
      <div>
        <label>Title:</label><br />
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div style={{ marginTop: '0.5em' }}>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div style={{ marginTop: '0.5em' }}>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: '0.5em' }}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
