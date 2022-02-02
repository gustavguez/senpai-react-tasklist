import { useParams } from "react-router-dom";

export function ProductPage() {
  const params = useParams();
  return (
    <div className="container">
      <h1 className="title">Producto ampliado: {params.productId}</h1>
    </div>
  );
}
