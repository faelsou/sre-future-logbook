
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  id: string;
  title: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  status: 'Em andamento' | 'Finalizado' | 'Em revisão';
  description: string;
  level: 'iniciante' | 'intermediario' | 'avancado';
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Finalizado':
      return 'bg-green-500/20 text-green-500 hover:bg-green-500/30';
    case 'Em andamento':
      return 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30';
    case 'Em revisão':
      return 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/30';
    case 'Médio':
      return 'bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30';
    case 'Difícil':
      return 'bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30';
    default:
      return 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30';
  }
};

const ProjectCard: React.FC<ProjectProps> = ({
  id,
  title,
  difficulty,
  status,
  description,
  level
}) => {
  return (
    <Card className="border border-border bg-card hover:border-neon-cyan/50 transition-colors duration-300 overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="outline" className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
          <Badge variant="outline" className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>
        <CardTitle className="leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full neon-border"
          asChild
        >
          <a href={`/projeto/${level}/${id}`}>Ver projeto</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
