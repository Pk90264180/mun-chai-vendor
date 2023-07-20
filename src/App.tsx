import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewOrders from './pages/NewOrders';
import Footer from './components/footer/Footer';
import AcceptedOrders from './pages/AcceptedOrders';
import DeliveredOrders from './pages/DeliveredOrders';
import RejectedOrders from './pages/RejectedOrders';
import RefundedOrders from './pages/RefundedOrders';
import WaitingForOrders from './pages/WaitingForOrders';
import './App.css';
// import Timer from './components/timer/Timer';
import { Provider } from 'react-redux';
import {store} from './store/Store';



function App() {
  return (
    <div className="App" >
      <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/neworder' element={<NewOrders />} />
                <Route path='/accepted' element={<AcceptedOrders />} />
                <Route path='/delivered' element={<DeliveredOrders />} />
                <Route path='/rejected' element={<RejectedOrders />} />
                <Route path='/refunded' element={<RefundedOrders />} />
                <Route path='/' element={<WaitingForOrders />} />
            </Routes>
            <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
