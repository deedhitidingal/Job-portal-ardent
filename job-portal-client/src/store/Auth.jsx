import { createContext, useContext,useState,useEffect } from "react";
import { BASE_URL } from "./Helper";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token, settoken] = useState(localStorage.getItem("token"))
    const [User, setUser] = useState("")
    const [isLoading, setisLoading] = useState(true)
    const UserAuthorization= `Bearer ${token}`;

    const storeTokenInLs=(serverToken)=>{
        settoken(serverToken)
        return localStorage.setItem("token",serverToken);
    };
// for User log out
    const LogOutUser=()=>{
        settoken("")
        setUser("")
        return localStorage.removeItem("token")
    }
//it check the token is present or not
    let isLoggedIn=!!token;
    console.log("logedin",isLoggedIn)

    //JWT Authentication- to get the currently loggedIn User data
    const UserAuthentication= async()=>{
        //added to solve the refreshing admin tab problem in navbar 
        if (!token) {
            setisLoading(false);
            return;
          }
        try {
            setisLoading(true)
            const response= await fetch(`${BASE_URL}/api/auth/User`,{
                method:"GET",
                headers:{
                    Authorization: UserAuthorization,
                }
            })

            if(response.ok){
                const data= await response.json();
                console.log("User data",data.UserData);
                setUser(data.UserData);
                // setisLoading(false)
            }
            // else{
            //     console.log("error while fetching response!")
            //     setisLoading(false)
            // }
        } catch (error) {
            console.log("Error to fetching User data");
        }
    }

    useEffect(() => {
    UserAuthentication();
    }, [token])

    return (
        <AuthContext.Provider value={{User,isLoggedIn,LogOutUser,storeTokenInLs, UserAuthorization,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}