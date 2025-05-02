
import { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  // Projetos Iniciantes
  {
    id: "prometheus-basic",
    title: "Monitoramento Básico com Prometheus e Grafana",
    difficulty: "Fácil",
    status: "Finalizado",
    description: "Aprenda a configurar um sistema básico de monitoramento usando Prometheus para coletar métricas e Grafana para visualizá-las.",
    level: "iniciante"
  },
  {
    id: "alertmanager-config",
    title: "Configuração de Alertas com Prometheus AlertManager",
    difficulty: "Fácil",
    status: "Finalizado",
    description: "Configure alertas para notificar sobre problemas em seu sistema antes que seus usuários percebam.",
    level: "iniciante"
  },
  {
    id: "docker-basics",
    title: "Primeiros Passos com Containers Docker",
    difficulty: "Fácil",
    status: "Em andamento",
    description: "Aprenda os conceitos básicos de containers e como utilizar Docker para empacotar aplicações.",
    level: "iniciante"
  },
  {
    id: "kubernetes-intro",
    title: "Introdução ao Kubernetes",
    difficulty: "Médio",
    status: "Em revisão",
    description: "Entenda os fundamentos do Kubernetes e aprenda a criar um cluster local para experimentação.",
    level: "iniciante"
  },
  {
    id: "basic-logging",
    title: "Centralização Básica de Logs",
    difficulty: "Fácil",
    status: "Em andamento",
    description: "Implemente um sistema simples de centralização de logs com Elasticsearch e Kibana.",
    level: "iniciante"
  },
  
  // Projetos Intermediários
  {
    id: "github-actions-cicd",
    title: "CI/CD com GitHub Actions",
    difficulty: "Médio",
    status: "Finalizado",
    description: "Implemente um pipeline completo de CI/CD utilizando GitHub Actions para testes, build e deploy automatizado.",
    level: "intermediario"
  },
  {
    id: "terraform-infra",
    title: "Infraestrutura como Código com Terraform",
    difficulty: "Médio",
    status: "Finalizado",
    description: "Automatize a criação e gerenciamento de infraestrutura em nuvem usando Terraform.",
    level: "intermediario"
  },
  {
    id: "helm-charts",
    title: "Gerenciando Aplicações Kubernetes com Helm",
    difficulty: "Médio",
    status: "Em andamento",
    description: "Aprenda a empacotar, distribuir e implantar aplicações Kubernetes usando Helm Charts.",
    level: "intermediario"
  },
  {
    id: "loki-grafana",
    title: "Integração de Logs com Loki e Grafana",
    difficulty: "Médio",
    status: "Em revisão",
    description: "Implemente uma solução moderna de logging usando Loki integrado com Grafana para visualização.",
    level: "intermediario"
  },
  {
    id: "argocd-gitops",
    title: "GitOps com ArgoCD",
    difficulty: "Difícil",
    status: "Em andamento",
    description: "Implemente práticas de GitOps utilizando ArgoCD para sincronização contínua entre repositório Git e cluster Kubernetes.",
    level: "intermediario"
  },
  
  // Projetos Avançados
  {
    id: "cloud-resilient-arch",
    title: "Arquitetura Resiliente Multi-Região em Nuvem",
    difficulty: "Difícil",
    status: "Em andamento",
    description: "Projete e implemente uma arquitetura tolerante a falhas em múltiplas regiões na AWS ou GCP.",
    level: "avancado"
  },
  {
    id: "chaos-engineering",
    title: "Práticas de Chaos Engineering",
    difficulty: "Difícil",
    status: "Em revisão",
    description: "Implemente experimentos de Chaos Engineering para descobrir fragilidades em seus sistemas antes que elas causem interrupções.",
    level: "avancado"
  },
  {
    id: "auto-scaling",
    title: "Estratégias Avançadas de Auto-Scaling",
    difficulty: "Difícil",
    status: "Finalizado",
    description: "Implemente estratégias sofisticadas de auto-scaling baseadas em métricas personalizadas e comportamento de tráfego.",
    level: "avancado"
  },
  {
    id: "full-observability",
    title: "Observabilidade Full-Stack",
    difficulty: "Difícil",
    status: "Em andamento",
    description: "Construa uma solução completa de observabilidade combinando métricas, traces distribuídos e logs com análise avançada.",
    level: "avancado"
  },
  {
    id: "infra-security",
    title: "Segurança de Infraestrutura em Larga Escala",
    difficulty: "Difícil",
    status: "Em andamento",
    description: "Implemente práticas avançadas de segurança para infraestrutura como varredura de vulnerabilidades, criptografia e política de acesso.",
    level: "avancado"
  }
];

export const getProjectsByLevel = (level: string): ProjectProps[] => {
  return projects.filter(project => project.level === level);
};

export const getProjectById = (id: string): ProjectProps | undefined => {
  return projects.find(project => project.id === id);
};
