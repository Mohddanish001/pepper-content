// import Navbar from "./Dashboard/Navbar";
import './App.css';
import Page1 from './Dashboard/Pages/Page1';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import SetupAccount from './Dashboard/UserLogin/SetupAccount';
import Second from './Dashboard/UserLogin/Second';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />}/>
        <Route path="/details" element={<SetupAccount />} />
        <Route path='/details/verify' element={<Second />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
