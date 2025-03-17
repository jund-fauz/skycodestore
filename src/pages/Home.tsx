function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-skycode-600">SkyCode Store</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Your premier marketplace for Web3 products and services by SkyCode Ventures Indonesia
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href="/products"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-skycode-600 hover:bg-skycode-700 md:py-4 md:text-lg md:px-10"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['NFT Collections', 'DeFi Products', 'Web3 Services'].map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
              <p className="mt-2 text-gray-600">Explore our selection of {category.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;