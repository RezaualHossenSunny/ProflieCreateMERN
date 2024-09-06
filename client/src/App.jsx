import { Link, Outlet } from "react-router-dom"


function App() {


  return (
   <div>
<div className="bg-gray-100">
<nav className="flex  justify-between items-center py-8 max-w-continer mx-auto">
  <a href="/" className=" text-2xl font-extrabold text-orange-400">RS</a>
  <Link className="font-bold text-2xl" to={'/createuser'}>Add New User</Link>
</nav>
</div>



 <Outlet/>
   </div>
  )
}

export default App
