import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center text-white max-w-md">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-red-500 animate-pulse" />
        </div>
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">404</h1>
        <p className="text-2xl font-medium mb-4 text-gray-300">Oops! Page not found</p>
        <p className="mb-6 text-gray-500">
          The page <span className="text-red-400">{location.pathname}</span> does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-xces-blue hover:bg-blue-600 transition-colors text-white font-semibold py-2 px-6 rounded-full shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
