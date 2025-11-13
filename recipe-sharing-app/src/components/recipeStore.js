import {create} from 'zustand'



const useRecipeStore = create(set => ({
  recipes: [],
  favorites:[],
  recommendations:[],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),


  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

   updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

    deleteRecipe: (id) =>
      set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),

      searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  ingredientFilter: '',
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),

  maxCookingTime: null,
  setMaxCookingTime: (time) => set({ maxCookingTime: time }),

  
  

  
  }));


export default useRecipeStore;