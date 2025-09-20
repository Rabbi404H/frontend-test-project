'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User } from '@/types';

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserModal = ({ user, isOpen, onClose }: UserModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && user && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Username</h3>
                  <p className="text-gray-800">@{user.username}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-gray-800">{user.email}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <p className="text-gray-800">{user.phone}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Website</h3>
                  <p className="text-blue-600 underline">{user.website}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Company</h3>
                  <p className="text-gray-800">{user.company.name}</p>
                  <p className="text-gray-600 text-sm">{user.company.catchPhrase}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Address</h3>
                  <p className="text-gray-800">
                    {user.address.street}, {user.address.city}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {user.address.zipcode}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UserModal;