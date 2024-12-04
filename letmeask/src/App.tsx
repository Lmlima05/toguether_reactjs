//import { Home } from './pages/Home';
import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

type Value = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  value: Value | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [value, setValue] = useState<Value>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
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
    <AuthContext.Provider value={{ value, signInWithGoogle }}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
    </AuthContext.Provider>
  </BrowserRouter>
  );
}

export default App;
