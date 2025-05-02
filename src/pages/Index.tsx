
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ManifestoSRE from '@/components/ManifestoSRE';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';

const Index: React.FC = () => {
  const featuredProjects: ProjectProps[] = [
    ...getProjectsByLevel('iniciante').slice(0, 1),
    ...getProjectsByLevel('intermediario').slice(0, 1),
    ...getProjectsByLevel('avancado').slice(0, 1),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <ManifestoSRE />
        
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos práticos para diferentes níveis de experiência.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <a 
              href="/iniciante"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors underline underline-offset-4"
            >
              Ver todos os projetos
            </a>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4 glass-effect rounded-xl mx-4 md:mx-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Sua Jornada como SRE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra o caminho para se tornar um Site Reliability Engineer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-lg hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan font-semibold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Fundamentos
              </h3>
              <p className="text-muted-foreground">
                Domine as ferramentas básicas de monitoramento, containers e orquestração para construir uma base sólida.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg hover:border-neon-purple/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple font-semibold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automação e Eficiência
              </h3>
              <p className="text-muted-foreground">
                Aprimore suas habilidades com práticas de IaC, CI/CD, e estratégias avançadas de implantação.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg hover:border-neon-blue/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-semibold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Resiliência em Escala
              </h3>
              <p className="text-muted-foreground">
                Domine arquiteturas resilientes, engenharia do caos e observabilidade avançada para sistemas de classe mundial.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
