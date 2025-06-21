import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="flex justify-center items-center gap-6 p-5 bg-amber-500  ">
        <NavLink to="/" className={(e)=>(e.isActive?"text-orange-700":"text-white")}>Home</NavLink>
        <NavLink to="/recipe" className={(e)=>(e.isActive?"text-orange-700":"text-white")}>Recipe</NavLink>
        <NavLink to="/create" className={(e)=>(e.isActive?"text-orange-700":"text-white")}>Create Recipe</NavLink>
    </div>

  )
}

export default Nav