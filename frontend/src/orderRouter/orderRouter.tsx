import { Routes, Route } from 'react-router-dom';
import OrderForm from '../components/orderForm/OrderForm';
import { Order } from '../pages';

function OrderRouter() {
  return (
    <>
        <Routes>
            <Route path='create' element={<OrderForm/>} />
            <Route path='*' element={<Order/>}/>
        </Routes>
    </>
  );
}

export default OrderRouter;
