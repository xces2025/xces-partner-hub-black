import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-xces-black text-white flex flex-col justify-center items-center p-4">
      <div className="text-center max-w-md">
        <img 
          src="public\uploads\nvavlogo.png" 
          alt="XCES Logo" 
          className="h-16 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-300 mb-8">
          We're working hard to bring you this feature. Please check back soon!
        </p>
        <Link 
          to="/" 
          className="flex items-center justify-center gap-2 text-xces-blue hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;