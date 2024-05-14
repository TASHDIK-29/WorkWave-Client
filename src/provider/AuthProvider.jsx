/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from './firebase.config'
import axios from 'axios'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)

    // // Clear cookie at logout
    // axios('https://assignment-11-server-nu.vercel.app/logout', { withCredentials: true })
    //   .then(res => {
    //     console.log(res.data);
    //   })

    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  const clearCookie = () => {
    axios.post('https://assignment-11-server-nu.vercel.app/logout', { email: user?.email }, { withCredentials: true })
      .then(res => {
        console.log(res.data);
      })
  }

  // onAuthStateChange
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, currentUser => {
  //     const userEmail = currentUser?.email || user?.email;
  //     const loggedUser = { email: userEmail };
  //     setUser(currentUser);
  //     console.log('current user', currentUser);
  //     setLoading(false);
  //     // if user exists then issue a token
  //     if (currentUser) {
  //       axios.post('https://assignment-11-server-nu.vercel.app/jwt', loggedUser, { withCredentials: true })
  //         .then(res => {
  //           console.log('token response', res.data);
  //         })
  //     }
  //     else {
  //       axios.post('https://assignment-11-server-nu.vercel.app/logout', loggedUser, {
  //         withCredentials: true
  //       })
  //         .then(res => {
  //           console.log(res.data);
  //         })
  //     }
  //   });
  //   return () => {
  //     return unsubscribe();
  //   }
  // }, [])




   // onAuthStateChange
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    clearCookie
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider