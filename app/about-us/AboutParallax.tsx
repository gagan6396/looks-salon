export default function ParallaxHero() {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@400;600&display=swap');
        `}</style>
  
        <div className="relative h-[520px] overflow-hidden">
          {/* Fixed background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80')",
              backgroundAttachment: "fixed",
              filter: "brightness(0.45) grayscale(0.75)",
            }}
          />
  
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-16">
            <p
              className="text-xs tracking-[0.5em] text-gray-300 uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Looks Salon
            </p>
  
            <h1
              className="text-6xl md:text-7xl font-black leading-none tracking-tight mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#c9a84c",
              }}
            >
              LEARN FROM
              <br />
              PROFESSIONALS
            </h1>
  
            <button
              className="w-fit border border-white text-white text-xs tracking-[0.35em] uppercase px-10 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </>
    );
  }