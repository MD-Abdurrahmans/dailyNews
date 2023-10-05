import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

export const  authContext = createContext();
const ContexProvider = ({children}) => {

    const [user,setUser] = useState(null)


    // google Sign In

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);

    }


    // github Sign In

    const signInWithGithub = () => {
      return signInWithPopup(auth, githubProvider);

    }


 // createUser 
 
 const createUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth,email,password)
 }


//  userLogin

 const userLogin = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }

// update userProfile


const handleProfile  = (name,image)=>{

     return updateProfile(auth.currentUser, {
        displayName: name , photoURL: image,
      })
}



//  onAuthChange || user observer


 const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{

    setUser(currentUser)

    return ()=> unSubscribe();
 }) 


//  logOut

 const logOut = ()=>{

    return  signOut(auth);
    
 }

 

 console.log(user)

const info = {

    signInWithGoogle,
    signInWithGithub,
    createUser,
    userLogin,
    user,
    logOut,
    handleProfile

}


    return (
        <div>
            
            
            <authContext.Provider
            
            value={info}>

 {children}
            


            </authContext.Provider>
                
        </div>
    );
};

export default ContexProvider;