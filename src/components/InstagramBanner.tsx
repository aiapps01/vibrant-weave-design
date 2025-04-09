
import { ArrowUpRight } from "lucide-react";

const InstagramBanner = () => {
  return (
    <section className="py-8 md:py-10 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="bg-gray-200 rounded-full py-4 px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base font-medium">FOLLOW US ON INSTAGRAM @MEOWCARE</span>
          </div>
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default InstagramBanner;
