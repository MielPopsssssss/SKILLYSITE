import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { Shield, Activity, AlertCircle, FileText } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "SOCaaS - SkillyWork" },
    { name: "description", content: "24/7 AI-powered security monitoring and threat detection" },
  ];
};

export default function SOCaaS() {
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
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Security Operations Center as a Service
          </motion.h1>
          <p className="text-xl text-gray-300 mb-12">
            24/7 AI-powered security monitoring and threat detection
          </p>
          <Link
            to="contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "AI-Powered Detection",
    description: "Advanced machine learning models for threat detection",
    icon: <Shield className="w-12 h-12" />,
  },
  {
    title: "Real-Time Monitoring",
    description: "24/7 monitoring of your infrastructure",
    icon: <Activity className="w-12 h-12" />,
  },
  {
    title: "Incident Response",
    description: "Immediate action on security incidents",
    icon: <AlertCircle className="w-12 h-12" />,
  },
  {
    title: "Detailed Reports",
    description: "Monthly security reports and insights",
    icon: <FileText className="w-12 h-12" />,
  },
];
