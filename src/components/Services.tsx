import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      key: 1,
      name: "Web Development",
      icon: "web-dev.png",
      description:
        "Our team of web developers helps your business stand out of the crowd in the online marketplace by providing brilliantly designed website",
    },
    {
      key: 2,
      name: "Mobile App Development",
      icon: "mobile-dev.png",
      description:
        "Unleash your potential with apps that go beyond the screen, transforming ideas into seamless experiences in IOS and Android devices",
    },
    {
      key: 3,
      name: "Payments integration system",
      icon: "payment.png",
      description:
        "We seamlessly integrate with secure payment gateways, empowering smooth and convenient transactions for your business ",
    },
    {
      key: 4,
      name: "Mobile Games Development",
      icon: "game-dev.png",
      description:
        "Our team of skilled game developers comes with a wealth of experience in both 2D and cutting-edge AR and 3D technologies. We are passionate about bringing your game ideas to life",
    },
    {
      key: 5,
      name: "Domain & hosting service",
      icon: "hosting.png",
      description:
        "Your online presence starts here. We offer reliable domain registration and hosting tailored to your needs",
    },
    {
      key: 6,
      name: "AI & ML Solutions",
      icon: "ai.png",
      description:
        "Empower your business with smart AI tools that analyze data and predict outcomes, unlocking new opportunities.",
    },
    {
      key: 7,
      name: "Bulk SMS & Email ",
      icon: "bulk.png",
      description:
        "Reach your customers effortlessly. Our bulk messaging and email solutions ensure effective communication.",
    },
    {
      key: 8,
      name: "System security & testing",
      icon: "sys-sec.png",
      description:
        "Our dedicated team is here to ensure the utmost protection and reliability of your systems.",
    },
  ];

  return (
    <div id="services">
      <div className="container px-8 my-16 mx-auto">
        <h1 className="text-3xl font-semibold text-center my-6">What We Do?</h1>
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, translateX: -50 },
                visible: {
                  opacity: 1,
                  translateX: 0,
                  transition: {
                    type: "spring",
                    duration: 0.5,
                    delay: i * 0.1,
                  },
                },
              }}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="p-6 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white border-4 rounded-2xl transition ease-in duration-100"
              key={service.key}
            >
              <img className="mx-auto" src={`assets/${service.icon}`} alt="" />
              <h3 className="text-center font-bold text-2xl">{service.name}</h3>
              <br />
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
