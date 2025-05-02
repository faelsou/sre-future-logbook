
import React from 'react';

interface LevelHeaderProps {
  title: string;
  description: string;
}

const LevelHeader: React.FC<LevelHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default LevelHeader;
