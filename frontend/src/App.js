import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Listing from './Pages/Listing/Listing';
import Parts from './Pages/Parts/Parts';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Terms from './Pages/Terms/Terms';
import Privacy from './Pages/Privacy/Privacy';
import Bloglist from './Pages/Bloglist/Bloglist';
import Blogpage from './Pages/Blogpage/Blogpage';
import Blogpagetwo from './Pages/Blogpagetwo/Blogpagetwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-rental-service-in-pune' element={<Home/>}/>
        <Route path='/mist-fan-spare-parts' element={<Parts/>}/>
        <Route path='/:category' element={<Listing/>}/>
        <Route path='/:category/:proname' element={<Detail/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/terms-and-conditions' element={<Terms/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/blog' element={<Bloglist/>}/>
        <Route path='/blog/tower-ac-vs-traditional-ac' element={<Blogpage/>}/>
        <Route path='/blog/benifits-of-mist-fan' element={<Blogpagetwo/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
