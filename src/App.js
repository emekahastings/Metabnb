import { Routes, Route } from 'react-router-dom';
import Places from './Places'
import Home from './Home';
import Connect from './Connect';
function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home />}></Route>
   <Route path='/places' element={<Places />} />
   <Route path='/connect' element={<Connect />} />
   </Routes>
   
   
    </div>
  );
}

export default App;
