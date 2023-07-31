import Feature from './Components/Feature';
import Footer from './Components/Footer';
import { Home } from './Components/Home';
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import './App.css'
import './assets/css/MeteorShower.scss'


function App() {
  return (
    <>
      <div className='background'>
        <div className='star'></div>
        <Navbar />
        <Home />
        <Feature />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
