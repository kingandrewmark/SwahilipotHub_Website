import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const donations = [
  {
    amount: 100,
    title: "A PAD",
    description: "A Packet of Pad",
    details: ["✓ 1 Pad packet"],
    link: "https://flutterwave.com/pay/fsxxrsiu1hvk",
  },
  {
    amount: 2000,
    title: "Box of Pads",
    description: "1 Box of Pads",
    details: ["✓ 1 Box of Pads"],
    link: "https://flutterwave.com/pay/qlpsgprb9zr3",
  },
  {
    amount: 2499,
    title: "Hygiene Pack",
    description: "A Hygiene Pack Donation",
    details: [
      "✓ Pack of Pads",
      "✓ Pair of Panties",
      "✓ Toothbrush and Toothpaste",
      "✓ Tissue, Razor & Bar of Soap",
    ],
    link: "https://flutterwave.com/pay/zcmuut85e3bj",
  },
  {
    amount: 5000,
    title: "Half Mentorship Support Package",
    description: "Support women in tech mentorship programs",
    details: [
      "✓ Funds mentorship programs",
      "✓ Provides hygiene products to those in need",
    ],
    link: "https://flutterwave.com/pay/wiqpywjiz2w5",
  },
  {
    amount: 10000,
    title: "Full Mentorship Support Package",
    description: "Empower women through mentorship and tech education",
    details: [
      "✓ Directly funds mentorship programs",
      "✓ Supports hygiene and education programs",
    ],
    link: "https://flutterwave.com/pay/4nvphchgpofl",
  },
];

const SupportSwahiliTechWomen = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Support Swahili Tech Women" />
      <section className="donation-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Donate Now
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Support Women in Tech <br /> Through Your Donations
            </h2>
          </div>

          <div className="row g-4 mt-5">
            {donations.map((donation, index) => (
              <div key={index} className="col-md-4">
                <div className="donation-box wow fadeInUp" data-wow-delay=".3s">
                  <h3 className="text-center">KES {donation.amount}</h3>
                  <p className="text-center">{donation.title}</p>
                  <p className="text-center text-muted">{donation.description}</p>
                  <ul className="mt-3 text-muted">
                    {donation.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="text-center mt-3">
                    <a
                      href={donation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h3 className="wow fadeInUp" data-wow-delay=".3s">Make a Custom Donation</h3>
            <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
              Want to contribute a custom amount? Click the button below to enter your own donation amount.
            </p>
            <a
              href="https://flutterwave.com/donate/moihmphwlo5o"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn mt-3"
            >
              Donate Any Amount
            </a>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default SupportSwahiliTechWomen;
