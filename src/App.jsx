import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import PaystackImplementation from "./Components/PaystackImplementation";
import "./index.css"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<PaystackImplementation/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
