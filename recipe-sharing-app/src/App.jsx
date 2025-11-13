import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecipeList/>
    <AddRecipeForm/>
      
      
    </>
  )
}

export default App
