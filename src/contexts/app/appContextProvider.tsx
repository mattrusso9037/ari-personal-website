import React, { useState } from "react";
import { AppContext } from "./appContext";

const AppProvider: React.FC = ({ children }) => {
    const [showNav, setShowNav] = useState<boolean>(true);

    return (
        <AppContext.Provider value={{ showNav, setShowNav }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;