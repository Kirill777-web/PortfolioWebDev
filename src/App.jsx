import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Achievements from './Achievements';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
