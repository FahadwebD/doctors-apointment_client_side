import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import useDoctors from './useDoctors'

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [doctor, setDoctor] = useState(false);
    const [dashboardUse ,setDashboardUse] = useState(false)
    const [navUse , setNavUse] = useState(false)
    const [notifications , setNotifications] = useState(false)
    const [unreadCount , setUnreadCount]= useState(0)
    const [token, setToken] = useState('');
    const {doctors} = useDoctors()

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
                
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://floating-cliffs-15059.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if(data.hisRole === 'admin'){
                    setAdmin(true)
                    
                }
                else if(data.hisRole === 'doctor'){
                    setDoctor(true)
                    
                }
            })
    }, [user.email])

    useEffect(() => {
        fetch(`https://floating-cliffs-15059.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setDashboardUse(data.isDash))
    }, [user.email])
    useEffect(() => {
        fetch(`https://floating-cliffs-15059.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setNavUse(data.isNav))
    }, [user.email])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName};
        fetch('https://floating-cliffs-15059.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

       useEffect(()=>{
           fetch(`https://floating-cliffs-15059.herokuapp.com/notification/my/prescriptions/${user.email}`)
           .then(res => res.json())
           .then(data =>{ 
               setNotifications(data.isUnread)
               setUnreadCount(data.unreadNotification)
            })
       },[user.email])













    return {
        user,
        admin,
        dashboardUse,
        doctor,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        navUse,
        notifications ,
        unreadCount,
        token,
    }
}

export default useFirebase;