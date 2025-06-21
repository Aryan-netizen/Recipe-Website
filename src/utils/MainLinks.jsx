import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipe from "../pages/Recipe"
import Create from "../pages/Create"
import RecipeDetails from "../pages/RecipeDetails"
import UpdateRecipe from "../pages/UpdateRecipe"

function MainLinks() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/recipe-details/:id' element={<RecipeDetails />} />
        <Route path='/recipe-update/:id' element={<UpdateRecipe/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default MainLinks