import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './Styles/Styles.scss'
// import store from './redux/store';
import ProductDetails from './components/productDetails/ProductDetails';
import CartDetail from './components/cart/CartDetail';
import CartProvider from './redux/CartProvider';

function App() {
  return (
    <CartProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/ProductDetails/:id" component={ProductDetails} />
        <Route exact path="/CartDetail" component={CartDetail} />
      </Router>
    </CartProvider>
  );
}

export default App;
