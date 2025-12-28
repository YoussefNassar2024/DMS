// FIX: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

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