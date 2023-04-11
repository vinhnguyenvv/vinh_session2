import { createContext, useContext, useState } from "react";

interface IGlobalStoreProps {
    themeMode: "dark" | "light",

    // setThemeMode: (themeMode: "dark" | "light") => void;
    setThemeMode: (themeMode: "dark" | "light") => void;

}


const GlobalStoreContext = createContext<IGlobalStoreProps | undefined>(undefined);


const GlobalStoreProvider = ({ children }: { children: React.ReactNode; }) => {

    const [themeMode, setThemeMode] = useState<"dark" | "light">("light");
    const [setValue] = useState()

    return <GlobalStoreContext.Provider value={{
        themeMode,
        setThemeMode,
        
    }}>

        {children}
    </GlobalStoreContext.Provider>
}




const useGlobalStore = () => {
    const context = useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error('useWallet hook must be used with a GlobalStoreContext component')
    }
    return context;
}

export {
    useGlobalStore,
    GlobalStoreProvider
}



