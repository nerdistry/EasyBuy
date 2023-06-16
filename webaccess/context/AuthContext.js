import {useContext, createContext} from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    signOut, 
    onAuthStateChanged} from "firebase/auth";
import {auth} from "../pages/firebase";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

  return(
    <AuthContext.Provider value={{googleSignIn}}>
      {children}
      </AuthContext.Provider>
      )
  }

export const userAuth = () =>{

    return useContext(AuthContext)
} 