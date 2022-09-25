import './App.css';
import Menubar from './components/Menubar';
import Banner from './pages/Banner';
import About from './pages/About';
import OurServerice from './pages/OurServerice';
import OurProducts from './pages/OurProducts';
import Ourmember from './pages/Ourmember';
import Footer from './pages/Footer';
function App() {
  return (
   <>
    <Menubar/>
    <Banner/>
     <About/>
     <OurServerice/>
     <OurProducts/>
     <Ourmember/>
     <Footer/>
   </>
  );
}

export default App;
