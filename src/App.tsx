
// import './App.css'

import DashBoard from "./assets/Components/DashBoard"
import { NavbarProvider } from "./assets/Components/NavbarContext"

function App() {


  return (
    <>
        <NavbarProvider>
       <DashBoard />
       </NavbarProvider>
     
    </>
  )
}

export default App
