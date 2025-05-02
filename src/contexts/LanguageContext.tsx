
import React, { createContext, useState, useContext, ReactNode } from 'react';

type LanguageType = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'iniciante': 'Iniciante',
    'intermediario': 'Intermediário',
    'avancado': 'Avançado',
    'contato': 'Contato',
    
    // Hero
    'hero.subtitle': 'Dominando a confiabilidade de sistemas',
    'hero.title': 'Diário de um SRE',
    'hero.description': 'Uma coleção de projetos práticos para aprender e evoluir na cultura de Site Reliability Engineering.',
    'hero.cta.start': 'Comece sua jornada',
    'hero.cta.manifesto': 'Manifesto SRE',
    
    // Home
    'featured.title': 'Projetos em Destaque',
    'featured.description': 'Conheça alguns dos nossos projetos práticos para diferentes níveis de experiência.',
    'featured.viewAll': 'Ver todos os projetos',
    'journey.title': 'Sua Jornada como SRE',
    'journey.description': 'Descubra o caminho para se tornar um Site Reliability Engineer',
    'journey.step1.title': 'Fundamentos',
    'journey.step1.description': 'Domine as ferramentas básicas de monitoramento, containers e orquestração para construir uma base sólida.',
    'journey.step2.title': 'Automação e Eficiência',
    'journey.step2.description': 'Aprimore suas habilidades com práticas de IaC, CI/CD, e estratégias avançadas de implantação.',
    'journey.step3.title': 'Resiliência em Escala',
    'journey.step3.description': 'Domine arquiteturas resilientes, engenharia do caos e observabilidade avançada para sistemas de classe mundial.',
    
    // Pages
    'iniciante.title': 'Projetos para Iniciantes',
    'iniciante.description': 'Comece sua jornada como SRE com projetos fundamentais que vão construir sua base de conhecimento em monitoramento, containers e operações básicas.',
    'intermediario.title': 'Projetos Intermediários',
    'intermediario.description': 'Avance suas habilidades de SRE com projetos que focam em automação, infraestrutura como código, integração contínua e estratégias de deployment modernas.',
    'avancado.title': 'Projetos Avançados',
    'avancado.description': 'Domine técnicas avançadas de SRE com projetos desafiadores focados em arquiteturas resilientes, engenharia do caos, escalabilidade e observabilidade completa.',
  },
  en: {
    // Header
    'iniciante': 'Beginner',
    'intermediario': 'Intermediate',
    'avancado': 'Advanced',
    'contato': 'Contact',
    
    // Hero
    'hero.subtitle': 'Mastering system reliability',
    'hero.title': 'An SRE Journal',
    'hero.description': 'A collection of practical projects to learn and evolve in the culture of Site Reliability Engineering.',
    'hero.cta.start': 'Start your journey',
    'hero.cta.manifesto': 'SRE Manifesto',
    
    // Home
    'featured.title': 'Featured Projects',
    'featured.description': 'Explore some of our practical projects for different experience levels.',
    'featured.viewAll': 'View all projects',
    'journey.title': 'Your Journey as an SRE',
    'journey.description': 'Discover the path to becoming a Site Reliability Engineer',
    'journey.step1.title': 'Foundations',
    'journey.step1.description': 'Master the basic tools of monitoring, containers, and orchestration to build a solid foundation.',
    'journey.step2.title': 'Automation & Efficiency',
    'journey.step2.description': 'Enhance your skills with IaC practices, CI/CD, and advanced deployment strategies.',
    'journey.step3.title': 'Resilience at Scale',
    'journey.step3.description': 'Master resilient architectures, chaos engineering, and advanced observability for world-class systems.',
    
    // Pages
    'iniciante.title': 'Beginner Projects',
    'iniciante.description': 'Start your SRE journey with fundamental projects that will build your knowledge base in monitoring, containers, and basic operations.',
    'intermediario.title': 'Intermediate Projects',
    'intermediario.description': 'Advance your SRE skills with projects focusing on automation, infrastructure as code, continuous integration, and modern deployment strategies.',
    'avancado.title': 'Advanced Projects',
    'avancado.description': 'Master advanced SRE techniques with challenging projects focused on resilient architectures, chaos engineering, scalability, and complete observability.',
  },
  es: {
    // Header
    'iniciante': 'Principiante',
    'intermediario': 'Intermedio',
    'avancado': 'Avanzado',
    'contato': 'Contacto',
    
    // Hero
    'hero.subtitle': 'Dominando la confiabilidad de sistemas',
    'hero.title': 'Diario de un SRE',
    'hero.description': 'Una colección de proyectos prácticos para aprender y evolucionar en la cultura de Ingeniería de Confiabilidad de Sitios.',
    'hero.cta.start': 'Comienza tu viaje',
    'hero.cta.manifesto': 'Manifiesto SRE',
    
    // Home
    'featured.title': 'Proyectos Destacados',
    'featured.description': 'Conoce algunos de nuestros proyectos prácticos para diferentes niveles de experiencia.',
    'featured.viewAll': 'Ver todos los proyectos',
    'journey.title': 'Tu Viaje como SRE',
    'journey.description': 'Descubre el camino para convertirte en un Ingeniero de Confiabilidad de Sitios',
    'journey.step1.title': 'Fundamentos',
    'journey.step1.description': 'Domina las herramientas básicas de monitoreo, contenedores y orquestación para construir una base sólida.',
    'journey.step2.title': 'Automatización y Eficiencia',
    'journey.step2.description': 'Mejora tus habilidades con prácticas de IaC, CI/CD y estrategias avanzadas de implementación.',
    'journey.step3.title': 'Resiliencia a Escala',
    'journey.step3.description': 'Domina arquitecturas resilientes, ingeniería del caos y observabilidad avanzada para sistemas de clase mundial.',
    
    // Pages
    'iniciante.title': 'Proyectos para Principiantes',
    'iniciante.description': 'Comienza tu viaje como SRE con proyectos fundamentales que construirán tu base de conocimiento en monitoreo, contenedores y operaciones básicas.',
    'intermediario.title': 'Proyectos Intermedios',
    'intermediario.description': 'Avanza tus habilidades de SRE con proyectos enfocados en automatización, infraestructura como código, integración continua y estrategias modernas de despliegue.',
    'avancado.title': 'Proyectos Avanzados',
    'avancado.description': 'Domina técnicas avanzadas de SRE con proyectos desafiantes enfocados en arquitecturas resilientes, ingeniería del caos, escalabilidad y observabilidad completa.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('pt');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
