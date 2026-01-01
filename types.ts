import React from 'react';

// 1. Allow TypeScript to see the global variable from WordPress
declare global {
  interface Window {
    DMS_DATA: any;
  }
}

export type Page = 'home' | 'about' | 'services' | 'contact';

export interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}