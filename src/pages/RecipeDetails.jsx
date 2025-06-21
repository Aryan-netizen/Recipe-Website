import { useContext, useEffect, useState } from "react"
import { RecipeContext } from "../utils/Wrapper"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

function RecipeDetails() {
    const [Recipe,setRecipe] = useContext(RecipeContext)
    const { id } = useParams()
    const [item, setitem] = useState(null)
    
    const navigate = useNavigate()
    useEffect(() => {
        setitem(Recipe.find((item) => item.id == id))
    }, [Recipe, id])
    useEffect(() => {
    localStorage.setItem('Recipe', JSON.stringify(Recipe));
}, [Recipe]);

    const Delete = (id) => {
    const newlist = Recipe.filter((i) => i.id != id)
    setRecipe(newlist)
    localStorage.setItem('Recipe', JSON.stringify(newlist)) // <-- update localStorage
    toast.error("Deleted Succesfully")
    navigate("/recipe")
    }

    if (!item) return <div>Loading or recipe not found.</div>

    return (
        <div className="grid grid-cols-2 p-5 m-auto">
            <div className="flex flex-col gap-2 w-full px-8">
                <h1 className="font-bold uppercase text-8xl">{item.title}</h1>
                <p className="text-2xl w-[75%] mt-4">{item.description}</p>
                <div className="flex flex-row gap-2 font-bold">
                    <small className="bg-red-200 w-fit px-2 py-1 rounded-2xl border-2">Cooking time: {item.cookTime}</small>
                    <small className="bg-red-200 w-fit px-2 py-1 rounded-2xl border-2">Servings: {item.servings}</small>
                </div>
                <div className="flex flex-row ">
                <ol className="list-decimal  bg-amber-200 w-fit p-4 rounded-2xl border-2 mt-2">
                    <h2 className="font-bold text-2xl mb-2">Ingredient List</h2>
                {item.ingredients.map((ing, idx) => (
                    <li className="ml-7 capitalize" key={idx}>{ing}</li>
                ))}
                </ol>
                <ol className="list-decimal ml-5 bg-green-200 w-fit p-4 rounded-2xl border-2 mt-2">
                    <h2 className="font-bold text-2xl mb-2">Steps To Create</h2>
                {item.steps.map((ing, idx) => (
                    <li className="ml-7 capitalize" key={idx}>{ing}</li>
                ))}
                </ol>
                </div>
                <div className="flex flex-row gap-2 mt-auto p-2">
                    <button onClick={()=>{Delete(item.id)}} className="w-full py-2 bg-red-400 border-2 rounded-xl">Delete</button>
                    <button onClick={()=>{navigate(`/recipe-update/${item.id}`)}} className="w-full py-2 bg-green-400 border-2 rounded-xl">Update</button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center p-5 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src={item.image} alt="" />
            </div>
        </div>
    )
}

export default RecipeDetails