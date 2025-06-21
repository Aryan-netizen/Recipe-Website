import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RecipeContext } from "../utils/Wrapper";
import { useNavigate, useParams } from "react-router-dom";

function UpdateRecipe() {
    const {id}=useParams()
    const [Recipe,setRecipe]= useContext(RecipeContext)
    const recipe=Recipe.find((i)=>(i.id==id))
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm({defaultValues: {...recipe,ingredients:recipe.ingredients.join(", "),steps:recipe.steps.join(", ")}});

  async function onSubmit(data){
    data.id = id;
    data.ingredients = data.ingredients.split(",").map(str=>str.trim()).filter(str=>str.length>0)
    data.steps = data.steps.split(",").map(str=>str.trim()).filter(str=>str.length>0)
    console.log(data);
    setRecipe(Recipe.map(r => r.id === id ? data : r))
    toast.success("SUCCESSFULLY UPDATED!!!", {
      position: "top-right",
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/recipe")
    reset();
  };

    useEffect(() => {
    localStorage.setItem('Recipe', JSON.stringify(Recipe));
    }, [Recipe]);

  const ErrorMessage = ({ error }) => error ? <small className="text-red-500">{error.message}</small> : null;

  return (
    <div>
        
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-4 mt-10 border p-10 w-[70vh] mx-auto"
      >
        <h1 className="text-xl font-bold">UPDATE THE RECIPE</h1>
        <input
          type="text"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="title"
          {...register("title", {
            required: "Title is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
            maxLength: { value: 20, message: "Maximum 20 characters allowed" },
          })}
        />
        <ErrorMessage error={errors.title} />

        <input
          type="text"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="image"
          {...register("image", { required: "image is required" })}
        />
        <ErrorMessage error={errors.image} />

        <textarea
          className="border px-2 py-1 w-full h-[10vh] outline-none"
          placeholder="description"
          {...register("description")}
        />

        <input
          type="text"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="cook time"
          {...register("cookTime")}
        />

        <input
          type="number"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="serving (only numbers)"
          {...register("servings")}
        />

        <input
          type="text"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="ingrediets seprated by commas"
          {...register("ingredients", { required: "ingredients are required" })}
        />
        <ErrorMessage error={errors.ingredients} />

        <input
          type="text"
          className="border-b px-2 py-1 w-full outline-none"
          placeholder="step seprated by commas"
          {...register("steps", { required: "steps are required" })}
        />
        <ErrorMessage error={errors.steps} />

        <input
          type="submit"
          className="mt-6 bg-amber-100 w-full border text-2xl py-1 rounded" disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"}
        />
      </form>
    </div>
  );
}

export default UpdateRecipe;
