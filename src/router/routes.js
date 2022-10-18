import ProductPage from "../pages/ProductPage";
import StorePage from "../pages/StorePage";

export const publickRoutes = [
  { path: "/clothes-store", element: <StorePage /> },
  { path: "/product/:title", element: <ProductPage /> },
  // { path: "/order", element: <OrderPage /> },
];
