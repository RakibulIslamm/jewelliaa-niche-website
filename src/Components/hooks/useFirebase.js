import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import firebaseInitAuthentication from "../Firebase/firebaseInit"


firebaseInitAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth();

    // create user
    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log('Signup error/success Completed');
            })
    }

    // Login
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
        })
    }, [auth]);

    // log out
    const logOut = () => {
        signOut(user)
            .then(() => {
                setUser(null);
            })
    }

    return {
        user, setUser,
        signUp,
        login,
        logOut
    }
}

export default useFirebase;