import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ProductInterface } from "../interfaces/products";
import apiSpring from "../api/apiSpring";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiSpring.get("/products");
        setProducts(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto p-4">
      {/* Header */}
      <div className="bg-gray-900 flex justify-between text-white py-2 -mt-4 rounded">
        <BiChevronLeft
          size={30}
          onClick={() => navigate(-1)}
          className="ml-2 cursor-pointer"
        />
        <h1 className="text-center text-md text-gray-200 font-bold mr-8 mt-0.5">
          Products
        </h1>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        // Product List
        <div className="mt-8 space-y-4">
          {products.map((product) => (
            <div
              key={product.rfId}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{product.productName}</h3>
                <span className="text-yellow-500 font-bold">
                  ${product.price}
                </span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
