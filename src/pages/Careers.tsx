import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Heart, 
  BookOpen, 
  Laptop, 
  DollarSign,
  ArrowRight,
  Star,
  Award,
  Coffee,
  Zap,
  Lightbulb
} from 'lucide-react';
import { jobPositions, companyBenefits, companyValues } from '../data/careers';
import { JobApplicationForm } from '../components/Forms/JobApplicationForm';
import { MetaTags } from '../components/SEO/MetaTags';
import { JobPostingSchema } from '../components/SEO/StructuredData';
import { LazyImage } from '../components/Performance/LazyImage';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  DollarSign,
  Clock,
  Heart,
  BookOpen,
  Laptop,
  Users,
  Lightbulb,
  Award
};

const perks = [
  {
    title: 'Flexible Hours',
    description: 'Work when you\'re most productive',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Remote Work',
    description: 'Work from anywhere in India',
    icon: Laptop,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Learning Budget',
    description: '₹50,000 annual learning allowance',
    icon: BookOpen,
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'Team Events',
    description: 'Regular team outings and retreats',
    icon: Coffee,
    color: 'from-orange-500 to-red-500'
  }
];

const stats = [
  { label: 'Team Members', value: '50+', icon: Users },
  { label: 'Average Experience', value: '5+ Years', icon: Award },
  { label: 'Employee Satisfaction', value: '4.8/5', icon: Star },
  { label: 'Growth Rate', value: '200%', icon: Zap }
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationJobTitle, setApplicationJobTitle] = useState('');
  const [applicationJobId, setApplicationJobId] = useState('');
  const [searchParams] = useSearchParams();

  // Check if there's a job parameter in URL
  React.useEffect(() => {
    const jobId = searchParams.get('job');
    if (jobId) {
      const job = jobPositions.find(j => j.id === jobId);
      if (job) {
        setApplicationJobId(job.id);
        setApplicationJobTitle(job.title);
        setShowApplicationForm(true);
      }
    }
  }, [searchParams]);

  const departments = ['All', ...Array.from(new Set(jobPositions.map(job => job.department)))];
  const filteredJobs = selectedDepartment === 'All' 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Careers - Join Our Team of Innovators"
        description="Join WebStitch and build the future of web technology. Explore exciting career opportunities in web development, design, DevOps, and digital marketing in Greater Noida."
        keywords="web developer jobs, UI UX designer jobs, DevOps engineer jobs, Greater Noida jobs, tech careers, remote work, startup jobs"
        url="/careers"
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Be part of a passionate team that's shaping the future of web technology. 
              We're looking for talented individuals who share our vision of innovation and excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We believe in taking care of our team with competitive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {companyBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Perks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${perk.color} rounded-xl mb-4`}>
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {perk.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find your next career opportunity and join our growing team
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDepartment === department
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <JobPostingSchema
                  title={job.title}
                  description={job.description}
                  hiringOrganization={{
                    name: 'WebStitch',
                    sameAs: 'https://webstitch.in'
                  }}
                  jobLocation={{
                    addressLocality: 'Greater Noida',
                    addressRegion: 'Uttar Pradesh',
                    addressCountry: 'IN'
                  }}
                  employmentType={job.type}
                  datePosted={new Date().toISOString()}
                  validThrough={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()}
                />
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-3">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 md:mt-0">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          setApplicationJobId(job.id);
                          setApplicationJobTitle(job.title);
                          setShowApplicationForm(true);
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>

                  {/* Expanded Details */}
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Requirements:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => {
                            setApplicationJobId(job.id);
                            setApplicationJobTitle(job.title);
                            setShowApplicationForm(true);
                          }}
                          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                        >
                          Apply for this Position
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our team.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact?subject=General Application"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg"
              >
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <JobApplicationForm
              jobTitle={applicationJobTitle}
              onClose={() => {
                setShowApplicationForm(false);
                setApplicationJobTitle('');
                setApplicationJobId('');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};