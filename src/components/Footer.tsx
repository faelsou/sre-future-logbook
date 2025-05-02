
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="font-mono text-lg font-semibold text-gradient mb-4">
              [Diário de um SRE]
            </h3>
            <p className="text-muted-foreground">
              Desenvolvendo e fomentando a cultura de Site Reliability Engineering através de projetos práticos.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/iniciante" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Projetos para Iniciantes
                </a>
              </li>
              <li>
                <a href="/intermediario" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Projetos Intermediários
                </a>
              </li>
              <li>
                <a href="/avancado" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Projetos Avançados
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:contato@diariodeumSRE.com" 
                className="p-2 bg-muted rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Receba novos projetos e dicas diretamente no seu email.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-background border border-border rounded-l-md px-3 py-2 flex-1 focus:outline-none focus:border-neon-cyan"
                />
                <button className="bg-neon-cyan text-black font-medium px-4 py-2 rounded-r-md hover:bg-neon-cyan/80 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Diário de um SRE. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
