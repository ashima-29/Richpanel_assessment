import './App.css'
import Sign from "./Sign"
import Register from "./Register"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Sign />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
