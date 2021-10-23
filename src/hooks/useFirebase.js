import { getAuth, signInWithPopup, signOut, GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import authentication from "../Components/Login/Firebase/firebase.init";


authentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [isload, setIsLoad] = useState(true);
    const auth = getAuth();
    const handleRegistration = (e) => {
        console.log(email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError("password at least need to 6 chasracter");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
        
    }

    const changeEmailEvent = e => {
        setEmail(e.target.value);
    }

    const changePasswordEvent = e => {
        setPassword(e.target.value);
    }

    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
        .finally(() => {
            setIsLoad(false);
        })

    }
    const logOut = () => {
        setIsLoad(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoad(false);
            })
    }

    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            user ? setUsers(user) : setUsers({});
        });
        setIsLoad(false);
        return unsubscribe;
    }, [])
    
    return {
        users,
        signInGoogle,
        logOut,
        handleRegistration,
        changeEmailEvent,
        changePasswordEvent,
        error,
        toggleLogin,
        isLogIn,isload
    }

}

export default useFirebase;