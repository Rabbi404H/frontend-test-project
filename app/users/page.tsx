'use client';

import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { User } from '@/types';
// import UserModal from '@/components/users/UserModal';
import ErrorMessage from '@/components/shared/ErrorMessage';
import LoadingSpinner from '@/components/shared/LodingSpinner';
import UserModal from '@/components/users/UserModal';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';

const UsersPage = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) return <LoadingSpinner/>;
  if (error) return <ErrorMessage message={`Failed to load users: ${error}`} />;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Users</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr
                key={user.id}
                onClick={() => openModal(user)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500">@{user.username}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserModal
      user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default UsersPage;