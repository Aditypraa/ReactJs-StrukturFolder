import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    images: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
  {
    id: 2,
    name: "Baju Keren",
    price: 500000,
    images: "/images/clothes1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
  {
    id: 3,
    name: "Tas Trendy",
    price: 800000,
    images: "/images/bag1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.images} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
