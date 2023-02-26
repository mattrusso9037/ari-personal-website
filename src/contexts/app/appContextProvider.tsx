import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { AppContext } from "./appContext";

const AppProvider: React.FC = ({ children }) => {
    const [showNav, setShowNav] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    function onProjectSelected(index: number): void {
        setSearchParams({
            id: index.toString(),
        });
        location.search = searchParams.toString();
    }
    
    useEffect(() => {
        if (!showModal) {
            setSearchParams({});
        }
        setShowNav(!showModal);
    }, [showModal]);

    
    useEffect(() => {
        const id = searchParams.get('id');

        if (id) {
            setProjectIndex(Number(id));
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [location.search]);

    return (
        <AppContext.Provider value={{ showNav, setShowNav, onProjectSelected, showModal, setShowModal, projectIndex }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;