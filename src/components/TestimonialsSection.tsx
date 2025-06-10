
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A Vira transformou a forma como enxergamos nossas finanças. Graças a eles, conseguimos otimizar nossos custos e aumentar nossa margem de lucro de forma significativa!",
      author: "Maria Silva",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Nossas vendas nunca foram tão eficientes! A equipe da Vira nos ajudou a reestruturar nosso funil e a capacitar nosso time, resultando em um crescimento exponencial.",
      author: "João Santos",
      company: "Comercial Alfa",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos reais de empresas que transformaram seus resultados conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
