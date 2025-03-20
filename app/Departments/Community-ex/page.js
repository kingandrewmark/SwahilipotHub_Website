import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

const sections = [
  {
    image: "/img00.jpg",
    alt: "Community Collaboration",
    title: "Platform for Expression",
    description:
      "We provide a platform for individuals to freely express their thoughts, ideas, and opinions in an inclusive and respectful environment. No matter your background, tribe, or beliefs, your voice matters here. Our mission is to foster a safe space where all community members feel valued and empowered.",
    color: "text-primary",
  },
  {
    image: "/img01.jpg",
    alt: "Workshops and Training",
    title: "Love, Unity, and Coexistence",
    description:
      "At our core, we believe in fostering love, unity, and peaceful coexistence. By embracing diversity and collaboration, we build stronger connections that drive positive change. Partnerships and shared experiences shape a more inclusive society.",
    color: "text-warning",
  },
  {
    image: "/img20.jpg",
    alt: "Networking Events",
    title: "People-Powered Community",
    description:
      "Swahilipot Hub is more than just a space; it’s a movement driven by people. Our diverse members bring unique skills and experiences, creating a dynamic hub for learning, growth, and impact. Together, we support each other’s aspirations, explore new ideas, and make a difference in our community.",
    color: "text-success",
  },
];

const CommunityExperience = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Community Department" />
      <section className="community-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              <span className="text-primary">Tujenge Pamoja,</span>{" "}
              <span className="text-warning">Tufanye Tofauti</span>
            </h2>
            
          </div>

          {/* Main Image */}
          <div className="text-center mb-5">
            <Image
              src="/community.jpg"
              alt="Community Department"
              width={900}
              height={500}
              className="img-fluid rounded shadow-lg"
            />
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`row align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              <div className="col-md-6 text-center">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={500}
                  height={320}
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className={`fw-bold ${section.color}`}>{section.title}</h2>
                <p className="fs-5">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </NextLayout>
  );
};

export default CommunityExperience;
