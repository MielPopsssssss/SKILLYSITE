import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Briefcase } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Program - SkillyWork" },
    { name: "description", content: "Real-world cybersecurity experience for students" },
  ];
};

export default function StudentProgram() {
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
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Student Program
          </motion.h1>
          <p className="text-xl text-gray-300 mb-12">
            Gain real-world cybersecurity experience
          </p>
          <Link
            to="contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
              >
                <div className="text-purple-500 mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "Hands-On Training",
    description: "Practical experience with real-world scenarios",
    icon: <GraduationCap className="w-12 h-12" />,
  },
  {
    title: "Mentorship",
    description: "Guidance from experienced professionals",
    icon: <Users className="w-12 h-12" />,
  },
  {
    title: "Career Development",
    description: "Resume building and interview preparation",
    icon: <Briefcase className="w-12 h-12" />,
  },
  {
    title: "Certifications",
    description: "Preparation for industry-recognized certifications",
    icon: <BookOpen className="w-12 h-12" />,
  },
];
