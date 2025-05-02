
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ManifestoSRE from '@/components/ManifestoSRE';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';
import { getProjectsByLevel } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const { t } = useLanguage();
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
        
        <div id="manifesto-sre">
          <ManifestoSRE />
        </div>
        
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {t('featured.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('featured.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button asChild variant="link" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">
              <a href="/iniciante">
                {t('featured.viewAll')}
              </a>
            </Button>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4 glass-effect rounded-xl mx-4 md:mx-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              {t('journey.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('journey.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-lg hover:border-neon-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan font-semibold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('journey.step1.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('journey.step1.description')}
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg hover:border-neon-purple/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple font-semibold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('journey.step2.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('journey.step2.description')}
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg hover:border-neon-blue/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-semibold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('journey.step3.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('journey.step3.description')}
              </p>
            </div>
          </div>
        </section>
        
        <section id="contact-form" className="py-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient">{t('contato')}</h2>
            <div className="glass-effect p-6 rounded-xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  ></textarea>
                </div>
                <Button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black">
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
