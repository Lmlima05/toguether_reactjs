//import { Home } from './pages/Home';
import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth, firebase } from './services/firebase';

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('Teste');

  function signInWithGoole() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from google Account.')
      } 

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
      }
    })
  }
 
  return (  
    <BrowserRouter>
    <TestContext.Provider value={{ value, setValue }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </TestContext.Provider>
  </BrowserRouter>
  );
}

export default App;
