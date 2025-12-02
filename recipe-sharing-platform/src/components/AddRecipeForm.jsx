import { useState } from "react";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    const ingredientsArray = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean); // remove empty lines

    if (ingredientsArray.length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients";
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required";
    }

    setErrors(newErrors);

    // Form is valid if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n").map((item) => item.trim()),
      instructions,
    };

    console.log("Submitted recipe:", newRecipe);
    alert("Recipe submitted successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? "border-red-500" : ""
            }`}
            rows={5}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.instructions ? "border-red-500" : ""
            }`}
            rows={5}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
