import { useState } from "react";
import {
  Search,
  Filter,
  ShoppingCart,
  Home,
  ChevronDown,
  Star,
} from "lucide-react";

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRange, setPriceRange] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      category: "Vegetables",
      originalPrice: 4.99,
      discountedPrice: 3.99,
      discount: 20,
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: true,
    },
    {
      id: 2,
      name: "Fresh Farm Eggs",
      category: "Dairy & Eggs",
      originalPrice: 6.99,
      discountedPrice: 5.49,
      discount: 21,
      rating: 5.0,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Apples",
      category: "Fruits",
      originalPrice: 3.99,
      discountedPrice: 2.99,
      discount: 25,
      rating: 4.2,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: true,
    },
    {
      id: 4,
      name: "Homemade Jam",
      category: "Preserves",
      originalPrice: 7.99,
      discountedPrice: 6.79,
      discount: 15,
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: false,
    },
    {
      id: 5,
      name: "Fresh Kale",
      category: "Vegetables",
      originalPrice: 2.99,
      discountedPrice: 2.49,
      discount: 17,
      rating: 4.0,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: true,
    },
    {
      id: 6,
      name: "Raw Honey",
      category: "Preserves",
      originalPrice: 9.99,
      discountedPrice: 7.99,
      discount: 20,
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      inStock: true,
    },
  ];

  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Dairy & Eggs",
    "Preserves",
  ];

  // Filter products based on search term, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    const matchesPrice = product.discountedPrice <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
    // Add cart functionality here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-600 ml-2">myFarm</h1>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page title and search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Farm Fresh Products
          </h2>
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <button
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm w-full"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2 text-gray-600" />
            <span>Filters</span>
            <ChevronDown
              className={`h-5 w-5 ml-2 text-gray-600 transition-transform ${
                showFilters ? "transform rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block md:w-64 bg-white p-4 rounded-lg shadow-sm sticky top-4`}
          >
            <h3 className="font-semibold text-lg mb-4">Filters</h3>

            {/* Category filter */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Categories
              </h4>
              {categories.map((category) => (
                <div key={category} className="mb-1 flex items-center">
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    checked={categoryFilter === category}
                    onChange={() => setCategoryFilter(category)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <label
                    htmlFor={category}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>

            {/* Price range filter */}
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Price Range
              </h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">$0</span>
                <span className="text-sm text-gray-600">${priceRange}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
            </div>

            {/* Availability filter */}
            <div>
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Availability
              </h4>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="in-stock"
                  className="ml-2 text-sm text-gray-700"
                >
                  In Stock Only
                </label>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.discount > 0 && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                          <span className="text-white font-medium text-lg">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">
                        {product.category}
                      </span>
                      <h3 className="font-medium text-lg mt-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="text-lg font-semibold text-green-600">
                          ${product.discountedPrice.toFixed(2)}
                        </span>
                        {product.discount > 0 && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className={`mt-3 w-full py-2 px-4 rounded-md flex items-center justify-center ${
                          product.inStock
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
