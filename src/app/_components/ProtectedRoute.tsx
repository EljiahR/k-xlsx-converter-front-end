import axios from "axios";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface AuthorizedRoutes {
    authorizedStores: Store[]
}

interface Store {
    storeNumber: Number,
    divisionNumber: Number
}

interface Props {
    component: React.ComponentType<AuthorizedRoutes>
}

enum AuthenticationStates {
    Loading,
    Authorized,
    Unauthorized
}

const intialStoreAuthorization : AuthorizedRoutes = {
    authorizedStores: [{storeNumber: 0, divisionNumber: 0}]
}

// Wraps components in a component that insures user is signed in before moving onto actual component
const ProtectedRoute = ({ component: Component } : Props) => {
    const router = useRouter();
    const [authenticationState, setAuthenticationState] = useState(AuthenticationStates.Loading);
    const [authorizedRoutes, setAuthorizedRoutes] = useState<AuthorizedRoutes>(intialStoreAuthorization);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get("https://kxlsxconverterapi.onrender.com/User/Status", {withCredentials: true });
                console.log(response.data);
                setAuthenticationState(AuthenticationStates.Authorized);
            } catch (error) {
                console.error(error);
                setAuthenticationState(AuthenticationStates.Unauthorized);
            }
        }

        checkAuthStatus();
    })
    
    return (
        authenticationState == AuthenticationStates.Loading ?
            <></> :
            authenticationState == AuthenticationStates.Authorized ?
                <Component {...authorizedRoutes} /> :
                router.push("/dashboard/login")
    )
}

export default ProtectedRoute;