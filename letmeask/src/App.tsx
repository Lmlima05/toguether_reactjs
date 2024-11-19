//import { Home } from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
   <BrowserRouter>
    <Route path="/" exact Component={Home} />
    <Route path="/rooms/new" Component={NewRoom} />
   </BrowserRouter>
  );
}

export default App;
