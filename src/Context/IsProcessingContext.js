import { createContext, useContext, useState } from "react";

const IsProcessingContext = createContext()

const IsProcessingProvider = ({children}) => {
    const [IsProcessing, setIsProcessing] = useState(false)
    return (
        <IsProcessingContext.Provider value={[IsProcessing , setIsProcessing]}>
            {children}
        </IsProcessingContext.Provider>
    )
}

const useIsProcessing = () => {return useContext(IsProcessingContext)}

export {useIsProcessing , IsProcessingProvider}