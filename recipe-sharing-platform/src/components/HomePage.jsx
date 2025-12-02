import { useState,useEffect} from "react";



function HomePage(){
 const[Recipes,setRecipes]= useState([]);

 useEffect(() => {
    
    fetch('/src/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch recipes');
        return res.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

return(
    <>
 <div className="max-w-6xl mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Recipes.map(({ id, title, description, image }) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
   
   
    </>
)


}
export default HomePage;