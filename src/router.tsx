import { createBrowserRouter } from "react-router-dom";
import  App  from "./App";
import  Produtos  from "./pages/Produtos";

const router = createBrowserRouter([
    { path: "/", element: <App />},
    { path: "/produtos", element: <Produtos/>}
]);

export {router};