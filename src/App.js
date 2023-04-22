import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact.jsx';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
