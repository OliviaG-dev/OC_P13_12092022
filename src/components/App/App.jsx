import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Transactions from '../../pages/Transactions/Transactions';
import PrivateRoute from '../../utils/privateRoute';
import Error404 from '../Error404/Error404';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/profile' element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
<Header /> 