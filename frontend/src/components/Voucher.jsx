import { useEffect, useState } from "react";
import "./Voucher.scss";

export default function Voucher() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      withCredentials: true,
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.info(products);
  return (
    <div className="voucher-ctn">
      <h1 className="voucher-title">Félicitation</h1>
      <img src={products[0].object} alt="bon d'achat" className="product-img" />
      <p className="voucher-text">
        Vous avez gagné un bon de réduction sur l'article :
        <br />
        <b className="product"> {products[0].name}</b> <br />à utiliser lors de
        votre prochain achat sur le site <b>Kérastase Paris</b>.
      </p>
      <h2 className="voucher-subtitle">Code Promo :</h2>
      <p className="code">
        <b>{products[0].vouncher}</b>
      </p>
    </div>
  );
}
