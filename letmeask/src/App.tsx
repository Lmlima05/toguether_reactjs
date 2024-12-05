//import { Home } from './pages/Home';
import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './contexs/AuthContex';

function App() {
  const [value, setValue] = useState<Value>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const {displayName, photoURL, uid } = user
        
        if (!displayName || !photoURL) {
          throw new Error('Missing information from google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from google Account.')
      } 

      setValue  ({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }
 
  return (  
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
function setUser(arg0: { id: string; name: string; avatar: string; }) {
  throw new Error('Function not implemented.');
}

