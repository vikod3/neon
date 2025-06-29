
import { Home, Bed, Bath } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[900px] bg-cottage-hero bg-cover bg-center bg-no-repeat flex flex-col">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25"></div>
      
      {/* Navigation Header */}
      <div className="relative z-10 w-full pt-4 md:pt-6 px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3 order-1 md:order-1">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
              <Home className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" />
            </div>
            <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
              Cold Spring Luxury Cottage
            </div>
          </div>

          {/* Navigation - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center gap-0 order-2">
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Overview
            </button>
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Gallery
            </button>
            <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 transition-all">
              Location
            </button>
          </div>

          {/* Contact Button */}
          <button className="px-3 py-2 bg-white rounded-full shadow-lg backdrop-blur-sm text-black text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-gray-100 transition-all order-3">
            Contact
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 md:px-6 pb-4 md:pb-6 pt-20 md:pt-40">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-8 md:gap-14">
          {/* Hero Title and Features */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Main Title */}
            <div className="max-w-full md:max-w-[476px]">
              <h1 className="text-white font-space-grotesk text-4xl md:text-[88px] font-normal uppercase leading-tight md:leading-[84.48px] tracking-tight">
                A New Era of Digital Ownership
              </h1>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
              <div className="w-full sm:w-auto min-w-[160px] px-4 md:px-6 py-4 md:py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  2,100 SF
                </div>
              </div>
              
              <div className="w-full sm:w-auto min-w-[160px] px-4 md:px-6 py-4 md:py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Bed className="w-5 h-5 md:w-6 md:h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  3 Beds
                </div>
              </div>
              
              <div className="w-full sm:w-auto min-w-[160px] px-4 md:px-6 py-4 md:py-5 bg-glass-gradient backdrop-blur-sm rounded-full border border-white/20 shadow-lg flex flex-col items-center gap-2.5">
                <Bath className="w-5 h-5 md:w-6 md:h-6 text-white/65" />
                <div className="text-white text-sm font-space-grotesk font-medium text-center">
                  2 Baths
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col gap-1.5 text-center md:text-left">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Property Type
              </div>
              <div className="text-white text-2xl md:text-[40px] font-space-grotesk font-normal uppercase leading-tight md:leading-[38.40px]">
                Cottage
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-center">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Lot Size
              </div>
              <div className="text-white text-2xl md:text-[40px] font-space-grotesk font-normal uppercase leading-tight md:leading-[38.40px]">
                1.5 Acres
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-center">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Built In
              </div>
              <div className="text-white text-2xl md:text-[40px] font-space-grotesk font-normal uppercase leading-tight md:leading-[38.40px]">
                Jun 2013
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 text-center md:text-right">
              <div className="text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2">
                Availability
              </div>
              <div className="text-white text-2xl md:text-[40px] font-space-grotesk font-normal uppercase leading-tight md:leading-[38.40px]">
                For Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
