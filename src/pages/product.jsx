import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "1.000.000",
    images: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
  {
    id: 2,
    name: "Baju Keren",
    price: "500.000",
    images: "/images/clothes1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
  {
    id: 3,
    name: "Tas Trendy",
    price: "800.000",
    images: "/images/bag1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et quisquam aperiam, harum voluptate aliquam architecto sequi voluptas, vitae blanditiis excepturi necessitatibus explicabo. At quisquam quibusdam hic, veritatis rem delectus!",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.images} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
