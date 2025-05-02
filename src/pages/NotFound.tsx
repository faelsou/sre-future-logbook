
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md text-center">
        <div className="text-[8rem] font-bold text-gradient animate-glow">404</div>
        <h1 className="text-2xl font-bold mb-6">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Button asChild>
          <a href="/">Voltar à página inicial</a>
        </Button>
        
        <div className="mt-12 p-6 border border-border rounded-lg glass-effect">
          <p className="text-muted-foreground font-mono text-sm">
            $ grep -r "route:"{location.pathname} /var/log/nginx/access.log<br/>
            <span className="text-destructive">Error: No such route found</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
