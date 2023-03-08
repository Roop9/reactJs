import './css/App.css'; 
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Authenticate from './screens/Authenticate';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route exact path="/" element={<Authenticate/>} />
            <Route exact path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
