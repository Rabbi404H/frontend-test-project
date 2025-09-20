'use client';

import LoadingSpinner from '@/components/shared/LodingSpinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') return <LoadingSpinner/>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile</h1>
      
      {session?.user && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name || 'User'}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <h2 className="text-xl font-semibold">{session.user.name}</h2>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Account Details</h3>
              <p className="text-gray-800">You're signed in using Google OAuth.</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Session Status</h3>
              <p className="text-gray-800">Authenticated</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;