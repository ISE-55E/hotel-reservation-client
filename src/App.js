import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Landing from "./components/landing_page/landing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/gallery' element={<Landing />} />
            <Route path='/rooms' element={<Landing />} />
            <Route path='/about-us' element={<Landing />} />
            <Route path='/service' element={<Landing />} />
            <Route path='/event' element={<Landing />} />
          </Routes>
      </div>
  );
}

export default App;
