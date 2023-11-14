import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Productions from "./productions/Productions";

export const krRoutes = {
    root: "/",
    productions: "productions"
};

export const krRouter = createBrowserRouter([
    {
        path: krRoutes.root, element: <App/>, children: [
            {path: krRoutes.productions, element: <Productions/>}
        ]
    }
]);