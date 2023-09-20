import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Listing from './Pages/Listing/Listing';
import Parts from './Pages/Parts/Parts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-rental-service-in-pune' element={<Home/>}/>
        <Route path='/mist-fan-spare-parts' element={<Parts/>}/>
        <Route path='/:category' element={<Listing/>}/>
        <Route path='/:category/:proname' element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
