import Cart from './Components/Cart/cart';
import Product_category from './Components/Product_category/Product_category';
import Product from "./Components/Product_category/Product";
import Product_cart from "./Components/Product_category/Product_cart";
import My_cart from "./Components/My_cart/My_cart";
import Registered_customer from './Components/Registered_customer/Registered_customer';
import Create_account from './Components/Registered_customer/Create_account';
function App() {
  return (
    <div className="App">
      < Cart styles={{ width: '300px' }} />
      < Product_category />
      < Product />
      < Product_cart />
      < My_cart />
      < Registered_customer />
      < Create_account />

    </div>
  );
}

export default App;
