
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Vira Inteligência</h1>
            <p className="text-sm text-muted-foreground">Empresarial</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
          <a href="#especialistas" className="text-foreground hover:text-primary transition-colors">Especialistas</a>
          <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
        </nav>

        <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};
