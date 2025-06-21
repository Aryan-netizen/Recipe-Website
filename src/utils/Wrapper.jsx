import { createContext, useState, useEffect } from 'react'

export const RecipeContext = createContext(null)
function Wrapper(props) {
  const [Recipe, setRecipe] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem('Recipe')
    return stored ? JSON.parse(stored) : []
  })

  // Keep localStorage in sync with state
  useEffect(() => {
    localStorage.setItem('Recipe', JSON.stringify(Recipe))
  }, [Recipe])

  return (
    <RecipeContext.Provider value={[Recipe, setRecipe]}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default Wrapper