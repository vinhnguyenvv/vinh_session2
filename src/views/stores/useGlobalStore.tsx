import { createContext, useContext, useState } from "react";

interface IGlobalStoreProps {
    themeMode: "dark" | "light",
    // whseid: string
    // setThemeMode: (themeMode: "dark" | "light") => void;
    setThemeMode: (themeMode: "dark" | "light") => void;

    valuseWhseid?: 'WH01' | 'WH02' | 'WH03'
    setWhseid: (valuseWhseid: 'WH01' | 'WH02' | 'WH03') => void;


}


const GlobalStoreContext = createContext<IGlobalStoreProps | undefined>(undefined);


const GlobalStoreProvider = ({ children }: { children: React.ReactNode; }) => {

    const [themeMode, setThemeMode] = useState<"dark" | "light">("light");
    const [valuseWhseid, setWhseid] = useState<'WH01' | 'WH02' | 'WH03'>()

    return <GlobalStoreContext.Provider value={{
        themeMode,
        setThemeMode,
        valuseWhseid,
        setWhseid

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



