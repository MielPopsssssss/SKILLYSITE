import { Form } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Start SOCaaS Trial - SkillyWork" },
    { name: "description", content: "Start your free SOCaaS trial today" },
  ];
};

export default function SOCaaSTrial() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Start Your SOCaaS Trial</h1>
        <Form method="post" className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors"
          >
            Start Free Trial
          </button>
        </Form>
      </motion.div>
    </div>
  );
}
