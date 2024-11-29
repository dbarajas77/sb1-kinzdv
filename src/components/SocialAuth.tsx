import React from 'react';
import { motion } from 'framer-motion';

type Provider = {
  name: string;
  icon: string;
  color: string;
  hoverColor: string;
};

const providers: Provider[] = [
  {
    name: 'Google',
    icon: 'https://www.google.com/favicon.ico',
    color: 'bg-white',
    hoverColor: 'hover:bg-gray-50',
  },
  {
    name: 'Microsoft',
    icon: 'https://www.microsoft.com/favicon.ico',
    color: 'bg-white',
    hoverColor: 'hover:bg-gray-50',
  },
  {
    name: 'Facebook',
    icon: 'https://www.facebook.com/favicon.ico',
    color: 'bg-white',
    hoverColor: 'hover:bg-gray-50',
  },
];

const SocialAuth = () => {
  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login with Supabase
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {providers.map((provider) => (
          <motion.button
            key={provider.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(provider.name)}
            className={`${provider.color} ${provider.hoverColor} py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center`}
          >
            <img
              src={provider.icon}
              alt={`${provider.name} logo`}
              className="h-5 w-5"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SocialAuth;