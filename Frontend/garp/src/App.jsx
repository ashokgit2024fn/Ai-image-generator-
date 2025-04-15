import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Gen from './Pages/Gen.jsx';
import Footer from"./Components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen" element={< Gen/>} />
       
      </Routes>
      <Footer/>
      </Router>
  
    

    </div>
  )
}

export default App