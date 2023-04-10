import {Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './pages/Home';


function App() {
  return(
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      <Footer />
    </>

  )
}

export default App;
