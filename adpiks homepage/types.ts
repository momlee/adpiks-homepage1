
// Add React import to ensure React namespace is available for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}