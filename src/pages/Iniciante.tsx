
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LevelHeader from '@/components/LevelHeader';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

const Iniciante: React.FC = () => {
  const inicianteProjects = getProjectsByLevel('iniciante');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <LevelHeader
          titleKey="iniciante.title"
          descriptionKey="iniciante.description"
          t={t}
        />
        
        <div className="card-grid">
          {inicianteProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Iniciante;
