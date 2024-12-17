// import { MenuIcon } from 'lucide-react';
import React from 'react';
// import Image from 'next/image';
// import { Button } from '../button';
// import Logo from '~/assets/Icons/Logo';

const Navbar = () => {
  return (
    <header className="sticky left-0 right-0  top-0 backdrop-blur-sm z-[9999]">
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="pl-6">
              {/* <Logo /> */}
            </div>
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
                      <div className='flex gap-3 items-center'>
                                    <button className="border py-2 border-blue-600 rounded-md px-6 text-sass-blue">
              Sign In
            </button>
            <button className="bg-blue-600 py-2 rounded-md px-6 text-white">
              Sign Up
            </button>
  </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
