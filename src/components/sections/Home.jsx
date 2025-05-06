import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Reusable HighlightCard component for showcasing key information
const HighlightCard = ({ title, description, icon }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl
        hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-2xl text-blue-400">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const Home = () => {
  // Sample highlights for the homepage
  const highlights = [
    {
      title: "Full-Stack Developer",
      description: "Building responsive and scalable web applications using modern technologies.",
      icon: "💻",
    },
    {
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions.",
      icon: "🧠",
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices in development.",
      icon: "📚",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              I'm a passionate developer specializing in creating modern web applications with a focus on performance and user experience.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full font-semibold
                hover:bg-blue-600 transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <HighlightCard
                  key={index}
                  title={highlight.title}
                  description={highlight.description}
                  icon={highlight.icon}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};