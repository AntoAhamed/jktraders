import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            {/*<Route path="footer" element={<Footer />} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
