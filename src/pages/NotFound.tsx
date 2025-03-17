import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-skycode-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-block mt-6 px-6 py-3 bg-skycode-600 text-white rounded-lg hover:bg-skycode-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;