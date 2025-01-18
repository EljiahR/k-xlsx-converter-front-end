import axios from "axios";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Props {
    component: JSX.Element
}

enum AuthenticationStates {
    Loading,
    Authorized,
    Unauthorized
}

// Wraps components in a component that insures user is signed in before moving onto actual component
const ProtectedRoute: FC<Props> = ({ component }) => {
    const router = useRouter();
    const [authenticationState, setAuthenticationState] = useState(AuthenticationStates.Loading);

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
                component :
                router.push("/dashboard/login")
    )
}

export default ProtectedRoute;