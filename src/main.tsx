import { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { About } from "./components/About/About";
import App from "./components/App/App";
import { NavBar } from "./components/Navbar/NavBar";
import { AppContext } from "./contexts/app/appContext";
import AppContextProvider from "./contexts/app/appContextProvider";
import ThemeProvider from "./contexts/theme/themeProvider";

export function Main() {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <AppContextProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='about' element={<About />} />
                    </Routes>
                </AppContextProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}