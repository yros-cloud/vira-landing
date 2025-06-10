
export const OurServices = () => {
  const financialServices = [
    "Diagnóstico Financeiro",
    "Contas a Pagar e Receber de forma Organizada",
    "Gestão de Fluxo de Caixa e DRE Gerencial",
    "Análises Estratégicas Financeiras",
    "Conciliação Bancária Sem Erros",
    "Precificação Estratégica e Lucrativa",
    "Relatórios e Indicadores",
    "Automação e Otimização de Processos"
  ];

  const commercialServices = [
    "Diagnóstico Comercial",
    "Treinamento e capacitação de equipes de vendas",
    "Desenvolvimento de estratégias para aumento de vendas",
    "Estruturação e otimização do funil de vendas",
    "Implementação de metodologias de atendimento e fidelização de clientes",
    "Acompanhamento de performance e KPIs comerciais"
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços para Alavancar Sua Empresa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para a gestão financeira e comercial, proporcionando mais controle, segurança e rentabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">₹</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Serviços Financeiros</h3>
              <p className="text-muted-foreground">Organizamos e otimizamos toda a gestão financeira do seu negócio</p>
            </div>
            <ul className="space-y-3">
              {financialServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Serviços Comerciais</h3>
              <p className="text-muted-foreground">Impulsionamos suas vendas com estratégias eficazes e equipes de alta performance</p>
            </div>
            <ul className="space-y-3">
              {commercialServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
