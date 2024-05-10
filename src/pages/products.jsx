import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      {/* ======= NAVBAR ======= */}
      <Navbar />
      {/* =======END NAVBAR ======= */}

      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        {/* ======= CARD PRODUCT =======  */}
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        {/* ======= CARD PRODUCT =======  */}

        {/* ======= CART ======= */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
        {/* ======= END CART ======= */}
      </div>
    </>
  );
};

export default ProductsPage;
