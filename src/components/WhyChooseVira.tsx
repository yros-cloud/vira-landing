
import { Check, Users, CheckCircle, BookOpen } from "lucide-react";

export const WhyChooseVira = () => {
  const benefits = [
    {
      icon: Check,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos de atuação nas áreas financeira, fiscal, comercial e de vendas em grandes empresas."
    },
    {
      icon: CheckCircle,
      title: "Visão 360°",
      description: "Compreendemos tanto o lado administrativo quanto o contábil e comercial da gestão empresarial."
    },
    {
      icon: Users,
      title: "Soluções Personalizadas",
      description: "Nossas estratégias são alinhadas às necessidades específicas do seu negócio para resultados eficientes."
    },
    {
      icon: BookOpen,
      title: "Foco em Resultados",
      description: "Nosso objetivo é impulsionar seu crescimento, reduzir custos, aumentar a rentabilidade e fortalecer sua estrutura financeira."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que a Vira é a Parceira Ideal para o Seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos que gerir uma empresa exige visão estratégica e decisões assertivas. É por isso que oferecemos mais do que consultoria; oferecemos um compromisso com o seu sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
