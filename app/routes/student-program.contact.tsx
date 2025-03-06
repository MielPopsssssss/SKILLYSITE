import { Form, useActionData } from "@remix-run/react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Student Program - SkillyWork" },
    { name: "description", content: "Contact us about our student program" },
  ];
};

export default function StudentProgramContact() {
  const actionData = useActionData();

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-purple-500 mb-4">
              <GraduationCap className="w-12 h-12 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Contact Us About the Student Program</h1>
            <p className="text-gray-300">We'll get back to you within 24 hours</p>
          </motion.div>

          <Form method="post" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder="Tell us about your interest in the program..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Submit Inquiry
            </button>

            {actionData?.message && (
              <div className="mt-4 text-center text-sm text-green-500">
                {actionData.message}
              </div>
            )}
          </Form>
        </div>
      </section>
    </div>
  );
}
