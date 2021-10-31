import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Shared/Firebase/Firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider);
    }
    const createAccountWithGoogle = (email, password) => {
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const LoginWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const updateName= (name)=> {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
         window.location.reload();
         const newUser={...user, displayName: name}
         setUser(newUser)
        }).catch((error) => {
        });
      }
 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        createAccountWithGoogle,
        LoginWithEmailAndPassword,
        updateName,
        logOut
    }
}

export default useFirebase;