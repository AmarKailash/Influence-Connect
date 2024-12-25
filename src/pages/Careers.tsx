import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, GraduationCap } from 'lucide-react';

function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be part of India's leading refurbished electronics marketplace. 
            We're looking for passionate individuals to help us revolutionize 
            the industry.
          </p>
        </motion.div>

        {/* Current Openings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{job.description}</p>

              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const openings = [
  {
    title: 'Senior Software Engineer',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Looking for an experienced engineer to lead our platform development team.'
  },
  {
    title: 'Product Quality Analyst',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our quality assurance team to ensure top-notch refurbished products.'
  },
  {
    title: 'Marketing Manager',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Drive our marketing strategies and brand growth across India.'
  },
  {
    title: 'Customer Support Specialist',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Provide exceptional support to our growing customer base.'
  }
];

const benefits = [
  {
    icon: <Briefcase className="w-8 h-8 text-green-600" />,
    title: 'Competitive Package',
    description: 'Attractive salary with performance bonuses and stock options'
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and hybrid work model'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    title: 'Learning & Growth',
    description: 'Regular training sessions and career development opportunities'
  }
];

const process = [
  {
    title: 'Apply Online',
    description: 'Submit your application through our careers portal'
  },
  {
    title: 'Initial Screen',
    description: 'Brief phone interview with our HR team'
  },
  {
    title: 'Technical Round',
    description: 'In-depth discussion with the hiring team'
  },
  {
    title: 'Final Interview',
    description: 'Meet with senior management and team leads'
  }
];

export default Careers;