import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "TailwindCSS", "Svelte"],
    color: "blue",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "C#", "Java", "ASP.Net Core", "SpringBoot", "PostgreSQL", "MongoDB"],
    color: "purple",
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD"],
    color: "green",
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Adaptability", "Time Management", "Leadership", "Team Work"],
    color: "orange",
  },
];

const colorVariants = {
  blue: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
  green: "bg-green-500/10 text-green-400 hover:bg-green-500/20",
  orange: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20",
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ title, skills, color }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${colorVariants[color]} 
              py-1 px-3 rounded-full text-sm shadow-sm
              hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)]
              transition-all duration-300 cursor-default`}
            role="listitem"
            aria-label={`${title} skill: ${skill}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center max-w-2xl mx-auto">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions. 
              I thrive on transforming complex problems into elegant, user-friendly solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <SkillCard
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                  color={category.color}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};