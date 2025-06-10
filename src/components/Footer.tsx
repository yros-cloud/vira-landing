
import { Instagram, Phone, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vira Inteligência Empresarial</h3>
                <p className="text-gray-400">Transformando negócios, gerando resultados</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especialistas em consultoria financeira e comercial dedicados a transformar desafios em oportunidades para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/virainteligenciaempresarial" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Lívia Maria</h4>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm text-gray-400">Especialista em Finanças e Gestão</p>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">livia.maria@virainteligencia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(35) 98873-0110</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Suellen Vilela</h4>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm text-gray-400">Especialista em Vendas e Gestão Comercial</p>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">suellen.vilela@virainteligencia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(35) 99107-3306</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Vira Inteligência Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
