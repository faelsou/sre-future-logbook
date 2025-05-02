
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32 flex flex-col items-center justify-center">
      {/* Background effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="container relative px-4 mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 font-mono text-sm border border-neon-cyan/30 rounded-full bg-neon-cyan/5 text-neon-cyan animate-pulse-border">
          Dominando a confiabilidade de sistemas
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Diário de um <span className="text-gradient animate-glow">SRE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Uma coleção de projetos práticos para aprender e evoluir na cultura de Site Reliability Engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-semibold">
            <Link to="/iniciante">Comece sua jornada</Link>
          </Button>
          <Button size="lg" variant="outline" className="neon-border">
            Manifesto SRE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
