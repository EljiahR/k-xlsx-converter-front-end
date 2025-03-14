'use client'

import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";
import instance from "../_lib/axiosBase";

interface AuthorizedRoutes {
    authorizedStores: string[]
}

interface Props {
    component: ComponentType<AuthorizedRoutes>
}

enum AuthenticationStates {
    Loading,
    Authorized,
    Unauthorized
}

const intialStoreAuthorization : AuthorizedRoutes = {
    authorizedStores: ["0-0"]
}

// Wraps components in a component that insures user is signed in before moving onto actual component
const ProtectedRoute = ({ component: Component } : Props) => {
    const router = useRouter();
    const [authenticationState, setAuthenticationState] = useState(AuthenticationStates.Loading);
    const [authorizedRoutes, setAuthorizedRoutes] = useState<AuthorizedRoutes>(intialStoreAuthorization);

    useEffect(() => {
        document.title = "Checking user";
        
        const checkAuthStatus = async () => {
            try {
                const response = await instance.get("/User/Status", {withCredentials: true });
                console.log(response.data);
                setAuthorizedRoutes(response.data.authorizedRoutes);
                setAuthenticationState(AuthenticationStates.Authorized);
            } catch (error) {
                console.error(error);
                setAuthenticationState(AuthenticationStates.Unauthorized);
            }
        }

        checkAuthStatus();
    }, []);

    useEffect(() => {
        
        if (authenticationState == AuthenticationStates.Unauthorized) {
            document.title = "Unauthorized";
            router.push("/dashboard/login");
        }
    }, [authenticationState])
    
    return (
        authenticationState == AuthenticationStates.Loading ?
            <></> :
            authenticationState == AuthenticationStates.Authorized ?
                <Component {...authorizedRoutes} /> :
                <div>User is unauthorized for this page.</div>
    )
}

export default ProtectedRoute;