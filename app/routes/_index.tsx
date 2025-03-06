import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { Shield, Bug, Code, GraduationCap } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "SkillyWork - Cybersecurity & Development" },
    { name: "description", content: "Affordable, Scalable, and AI-Powered Security Operations" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            The Future of Cybersecurity & Development
          </motion.h1>
          <p className="text-xl text-gray-300 mb-12">
            Affordable, Scalable, and AI-Powered Security Operations
          </p>
          <Link
            to="/socaas"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors"
                >
                  <div className="text-blue-500 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "SOCaaS",
    description: "24/7 AI-powered security monitoring and threat detection",
    icon: <Shield className="w-12 h-12" />,
    link: "/socaas"
  },
  {
    title: "Pentesting",
    description: "Comprehensive security assessments for your systems",
    icon: <Bug className="w-12 h-12" />,
    link: "/pentesting"
  },
  {
    title: "Development",
    description: "Secure software solutions tailored to your needs",
    icon: <Code className="w-12 h-12" />,
    link: "/development"
  },
  {
    title: "Student Program",
    description: "Real-world cybersecurity experience for students",
    icon: <GraduationCap className="w-12 h-12" />,
    link: "/student-program"
  },
];
