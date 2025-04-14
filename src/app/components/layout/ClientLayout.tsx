'use client';

import { useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove any mdl-js class if it exists
    document.documentElement.classList.remove('mdl-js');
  }, []);

  return <>{children}</>;
} 