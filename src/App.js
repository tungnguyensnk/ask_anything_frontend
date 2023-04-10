import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {AppRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
