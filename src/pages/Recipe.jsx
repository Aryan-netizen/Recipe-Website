import { useContext, useEffect } from "react"
import { RecipeContext } from "../utils/wrapper"
import { useNavigate, useParams } from "react-router-dom"

function Recipe() {
    const [Recipe, setRecipe] = useContext(RecipeContext)
    const navigate=useNavigate()
    const DetailPageOpen=(itemId)=>{
        navigate(`/recipe-details/${itemId}`)
    }
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('Recipe'));
        if (items) {
            setRecipe(items);
        }
        }, []);
    if (!Recipe || Recipe.length === 0) return <div>Loading or recipe not found.</div>
    return (
        <div>
            <div className="flex flex-wrap gap-10 p-10">
                {Recipe.map((item)=>(
                    <div key={item.id} className="flex flex-col w-[45vh] h-[65vh] p-4 border-3 items-center rounded-2xl   ">
                        <h1 className="font-bold text-xl uppercase">{item.title}</h1>
                        <div className="w-full h-[50%] rounded-2xl overflow-hidden m-4 border">
                            <img className="w-full h-full object-cover" src={item.image} alt="" />
                        </div>
                        <p className="mb-4">{item.description.length>110?item.description.slice(0,110)+" ...Read More":item.description}</p>
                        <button onClick={()=>DetailPageOpen(item.id)} className="bg-amber-100 w-full p-2 mt-auto border-2 rounded-2xl">See Details...</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipe