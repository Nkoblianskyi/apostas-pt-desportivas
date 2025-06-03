import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Target, Calendar } from "lucide-react"

const historicalRecords = [
  {
    icon: Trophy,
    title: "Campeonato Europeu",
    description: "Portugal conquistou o título europeu pela primeira vez",
    year: "2016",
    details: "Vitória histórica em França após prolongamento",
    color: "text-yellow-600",
  },
  {
    icon: Medal,
    title: "Liga dos Campeões",
    description: "Clube português venceu a Champions League",
    year: "2004",
    details: "Triunfo surpreendente contra todas as expectativas",
    color: "text-blue-600",
  },
  {
    icon: Target,
    title: "Recorde Mundial",
    description: "Jogador português tornou-se maior goleador da história",
    year: "2023",
    details: "Mais de 850 golos na carreira profissional",
    color: "text-green-600",
  },
  {
    icon: Calendar,
    title: "Bicampeão Europeu",
    description: "Clube português conquistou duas Taças dos Campeões Europeus consecutivas",
    year: "1961-62",
    details: "Domínio absoluto do futebol europeu durante dois anos",
    color: "text-red-600",
  },
]

export function HistoricalRecordsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            Recordes Históricos do Desporto Português
          </h2>
          <p className="text-lg text-white drop-shadow-md max-w-2xl mx-auto">
            Celebramos os momentos mais gloriosos do desporto português que marcaram a história
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {historicalRecords.map((record, index) => {
            const IconComponent = record.icon
            const animationClass = index % 2 === 0 ? "animate-on-scroll-left" : "animate-on-scroll-right"
            return (
              <Card key={index} className={`card-hover bg-white/90 ${animationClass}`}>
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto mb-3 p-3 rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center rotate-animation`}
                  >
                    <IconComponent className={`w-8 h-8 ${record.color}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{record.title}</CardTitle>
                  <div className={`text-2xl font-bold ${record.color} pulse-animation`}>{record.year}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-medium mb-2">{record.description}</p>
                  <p className="text-sm text-gray-600">{record.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white/90 animate-on-scroll-scale">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sabia que...</h3>
              <p className="text-gray-700">
                Portugal é o único país a ter vencido o Campeonato Europeu (2016) e a Liga das Nações (2019) na mesma
                década, consolidando-se como uma potência do futebol mundial.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
