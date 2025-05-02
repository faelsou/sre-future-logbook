
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManifestoSRE: React.FC = () => {
  const manifestoPrincipios = [
    {
      titulo: "Automatize tudo que for repetitivo",
      descricao: "SREs acreditam que sistemas não devem exigir intervenção manual recorrente. Toda tarefa operacional deve ser automatizada."
    },
    {
      titulo: "Falhas são inevitáveis",
      descricao: "Um SRE projeta sistemas assumindo que falhas ocorrerão. Sistemas resilientes são construídos para tolerar falhas, não para evitá-las."
    },
    {
      titulo: "Melhoria gradual é fundamental",
      descricao: "Priorize a entrega iterativa e acredite em pequenas melhorias constantes em vez de grandes refatorações ocasionais."
    },
    {
      titulo: "Observabilidade é não-negociável",
      descricao: "Não podemos melhorar o que não podemos medir. Instrumentação, métricas e logs são componentes essenciais de qualquer sistema."
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl -z-10" />
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Manifesto SRE
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nossos princípios fundamentais para construir e manter sistemas confiáveis em produção.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {manifestoPrincipios.map((principio, index) => (
          <Card key={index} className="border border-border bg-card hover:border-neon-cyan/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gradient">{principio.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{principio.descricao}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 p-6 border border-border rounded-lg glass-effect">
        <blockquote className="italic text-muted-foreground">
          "A engenharia de confiabilidade de site é o que acontece quando você pede a um desenvolvedor de software para projetar um sistema de operações."
          <footer className="mt-2 text-right font-medium">— Ben Treynor, Google</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default ManifestoSRE;
