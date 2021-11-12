import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';
import firebaseInitAuthentication from "../Firebase/firebaseInit"


firebaseInitAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [alert, setAlert] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // create user
    const signUp = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser({ email, displayName: name });
                // setLoading(false);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setError(error.code);
                });

                savedDataOnDb(name, email);

                history.push('/');
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.code);
                setError(error.code);
                // setLoading(false);
            })
            .finally(() => {
                setLoading(false);
                console.log('Signup error/success Completed');
            })
    }

    // Login
    const login = (email, password, location, history) => {
        setLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const url = location?.state?.from || '/';
                history.push(url);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
    }, [auth]);


    const savedDataOnDb = (name, email) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ displayName: name, email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlert(true);
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
            .catch(error => setError(error))
    }, [user]);


    // log out
    const logOut = (history) => {
        signOut(auth)
            .then(() => {
                setUser(null);
                history.push('/');
            })
    }

    return {
        user, setUser,
        signUp,
        login,
        loading,
        error, setError,
        alert,
        admin,
        logOut
    }
}

export default useFirebase;