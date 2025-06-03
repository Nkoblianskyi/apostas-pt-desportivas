import { BettingSiteCard } from "./betting-site-card"
import { ScrollAnimations } from "./scroll-animations"

const topSites = [
  {
    id: 1,
    name: "Casino Portugal",
    url: "https://www.casinoportugal.pt/",
    logo: "/portugal.png",
    bonus: "50% até 100€",
    rating: 5,
    reviews: 41250,
    featured: true,
    description: "BÓNUS DE BOAS-VINDAS",
  },
  {
    id: 2,
    name: "Solverde",
    url: "https://www.solverde.pt/",
    logo: "/solve.png",
    bonus: "Bónus de 30€ oferecido",
    rating: 4.8,
    reviews: 39987,
    featured: false,
    description: "BÓNUS DE BOAS-VINDAS",
  },
]

export function TopSitesList() {
  return (
    <section className="py-12">
      <ScrollAnimations />
      <div className="container mx-auto px-4 gap-3">
        <div className="space-y-8 flex flex-col gap-[5px]">
          {topSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
