import { BrowserRouter as Router, Routes, NavLink,  Route } from 'react-router-dom';
import './App.css';
import {Home} from './HomePage/Home';
import {CompanyDetail} from './CompanyDetail/CompanyDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/companyDetail"element={<CompanyDetail />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
