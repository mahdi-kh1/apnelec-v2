"use client";

import { useEffect } from 'react';
import GoogleSignInButton from './GoogleSignInButton';

export default function GoogleSignInContainer({ type = "signin" }) {
  return (
    <GoogleSignInButton>
      <span className="text-gray-700 dark:text-gray-200">
        Sign {type === "signin" ? "in" : "up"} with Google
      </span>
    </GoogleSignInButton>
  );
} 