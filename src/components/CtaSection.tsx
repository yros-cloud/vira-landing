
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Não Deixe o Potencial da Sua Empresa Adormecido!
          </h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Entre em contato conosco hoje mesmo e descubra como podemos elevar a gestão financeira e comercial do seu negócio, proporcionando mais controle, segurança e rentabilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            >
              Agende uma Consultoria Gratuita!
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              Fale com um Especialista
            </Button>
          </div>

          <div className="mt-8 text-lg opacity-75">
            <p>✅ Consultoria inicial gratuita</p>
            <p>✅ Análise personalizada do seu negócio</p>
            <p>✅ Proposta sem compromisso</p>
          </div>
        </div>
      </div>
    </section>
  );
};
