import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  )
}

export default App
