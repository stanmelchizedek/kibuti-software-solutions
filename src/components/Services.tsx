import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      key: 1,
      name: "Web Design & Development",
      icon: "web-dev.png",
    },
    {
      key: 2,
      name: "Mobile App Development",
      icon: "mobile-development.png",
    },
    {
      key: 3,
      name: "Payments integration system",
      icon: "payment-system.png",
    },
    {
      key: 4,
      name: "Mobile Games Development",
      icon: "game-development.png",
    },
    {
      key: 5,
      name: "Domain & hosting service",
      icon: "web-hosting.png",
    },
    {
      key: 6,
      name: "AI & ML Solutions",
      icon: "artificial-intelligence.png",
    },
    {
      key: 7,
      name: "Bulk SMS & Email ",
      icon: "bulk-sms.png",
    },
    {
      key: 8,
      name: "System security & testing",
      icon: "system-security.png",
    },
  ];

  return (
    <div id="services">
      <div className="container px-8 my-16 mx-auto text-blue-950">
        <h1 className="text-xl font-bold">OUR SERVICES</h1>
        <h3 className="text-3xl">What We Can Do For You</h3>
        <div className="services mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              className="p-4 bg-slate-200 text-blue-950 hover:bg-slate-300 rounded-xl transition ease-in duration-100"
              key={service.key}
            >
              <img className="mx-auto w-10" src={`assets/images/${service.icon}`} alt="" />
              <br />
              <p className="text-center text-sm">{service.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
