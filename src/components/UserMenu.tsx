"use client";
import { useSession, signOut } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';
import LineMdPersonFilled from "../../public/icons/LineMdPersonFilled";
import LineMdAccount from "../../public/icons/LineMdAccount";
import Link from 'next/link';

const UserMenu = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors flex items-center"
        >
          {session ? <LineMdPersonFilled /> : <LineMdAccount />}
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 border dark:border-gray-700">
            {session ? (
              <>
                <div className="px-4 py-2 border-b dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-200">Welcome,</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{session.user?.name}</p>
                </div>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Sign in
              </Link>
            )}
          </div>
        )}
      </div>
    );
};

export default UserMenu;
