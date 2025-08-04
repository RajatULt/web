import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Award, 
  Code, 
  Palette, 
  BarChart3,
  Users,
  Star
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  achievements: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  stats: {
    experience: string;
    projects: string;
    rating: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'CEO & Lead Developer',
    bio: 'Visionary leader with 8+ years in full-stack development and AI solutions. Passionate about transforming businesses through innovative technology.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React', 'Node.js', 'AI/ML', 'Cloud Architecture', 'Team Leadership'],
    achievements: [
      'Led 150+ successful projects',
      'Built AI systems serving 1M+ users',
      'Certified AWS Solutions Architect',
      'Speaker at 5+ tech conferences'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/rajesh-kumar',
      twitter: 'https://twitter.com/rajeshkumar',
      github: 'https://github.com/rajeshkumar',
      email: 'rajesh@webstitch.in'
    },
    stats: {
      experience: '8+ Years',
      projects: '150+',
      rating: '4.9/5'
    }
  },
  {
    id: 'priya-singh',
    name: 'Priya Singh',
    role: 'Senior UI/UX Designer',
    bio: 'Creative design expert specializing in user-centered design and conversion optimization. Transforms complex ideas into intuitive experiences.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems'],
    achievements: [
      'Designed 100+ award-winning interfaces',
      'Improved conversion rates by 200%+',
      'Adobe Certified Expert',
      'Featured in Design Weekly'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/priya-singh',
      twitter: 'https://twitter.com/priyasingh',
      email: 'priya@webstitch.in'
    },
    stats: {
      experience: '6+ Years',
      projects: '100+',
      rating: '4.8/5'
    }
  },
  {
    id: 'amit-sharma',
    name: 'Amit Sharma',
    role: 'DevOps & Cloud Architect',
    bio: 'Infrastructure specialist focused on scalable, secure, and high-performance cloud solutions. Expert in automation and CI/CD.',
    image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Security'],
    achievements: [
      'Managed infrastructure for 50+ apps',
      'Reduced deployment time by 90%',
      'AWS & GCP Certified',
      'Zero-downtime deployment expert'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/amit-sharma',
      github: 'https://github.com/amitsharma',
      email: 'amit@webstitch.in'
    },
    stats: {
      experience: '7+ Years',
      projects: '80+',
      rating: '4.9/5'
    }
  },
  {
    id: 'sneha-patel',
    name: 'Sneha Patel',
    role: 'Full Stack Developer',
    bio: 'Versatile developer with expertise in modern web technologies and mobile development. Passionate about clean code and performance.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React', 'TypeScript', 'Python', 'Mobile Dev', 'Database Design'],
    achievements: [
      'Built 60+ web applications',
      'Expert in React & TypeScript',
      'Open source contributor',
      'Mentored 20+ junior developers'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/sneha-patel',
      github: 'https://github.com/snehapatel',
      email: 'sneha@webstitch.in'
    },
    stats: {
      experience: '5+ Years',
      projects: '60+',
      rating: '4.8/5'
    }
  }
];

export const TeamBios: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
            onClick={() => setSelectedMember(member)}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social.email && (
                        <motion.a
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {member.stats.experience}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {member.stats.projects}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {member.stats.rating}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Rating
                    </div>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    {selectedMember.social.linkedin && (
                      <a
                        href={selectedMember.social.linkedin}
                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a
                        href={selectedMember.social.github}
                        className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.social.email && (
                      <a
                        href={`mailto:${selectedMember.social.email}`}
                        className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {selectedMember.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Skills & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <Award className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {selectedMember.stats.experience}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                      {selectedMember.stats.projects}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {selectedMember.stats.rating}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Client Rating
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};