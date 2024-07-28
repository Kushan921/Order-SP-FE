import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddOrder from './Components/addOrder';
import GetOrder from './Components/getOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addorder" element={<AddOrder />} />
          <Route path="/getorder" element={<GetOrder />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
