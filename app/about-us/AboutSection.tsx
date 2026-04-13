import Image from "next/image";

const AboutAcademy = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-black text-3xl md:text-4xl font-bold tracking-widest uppercase mb-8">
            About Our Salon
          </h2>

          <p className="text-neutral-600 text-base leading-relaxed mb-8">
            Looks Academy is a premier professional training institute dedicated to shaping the
            next generation of beauty and hairstyling experts. Backed by the legacy of Looks
            Salon—India's largest and fastest-growing pan-India salon chain—the academy brings
            industry knowledge, global techniques, and real-world salon experience under one roof.
            With a strong focus on practical learning, expert mentorship, and career-oriented
            education, Looks Academy equips students with the skills, confidence, and
            professionalism required to succeed in the ever-evolving beauty and wellness industry.
            Located in Dehradun, the academy stands as a center of excellence where creativity is
            nurtured, talent is refined, and passion is transformed into a rewarding career.
          </p>

          <div className="w-16 h-px bg-black" />
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] border border-neutral-200">
            <Image
              src="/images/academy.jpg"
              alt="Looks Academy"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAcademy;