
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LevelHeader from '@/components/LevelHeader';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

const Avancado: React.FC = () => {
  const avancadoProjects = getProjectsByLevel('avancado');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <LevelHeader
          titleKey="avancado.title"
          descriptionKey="avancado.description"
          t={t}
        />
        
        <div className="card-grid">
          {avancadoProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Avancado;
