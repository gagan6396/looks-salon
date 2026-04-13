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
          Looks Salon is a premier destination for professional hair and beauty services, dedicated to delivering exceptional style and care. Backed by the legacy of one of India’s largest and fastest-growing salon chains, Looks Salon brings together industry expertise, global techniques, and real salon experience under one roof.With a strong focus on personalized service, skilled stylists, and modern practices, we ensure every client receives the highest standard of care and attention. From precision haircuts to advanced coloring and treatments, our goal is to enhance your confidence and elevate your look. Located in Dehradun, Looks Salon stands as a space where creativity meets expertise—where every visit is designed to transform not just your hair, but your overall experience.
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