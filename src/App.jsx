import { BrowserRouter,useRoutes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"

function Router (){
  let router = useRoutes([
     {path:"/",element:<Home/>}, 
    /* {path:"/presentaciones",element:<Presentaciones/>},
    {path:"/videos",element:<Videos/>},
    {path:"/tutoriales",element:<Tutoriales/>},
    {path:"/ejercicios",element:<Ejercicios/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/profile",element:<Profile/>}, */

  ]
  )
  return router
}


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
