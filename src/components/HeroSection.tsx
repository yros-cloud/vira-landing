
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Vira Inteligência Empresarial:</span>
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                  Sua Gestão Financeira e Comercial Rumo ao Sucesso Sustentável
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soluções estratégicas e personalizadas para otimizar sua gestão, aumentar a rentabilidade e impulsionar seus resultados.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                Descomplique a Gestão da Sua Empresa e Conquiste a Rentabilidade que Você Merece
              </h2>
              <p className="text-lg text-muted-foreground">
                Na Vira Inteligência Empresarial, somos especialistas em consultoria financeira e comercial, dedicados a transformar desafios em oportunidades para o seu negócio. Com nossa expertise, tecnologia e metodologias inovadoras, garantimos um crescimento sustentável e seguro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
              >
                Fale com um Especialista Agora!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
              >
                Saiba Mais
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Profissional confiante trabalhando com dados" 
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">+10</p>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
