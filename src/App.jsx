import './styles/main.css';
import 'typeface-open-sans';
import Hero from './components/Hero';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Cards />
      {/* <Component /> */}
      <Blogs />
      {/* <Footer /> */}
    </div>
  );
}

export default App;