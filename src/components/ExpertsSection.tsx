
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExpertsSection = () => {
  const experts = [
    {
      name: "Lívia Maria",
      role: "Especialista em Finanças e Gestão",
      description: "Formada em Ciências Contábeis com mais de 10 anos de experiência nas áreas financeira e fiscal. Ajuda empresas a organizarem suas finanças de forma eficiente, buscando crescimento sustentável, redução de custos e melhoria de resultados. Experiência na escolha e implantação de sistemas de gestão para automação e controle financeiro.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "livia.maria@virainteligencia.com",
      phone: "(35) 98873-0110"
    },
    {
      name: "Suellen Vilela",
      role: "Especialista em Vendas e Gestão Comercial",
      description: "Mais de 10 anos de experiência em grandes empresas e negócios de alto ticket médio. MBA em Gestão de Negócios e especializações em RH, Gestão em Marketing e Vendas. Impulsiona o crescimento com equipes de alta performance e estratégias que transformam resultados. Acredita que vendas são sobre criar conexões, entender necessidades e entregar valor.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "suellen.vilela@virainteligencia.com",
      phone: "(35) 99107-3306"
    }
  ];

  return (
    <section id="especialistas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quem Está Por Trás do Seu Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as especialistas que vão transformar a realidade financeira e comercial da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {experts.map((expert, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{expert.name}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{expert.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{expert.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>📧 {expert.email}</p>
                    <p>📱 {expert.phone}</p>
                  </div>

                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
