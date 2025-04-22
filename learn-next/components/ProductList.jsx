import React from "react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState();

  //상품 목록
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <Image src={product.imageUrl} width={100} height={100} alt="" />
              </div>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
