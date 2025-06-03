import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const userReviews = [
  {
    name: "Miguel S.",
    rating: 5,
    title: "Excelente experiência de utilizador",
    comment:
      "A interface é muito intuitiva e fácil de usar. Consegui fazer o meu primeiro depósito e aposta em menos de 5 minutos. Recomendo vivamente para quem procura uma plataforma simples e eficiente.",
    category: "UX",
  },
  {
    name: "Ana R.",
    rating: 4,
    title: "Suporte ao cliente muito prestável",
    comment:
      "Tive um problema com o meu levantamento e o suporte respondeu em menos de 10 minutos. Resolveram o meu problema rapidamente e foram muito profissionais. Só não dou 5 estrelas porque o chat não está disponível 24 horas.",
    category: "Suporte",
  },
  {
    name: "João M.",
    rating: 5,
    title: "Pagamentos rápidos e seguros",
    comment:
      "Já fiz vários levantamentos e todos foram processados em menos de 24 horas. O processo é simples e seguro, sem complicações desnecessárias. Uma das melhores plataformas em termos de velocidade de pagamentos.",
    category: "Pagamentos",
  },
  {
    name: "Sofia L.",
    rating: 4,
    title: "Boas odds e promoções frequentes",
    comment:
      "As odds são competitivas comparadas com outros sites. Além disso, oferecem promoções semanais interessantes, especialmente para jogos da Liga Portugal. Recomendo a quem procura valor nas suas apostas.",
    category: "Odds",
  },
  {
    name: "Pedro C.",
    rating: 3,
    title: "App móvel precisa de melhorias",
    comment:
      "O site funciona bem no computador, mas a app móvel às vezes fica lenta e fecha inesperadamente. Espero que melhorem isto nas próximas atualizações porque gosto muito do serviço em geral.",
    category: "App Móvel",
  },
  {
    name: "Mariana T.",
    rating: 5,
    title: "Excelentes ferramentas de apostas ao vivo",
    comment:
      "As estatísticas em tempo real e a transmissão ao vivo são fantásticas. Consigo tomar decisões informadas durante os jogos. A interface não atrasa e as odds são atualizadas rapidamente.",
    category: "Apostas ao Vivo",
  },
]

export function UserReviewsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Opiniões dos Utilizadores</h2>
          <p className="text-lg text-white drop-shadow-md max-w-2xl mx-auto">
            Experiências reais de apostadores portugueses sobre as plataformas de apostas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReviews.map((review, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{review.name}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {review.category}
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 mt-2">{review.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Satisfação dos Utilizadores</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">4.5/5</span>
              </div>
              <p className="text-gray-600">
                Baseado em mais de 1,200 avaliações de utilizadores reais das plataformas de apostas em Portugal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
