
import React from 'react';

interface LevelHeaderProps {
  titleKey: string;
  descriptionKey: string;
  t: (key: string) => string;
}

const LevelHeader: React.FC<LevelHeaderProps> = ({ titleKey, descriptionKey, t }) => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {t(titleKey)}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {t(descriptionKey)}
      </p>
    </div>
  );
};

export default LevelHeader;
