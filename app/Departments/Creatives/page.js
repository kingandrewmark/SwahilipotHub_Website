import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

const programs = [
  {
    image: "/cre 1.jpg",
    alt: "Theatre Zone",
    title: "Theatre Zone: Cultivating the Acting Stars of Tomorrow",
    description:
      "If you have a passion for acting, our Theatre Zone program is the perfect place to nurture your talent. Through comprehensive training and educational initiatives, we empower aspiring actors to shine on both stage and screen. Join us on this transformative journey and unlock your full potential.",
    color: "text-primary",
  },
  {
    image: "/cre 2.jpg",
    alt: "SoundPot",
    title: "SoundPot: Amplifying Young Voices",
    description:
      "At SoundPot, we believe that every voice deserves to be heard. Our dedicated team of mentors and trainers will guide you on a melodic journey of self-expression and artistic growth. Whether you're a singer, poet, or voice artist, join us and let your voice resound in the hearts of others.",
    color: "text-warning",
  },
  {
    image: "/cre 3.jpg",
    alt: "Pot Culture",
    title: "Pot Culture: Unveiling the Arts",
    description:
      "Immerse yourself in the vibrant world of arts at Pot Culture, our periodic event that celebrates creativity in all its forms. Experience captivating performances of dance, music, and poetry as we showcase the rich tapestry of artistic expression within our community. Prepare to be inspired and amazed.",
    color: "text-success",
  },
];

const CreativesDepartment = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Creatives Department" />
      <section className="creatives-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              <span className="text-primary">Ubunifu Unaong'ara</span>{" "}
              <span className="text-warning">Sanaa Inabadilisha Dunia</span>
            </h2>
            
          </div>

          

          {/* Program Sections */}
          {programs.map((program, index) => (
            <div
              key={index}
              className={`row align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              <div className="col-md-6 text-center">
                <Image
                  src={program.image}
                  alt={program.alt}
                  width={500}
                  height={320}
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className={`fw-bold ${program.color}`}>{program.title}</h2>
                <p className="fs-5">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </NextLayout>
  );
};

export default CreativesDepartment;
