import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.tsx'
import InfoPage from './components/InfoPage/InfoPage.tsx'
import Room from './components/Room/Room.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<LandingPage />} />
      <Route path='/info' element={<InfoPage />} />
      <Route path='/room/:id' element={<Room />} />
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
