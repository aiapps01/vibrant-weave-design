
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 md:py-6 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Services</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Adoption</a>
          </div>

          <a href="#" className="text-2xl md:text-3xl font-playfair italic font-bold text-center">Meowcare</a>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Plans</a>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-background border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Services</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Adoption</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Plans</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
