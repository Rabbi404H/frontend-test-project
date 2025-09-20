'use client';

import { motion } from 'framer-motion';
import Card from '@/components/shared/Card';

const stats = [
  { label: 'Total Posts', value: '100' },
  { label: 'Total Users', value: '10' },
  { label: 'Page Views', value: '1,234' },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Dashboard</h1>
        <p className="text-gray-600">Here's an overview of your application</p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.label} animationDelay={index * 0.1}>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Animated Chart Placeholder */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Monthly Activity</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>Jan</span>
          <span>Dec</span>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;