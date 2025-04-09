
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="container mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair leading-tight">
            Meow<br />Care
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md">
            Gentle, expert care for your felinefriend
          </p>
          <div className="pt-4">
            <Button className="rounded-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-6">
              Get Started!
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square max-w-xl mx-auto">
            <img 
              src="/lovable-uploads/c51f0960-aa80-46ab-8fa9-71704f3af5ca.png" 
              alt="Cat playing with toy" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="absolute top-10 right-10 animate-float">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="absolute right-0 top-1/2 md:right-20 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-100 rounded-full"></div>
          </div>
          
          <div className="absolute right-10 md:right-40 top-10 md:top-10 z-10">
            <div className="bg-white rounded-xl shadow-lg p-4 w-48 md:w-64">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src="/placeholder.svg" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm text-gray-600">8k+</span>
              </div>
              <img 
                src="/placeholder.svg" 
                alt="Child with cat" 
                className="w-full h-32 md:h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
