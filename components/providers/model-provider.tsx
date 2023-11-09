"use client"

import { CreateServerModel } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react";

export const ModelProvider = () => {
    const[ isMounted, setIsMounted ] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
    
    return (
        <>
            <CreateServerModel/>
        </>
        
    )
}