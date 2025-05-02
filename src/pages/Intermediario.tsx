
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LevelHeader from '@/components/LevelHeader';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';

const Intermediario: React.FC = () => {
  const intermediarioProjects = getProjectsByLevel('intermediario');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <LevelHeader
          title="Projetos Intermediários"
          description="Avance suas habilidades de SRE com projetos que focam em automação, infraestrutura como código, integração contínua e estratégias de deployment modernas."
        />
        
        <div className="card-grid">
          {intermediarioProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Intermediario;
