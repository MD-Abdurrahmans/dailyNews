import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

export const  authContext = createContext();
const ContexProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    // google Sign In

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);

    }


    // github Sign In

    const signInWithGithub = () => {


      return signInWithPopup(auth, githubProvider);

    }


   //  facebook login

   const facebookLogin = ()=>{
  

      return signInWithPopup(auth,facebookProvider);

   }


// Twitter login 

const twitterLogin =()=>{


   return signInWithPopup(auth,twitterProvider);
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

onAuthStateChanged(auth,(currentUser)=>{
  
   setUser(currentUser);
   setLoading(false)

})



//  logOut

 const logOut = ()=>{

    return  signOut(auth);
    
 }

 

//  console.log('hiuser', user)

const info = {

    signInWithGoogle,
    signInWithGithub,
    createUser,
    userLogin,
    user,
    logOut,
    handleProfile,
    facebookLogin,
    twitterLogin,
    loading

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