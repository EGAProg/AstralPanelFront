import './App.css';
import Body from './Body/Body.jsx';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login/Login.jsx';

function App() {
  return (
    <>
      <Router>
          <Routes>
            //<Route path="/" element={<Login />} />
            <Route path="/panel" element={<Body />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;