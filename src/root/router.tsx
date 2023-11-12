import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const krRoutes = {
    root: "/"
};

export const krRouter = createBrowserRouter([
    {path: krRoutes.root, element: <App/>}
]);