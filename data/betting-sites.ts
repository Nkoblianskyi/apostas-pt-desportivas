export interface BettingSite {
  id: number
  name: string
  url: string
  logo: string
  bonus: string
  rating: number
  reviews: number
  featured: boolean
  description: string
}

export const topSites: BettingSite[] = [
  {
    id: 1,
    name: "Casino Portugal",
    url: "https://www.casinoportugal.pt/",
    logo: "/portugal.png",
    bonus: "50% até 100€",
    rating: 5,
    reviews: 31257,
    featured: true,
    description: "BÓNUS DE BOAS-VINDAS",
  },
  {
    id: 2,
    name: "Solverde",
    url: "https://www.solverde.pt/",
    logo: "/solve.png",
    bonus: "Bónus de 30€ oferecido",
    rating: 5,
    reviews: 28983,
    featured: false,
    description: "BÓNUS DE BOAS-VINDAS",
  },
]
