//import { Home } from './pages/Home';
import { createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext('');

function App() {
  return (
   <BrowserRouter>
    <TestContext.Provider value={'Teste'}
      <Route path="/" exact Component={Home} />
      <Route path="/rooms/new" Component={NewRoom} />
    </TestContext.Provider> 
   </BrowserRouter>
  );
}

export default App;
