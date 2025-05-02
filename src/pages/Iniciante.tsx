
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LevelHeader from '@/components/LevelHeader';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';

const Iniciante: React.FC = () => {
  const inicianteProjects = getProjectsByLevel('iniciante');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <LevelHeader
          title="Projetos para Iniciantes"
          description="Comece sua jornada como SRE com projetos fundamentais que vão construir sua base de conhecimento em monitoramento, containers e operações básicas."
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
