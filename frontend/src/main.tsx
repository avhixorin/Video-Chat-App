import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import Room from "./components/Room/Room.tsx";
import LoginPage from "./components/Login/Login.tsx";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/room/:id" element={<Room />} />
    </Route>
  )
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </StrictMode>
);
