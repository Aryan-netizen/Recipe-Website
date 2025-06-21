import { createContext, useState } from 'react'

export const RecipeContext = createContext(null)
function Wrapper(props) {
  const [Recipe, setRecipe] = useState([])
  return (
    <RecipeContext.Provider value={[Recipe,setRecipe]}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default Wrapper