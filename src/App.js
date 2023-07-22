import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Contact from './components/Contact';
import About from './components/About';
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";

function App() {
  return (
    <Routes> 
    <Route path={"/"} element={<Nav />} />
                <Route path={"/menu"} element={<Menu />} />
                <Route path={"/reservation"} element={<Reservation />} />
                <Route path={"/aboutUs"} element={<About />} />
                <Route path={"/contact"} element={<Contact /> } />
                <Route path={"*"} element={<h2>Page Not Found</h2>} />              
    </Routes>
  );
}

export default App;


