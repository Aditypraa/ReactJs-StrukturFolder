import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et
          quisquam aperiam, harum voluptate aliquam architecto sequi voluptas,
          vitae blanditiis excepturi necessitatibus explicabo. At quisquam
          quibusdam hic, veritatis rem delectus!
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam et
          quisquam aperiam, harum voluptate aliquam architecto sequi voluptas,
          vitae blanditiis excepturi necessitatibus explicabo. At quisquam
          quibusdam hic, veritatis rem delectus!
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
