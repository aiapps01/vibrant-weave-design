
import { PawPrint } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 rounded-lg p-6 flex items-center gap-4">
            <div className="bg-white p-3 rounded-lg">
              <PawPrint className="h-8 w-8 text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-playfair">5-Star Ratings</h3>
              <p className="text-gray-600">Across Platforms</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="space-y-2">
              <p className="text-gray-600">Trusted By Cat Owners</p>
              <h2 className="text-4xl md:text-5xl font-bold">13K+</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
