import { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { About } from "./components/About/About";
import App from "./components/App/App";
import { Contact } from "./components/Contact/contact";
import { NavBar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
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
                        <Route path='contact' element={<Contact />} />
                        <Route path='projects' element={<Projects />} />
                    </Routes>
                </AppContextProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}