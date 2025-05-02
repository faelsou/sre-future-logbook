
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProjectById } from '@/data/projects';
import { ArrowUp } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = getProjectById(id || '');
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6">Projeto não encontrado</h2>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Simulação de conteúdo de projeto (em produção, isto viria de um CMS)
  const projectContent = {
    objetivo: "Este projeto tem como objetivo ensinar conceitos fundamentais de monitoramento usando as ferramentas Prometheus e Grafana, que são padrões da indústria.",
    requisitos: [
      "Docker e Docker Compose instalados",
      "Conhecimentos básicos de terminal",
      "Alguma familiaridade com métricas e monitoramento"
    ],
    etapas: [
      {
        titulo: "Configuração do ambiente",
        descricao: "Configurar Docker Compose para inicializar Prometheus e Grafana integrados."
      },
      {
        titulo: "Configuração do Prometheus",
        descricao: "Aprender a configurar o arquivo prometheus.yml para coletar métricas."
      },
      {
        titulo: "Criação de dashboards no Grafana",
        descricao: "Construir dashboards informativos para visualização de métricas."
      },
      {
        titulo: "Monitoramento de aplicação de exemplo",
        descricao: "Instrumentar uma aplicação simples para expor métricas customizadas."
      }
    ],
    conclusao: "Ao finalizar este projeto, você terá compreensão prática de como configurar monitoramento básico para seus serviços, interpretando métricas e construindo dashboards úteis."
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-neon-cyan/20 text-neon-cyan';
      case 'Médio':
        return 'bg-neon-purple/20 text-neon-purple';
      case 'Difícil':
        return 'bg-neon-blue/20 text-neon-blue';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Finalizado':
        return 'bg-green-500/20 text-green-500';
      case 'Em andamento':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'Em revisão':
        return 'bg-blue-500/20 text-blue-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-background via-background to-neon-cyan/5 py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="mb-6 hover:bg-background/80"
            >
              ← Voltar
            </Button>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className={getDifficultyColor(project.difficulty)}>
                {project.difficulty}
              </Badge>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
              <Badge variant="outline">
                {project.level === 'iniciante' ? 'Iniciante' : project.level === 'intermediario' ? 'Intermediário' : 'Avançado'}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Sobre este projeto</h2>
              
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Objetivo</h3>
                <p className="text-muted-foreground">{projectContent.objetivo}</p>
              </Card>
              
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Etapas</h3>
                <ol className="space-y-6">
                  {projectContent.etapas.map((etapa, index) => (
                    <li key={index} className="border-l-2 border-neon-cyan pl-4 py-1">
                      <h4 className="font-semibold mb-1">{etapa.titulo}</h4>
                      <p className="text-muted-foreground">{etapa.descricao}</p>
                    </li>
                  ))}
                </ol>
              </Card>
              
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Conclusão</h3>
                <p className="text-muted-foreground">{projectContent.conclusao}</p>
              </Card>
            </div>
            
            <div>
              <Card className="p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                <ul className="space-y-2">
                  {projectContent.requisitos.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xs mt-0.5">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black">
                    Iniciar projeto
                  </Button>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Download materiais
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-neon-cyan/20 hover:bg-neon-cyan/40 text-neon-cyan rounded-full transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
