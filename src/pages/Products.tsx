function Products() {
  const products = [
    {
      id: 1,
      name: 'Web3 Development Course',
      price: '0.5 ETH',
      description: 'Comprehensive course on Web3 development',
      category: 'Education'
    },
    {
      id: 2,
      name: 'NFT Collection Launch',
      price: '2 ETH',
      description: 'Launch your NFT collection with our help',
      category: 'Services'
    },
    {
      id: 3,
      name: 'Smart Contract Audit',
      price: '1 ETH',
      description: 'Professional smart contract security audit',
      category: 'Security'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-skycode-600 font-semibold">{product.price}</span>
                <button className="bg-skycode-600 text-white px-4 py-2 rounded-lg hover:bg-skycode-700">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;