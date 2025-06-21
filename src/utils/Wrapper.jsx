import { createContext, useState } from "react"


export const RecipeContext=createContext(null)

function Wrapper(props) {
    const [Recipe, setRecipe] = useState([{
  id: "1",
  title: "Spaghetti Bolognese",
  image: "https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_1280.jpg",
  description: "A classic Italian pasta dish with rich meat sauce. It is the most famous Dish in the ITALY",
  cookTime: "45 mins",
  servings: 4,
  ingredients: ["Pasta", "Tomato Sauce", "Minced Meat", "Onions", "Garlic"],
  steps: ["Boil pasta", "Cook meat", "Add sauce", "Mix and serve"]
}])
  return (
    <RecipeContext.Provider value={[Recipe,setRecipe]}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default Wrapper