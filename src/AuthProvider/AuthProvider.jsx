import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./app";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let webUrl = import.meta.env.VITE_WEB_URL;

  let [allClasses, setAllClasses] = useState([]);
  let [singlePayClass, setsinglePayClass] = useState(null);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const provider = new GoogleAuthProvider();

  const normalRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const normalLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    normalRegister,
    user,
    normalLogin,
    LogOut,
    loading,
    LoginWithGoogle,
    updateUser,
    webUrl,
    allClasses, 
    setAllClasses,
    singlePayClass, setsinglePayClass
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;