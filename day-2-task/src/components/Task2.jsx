import { useState } from "react";

function Task2() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 1000 },
    { id: 5, name: "Mouse", price: 500 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Product Search System
        </h1>

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded mb-6"
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded shadow"
              >
                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  Price: ₹{product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-lg">
            No Products Found
          </p>
        )}
      </div>
    </div>
  );
}

export default Task2;