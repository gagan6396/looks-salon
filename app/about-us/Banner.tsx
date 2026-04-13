import Image from "next/image";
import Link from "next/link";

const SalonBanner = () => {
  return (
    <section className="relative w-full h-[74vh] max-h-[750px] min-h-[400px] overflow-hidden bg-black">

      <Image
        src="/images/banner.jpg"
        alt="Salon banner"
        fill
        className="object-cover object-center grayscale"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

      <div className="absolute inset-0 z-10 flex flex-col justify-end items-start px-[6%] pb-16 max-w-[700px]">
        <h2 className="text-white font-bold leading-snug mb-5 text-[clamp(1.75rem,5.2vw,3.8rem)]">
          Redefine Your Natural Beauty
        </h2>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-white text-black text-[clamp(0.6rem,1.3vw,0.78rem)] font-semibold tracking-[0.12em] uppercase px-6 py-3 border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-200"
        >
          Explore <span>→</span>
        </Link>
      </div>

    </section>
  );
};

export default SalonBanner;