import React, {useEffect} from "react";
import {Routes, Route, BrowserRouter, Router} from "react-router-dom";
import {AppRoutes} from "./routes/routes";
import {init} from "./utils/fb";

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
