import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexs/AuthContex';

function App() {
  return (  
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/new" element={<NewRoom /> } />
      </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;


