import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Transactions from '../../pages/Transactions/Transactions';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/user' element={<Dashboard />} />
              <Route path='/transactions' element={<Transactions />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
<Header />