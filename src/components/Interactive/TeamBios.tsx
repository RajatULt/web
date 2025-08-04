import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, Award, Code, Palette, Zap, Brain } from 'lucide-react';
import { LazyImage } from '../Performance/LazyImage';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  longBio: string;
  image: string;
  skills: string[];
  achievements: string[];
  experience: string;
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
  specialties: string[];
  projects: number;
  rating: number;
}

const teamMembers: TeamMember[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'CEO & Lead AI Architect',
    department: 'Leadership',
    bio: 'Visionary leader with 10+ years in AI and machine learning innovation',
    longBio: 'Rajesh is a seasoned technology leader with over a decade of experience in artificial intelligence and machine learning. He has led multiple successful AI implementations across various industries, from fintech to healthcare. His expertise spans deep learning, natural language processing, and computer vision. Under his leadership, WebStitch has become a recognized leader in AI solutions.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['AI Strategy', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Leadership'],
    achievements: [
      'Led 50+ successful AI implementations',
      'Published 15 research papers on ML',
      'Speaker at 20+ international conferences',
      'Founded 2 successful AI startups'
    ],
    experience: '10+ years',
    location: 'Greater Noida, India',
    email: 'rajesh@webstitch.in',
    linkedin: 'https://linkedin.com/in/rajesh-kumar',
    github: 'https://github.com/rajesh-kumar',
    specialties: ['AI Strategy', 'Neural Networks', 'Computer Vision'],
    projects: 75,
    rating: 5
  },
  {
    id: 'priya-singh',
    name: 'Priya Singh',
    role: 'CTO & Full Stack Architect',
    department: 'Engineering',
    bio: 'Tech architect passionate about scalable solutions and modern frameworks',
    longBio: 'Priya is a highly skilled full-stack architect with expertise in building scalable, high-performance applications. She has extensive experience with modern web technologies, cloud platforms, and DevOps practices. Her technical leadership has been instrumental in delivering complex projects on time and within budget.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'System Design'],
    achievements: [
      'Architected 100+ web applications',
      'AWS Certified Solutions Architect',
      'Led teams of 20+ developers',
      'Reduced deployment time by 80%'
    ],
    experience: '8+ years',
    location: 'Greater Noida, India',
    email: 'priya@webstitch.in',
    linkedin: 'https://linkedin.com/in/priya-singh',
    github: 'https://github.com/priya-singh',
    specialties: ['System Architecture', 'Cloud Solutions', 'DevOps'],
    projects: 120,
    rating: 5
  },
  {
    id: 'amit-sharma',
    name: 'Amit Sharma',
    role: 'Senior Mobile Developer',
    department: 'Engineering',
    bio: 'Mobile expert specializing in React Native and native iOS/Android development',
    longBio: 'Amit is a mobile development specialist with deep expertise in both cross-platform and native mobile development. He has built numerous successful mobile applications that have been downloaded millions of times. His focus on performance optimization and user experience has made him a valuable asset to the team.',
    image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'Mobile UI/UX'],
    achievements: [
      'Built 50+ mobile applications',
      'Apps with 5M+ downloads',
      'Google Play Console Expert',
      'iOS App Store featured apps'
    ],
    experience: '6+ years',
    location: 'Greater Noida, India',
    email: 'amit@webstitch.in',
    linkedin: 'https://linkedin.com/in/amit-sharma',
    github: 'https://github.com/amit-sharma',
    specialties: ['Cross-platform Development', 'Performance Optimization', 'App Store Optimization'],
    projects: 85,
    rating: 5
  },
  {
    id: 'sneha-patel',
    name: 'Sneha Patel',
    role: 'Lead UI/UX Designer',
    department: 'Design',
    bio: 'Creative designer focused on user-centered design and innovative interfaces',
    longBio: 'Sneha is a creative design leader with a passion for creating intuitive and beautiful user experiences. Her design philosophy centers around user research, accessibility, and innovative interface design. She has won multiple design awards and her work has been featured in leading design publications.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    achievements: [
      'Designed 200+ user interfaces',
      'Won 5 international design awards',
      'Led design for 10M+ user products',
      'Created 15+ design systems'
    ],
    experience: '7+ years',
    location: 'Greater Noida, India',
    email: 'sneha@webstitch.in',
    linkedin: 'https://linkedin.com/in/sneha-patel',
    specialties: ['Design Systems', 'User Research', 'Accessibility Design'],
    projects: 95,
    rating: 5
  }
];

const skillIcons: { [key: string]: React.ComponentType<any> } = {
  'AI Strategy': Brain,
  'React': Code,
  'Design Systems': Palette,
  'Mobile UI/UX': Palette,
  'System Architecture': Zap,
  'Cross-platform Development': Code
};

export const TeamBios: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...Array.from(new Set(teamMembers.map(member => member.department)))];
  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="space-y-8">
      {/* Department Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {departments.map(department => (
          <motion.button
            key={department}
            onClick={() => setSelectedDepartment(department)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedDepartment === department
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {department}
          </motion.button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="relative mb-6">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  
                  {/* Rating Stars */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {[...Array(member.rating)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Key Skills */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 3).map(skill => {
                      const IconComponent = skillIcons[skill] || Code;
                      return (
                        <div
                          key={skill}
                          className="flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs"
                        >
                          <IconComponent className="w-3 h-3 mr-1" />
                          {skill}
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {member.projects}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {member.experience}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Member Detail Modal */}
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
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <LazyImage
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedMember.name}
                      </h2>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {selectedMember.role}
                      </p>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedMember.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {selectedMember.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        About
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedMember.longBio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        Specialties
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedMember.specialties.map(specialty => (
                          <span
                            key={specialty}
                            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Contact */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Contact
                      </h4>
                      <div className="space-y-3">
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {selectedMember.email}
                        </a>
                        {selectedMember.linkedin && (
                          <a
                            href={selectedMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        )}
                        {selectedMember.github && (
                          <a
                            href={selectedMember.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Technical Skills
                      </h4>
                      <div className="space-y-2">
                        {selectedMember.skills.map(skill => (
                          <div
                            key={skill}
                            className="flex items-center justify-between p-2 bg-white dark:bg-gray-600 rounded"
                          >
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {skill}
                            </span>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < 4 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-500'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Performance Stats
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {selectedMember.projects}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Client Rating</span>
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-yellow-500 mr-2">
                              {selectedMember.rating}.0
                            </span>
                            <div className="flex space-x-1">
                              {[...Array(selectedMember.rating)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Experience</span>
                          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {selectedMember.experience}
                          </span>
                        </div>
                      </div>
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