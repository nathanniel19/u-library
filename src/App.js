import { Route, BrowserRouter, Routes} from 'react-router-dom'


import { Container } from "@mui/material";
import Home from "./components/Home";

import SparepartPages from './components/SparepartPages';
import UnitPages from './components/UnitPages';
import ProblemListPages from './components/ProblemListPages';
import Example3DModel from './components/Example3DModel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sparepartCatalogue' element={<SparepartPages />} /> 
            <Route path='/unitManual' element={<UnitPages />} />
            <Route path='/problemList' element={<ProblemListPages />} />
            <Route path='/example' element={<Example3DModel />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
