
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LevelHeader from '@/components/LevelHeader';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';

const Avancado: React.FC = () => {
  const avancadoProjects = getProjectsByLevel('avancado');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <LevelHeader
          title="Projetos Avançados"
          description="Domine técnicas avançadas de SRE com projetos desafiadores focados em arquiteturas resilientes, engenharia do caos, escalabilidade e observabilidade completa."
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
