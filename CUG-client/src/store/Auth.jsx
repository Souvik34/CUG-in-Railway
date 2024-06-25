import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const UserAuthorization = `Bearer ${token}`;

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const LogOutUser = () => {
        setToken("");
        setUser("");
        localStorage.removeItem("token");
    };

    const isLoggedIn = !!token;
    console.log("logged in", isLoggedIn);

    const userAuthentication = async () => {
        if (!token) {
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.2:4000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: UserAuthorization,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user,setUser, isLoggedIn, LogOutUser, storeTokenInLs, UserAuthorization, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
