import { Link } from 'react-router-dom';
import { useEthereum } from '../hooks/useEthereum';
import MetaMaskDialog from './MetaMaskDialog';
import MetaMaskErrorDialog from './MetaMaskErrorDialog';

function Navbar() {
  const { 
    address, 
    isConnected, 
    showMetaMaskDialog,
    showErrorDialog,
    errorMessage,
    connectWallet, 
    disconnectWallet,
    closeMetaMaskDialog,
    closeErrorDialog
  } = useEthereum();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-skycode-600">SkyCode Store</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-skycode-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-skycode-600">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-skycode-600">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
                <button
                  onClick={disconnectWallet}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-skycode-600 text-white px-4 py-2 rounded-lg hover:bg-skycode-700"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>

      <MetaMaskDialog 
        open={showMetaMaskDialog} 
        onClose={closeMetaMaskDialog} 
      />

      <MetaMaskErrorDialog
        open={showErrorDialog}
        onClose={closeErrorDialog}
        error={errorMessage}
      />
    </nav>
  );
}

export default Navbar;