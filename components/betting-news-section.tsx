import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, TrendingUp, Users, Award } from "lucide-react"

const bettingNews = [
  {
    icon: TrendingUp,
    title: "Novo Recorde de Apostas Online",
    description: "Portugal regista crescimento de 25% nas apostas desportivas online durante o último trimestre",
    date: "15 Janeiro 2024",
    category: "Mercado",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "SRIJ Reforça Controlos",
    description: "Autoridade reguladora implementa novas medidas de proteção ao jogador e verificação de identidade",
    date: "12 Janeiro 2024",
    category: "Regulamentação",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Melhores Odds do Mercado",
    description: "Comparação revela que sites licenciados oferecem odds mais competitivas para a Liga Portugal",
    date: "10 Janeiro 2024",
    category: "Análise",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Calendar,
    title: "Euro 2024: Preparação Intensifica",
    description: "Casas de apostas preparam promoções especiais para o Campeonato Europeu com foco na Seleção Nacional",
    date: "8 Janeiro 2024",
    category: "Eventos",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export function BettingNewsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Últimas Notícias do Betting</h2>
          <p className="text-lg text-white drop-shadow-md max-w-2xl mx-auto">
            Mantenha-se atualizado com as últimas novidades do mundo das apostas desportivas em Portugal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bettingNews.map((news, index) => {
            const IconComponent = news.icon
            return (
              <Card key={index} className="card-hover bg-white border-l-4 border-l-red-600">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${news.bgColor} flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${news.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${news.bgColor} ${news.color}`}>
                          {news.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {news.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-800 mb-2">{news.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{news.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-50 to-green-50 border-2 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">📈 Tendências do Mercado</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">+25%</div>
                  <div className="text-sm text-gray-600">Crescimento Anual</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-600">Sites Licenciados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">2.1M</div>
                  <div className="text-sm text-gray-600">Utilizadores Ativos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
