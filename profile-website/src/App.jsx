import Navbar from "./assets/navbar.jsx";
import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
import AboutMe from "./pages/aboutme.jsx";


function App() {

  return (
    
    <div>
      <Navbar />
      <Home/>            
      <AboutMe/> 
      <Gallery />
    </div>

    
  );
}

export default App;