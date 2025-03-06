import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Shield } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Development - SkillyWork" },
    { name: "description", content: "Secure software solutions tailored to your needs" },
  ];
};

export default function Development() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent"
          >
            Secure Development
          </motion.h1>
          <p className="text-xl text-gray-300 mb-12">
            Building secure software solutions tailored to your needs
          </p>
          <Link
            to="contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"
              >
                <div className="text-green-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Modern, secure web applications",
    icon: <Code className="w-12 h-12" />,
  },
  {
    title: "API Development",
    description: "Secure RESTful and GraphQL APIs",
    icon: <Cpu className="w-12 h-12" />,
  },
  {
    title: "Database Design",
    description: "Optimized and secure database solutions",
    icon: <Database className="w-12 h-12" />,
  },
  {
    title: "Security Integration",
    description: "Built-in security from the ground up",
    icon: <Shield className="w-12 h-12" />,
  },
];
