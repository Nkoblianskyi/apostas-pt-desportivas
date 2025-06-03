import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6 fade-in">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">Ranking Top Sites de Apostas Portugal</h2>
          <Image
            src="/logo.png"
            alt="Bandeira de Portugal"
            width={60}
            height={40}
            className="rounded pulse-animation"
          />
        </div>

        <p className="text-lg text-white drop-shadow-md mb-4 fade-in-delay-1">
          Atualizado: {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </p>

        <div className="flex items-center justify-center space-x-6 text-sm text-white drop-shadow-md fade-in-delay-2">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs glow-animation">18+</div>
            <span>Jogo Responsável</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 text-white px-2 py-1 rounded text-xs bounce-animation">✓</div>
            <span>Sites Licenciados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
