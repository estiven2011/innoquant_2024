import { BrowserRouter,useRoutes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Contacto from "./pages/contact/contacto"
import Login from "./pages/login/login"


function Router (){
  let router = useRoutes([
    {path:"/",element:<Home/>}, 
    {path:"/Contacto",element:<Contacto/>},
    {path:"/Login",element:<Login/>},
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
