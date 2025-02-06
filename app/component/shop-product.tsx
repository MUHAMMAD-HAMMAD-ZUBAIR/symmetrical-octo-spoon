"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Sanity Client Setup
const sanity = createClient({
  projectId: "4bdbxde7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-10-21",
});

// Product Interface
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  discountPercentage?: number; // Optional field
  tags: string[];
}

// Component
const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const productsPerPage = 8;

  // Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "products"]{
          _id,
          title,
          price,
          description,
          "imageUrl": image.asset->url,
          tags
        }
      `;
      const data: Product[] = await sanity.fetch(query);
      console.log("Fetched Products:", data); // Debugging
      setProducts(data || []); // Ensure fallback to an empty array
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add Product to Cart
  const addToCart = (product: Product) => {
    if (!cart.some((item) => item._id === product._id)) {
      setCart((prevCart) => [...prevCart, product]);
      alert(`${product.title} added to cart!`);
    } else {
      alert(`${product.title} is already in the cart.`);
    }
  };

  // Remove Product from Cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    alert("Product removed from cart!");
  };

  // Truncate Long Descriptions
  const truncateDescription = (description: string) => {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  };

  // Paginate Products
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products from API Data</h2>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Component with Fallback */}
                <Image
                  src={product.imageUrl || "/placeholder.svg"} // Fallback for missing images
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-slate-800 mt-2 text-sm">
                    {truncateDescription(product.description)}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-slate-600 font-bold">${product.price}</p>
                      {product.discountPercentage && product.discountPercentage > 0 && (
                        <p className="text-sm text-green-600">
                          {product.discountPercentage}% OFF
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Tags Section Removed */}
                  {/* <div className="mt-2 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-slate-400 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <button
                    className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              disabled={currentPage * productsPerPage >= products.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"} // Fallback for cart item images
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="text-sm text-blue-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your Cart is empty. Please add some products!</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;