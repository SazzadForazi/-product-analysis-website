import './App.css';
import Home from './Component/Home/Home';
import Nab from './Component/Nab/Nab';
import { Routes, Route } from "react-router-dom";
import Reviews from './Component/Reviews/Reviews';
import DashBoard from './Component/DashBoard/DashBoard';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Notfound from './Component/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      <Nab></Nab>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashBoard" element={<DashBoard />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
