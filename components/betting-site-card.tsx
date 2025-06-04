import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { BettingSite } from "@/data/betting-sites"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer">
      <Card
        className={`card-hover animate-on-scroll ${site.featured
            ? "ring-2 sm:ring-4 ring-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 glow-animation"
            : "bg-white"
          }`}
      >
        <CardContent className="p-3 sm:p-4 lg:p-6">
          {/* Mobile Layout (< 640px) */}
          <div className="block sm:hidden">
            <div className="flex items-center justify-between mb-2">
              <div
                className={`text-lg font-bold ${site.featured ? "text-yellow-600 pulse-animation" : "text-gray-400"}`}
              >
                #{rank}
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mb-3">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={`${site.name} logo`}
                width={90}
                height={45}
                className="object-contain mx-auto mb-2 float-animation"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{site.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{site.description}</p>
              <div className="text-sm font-semibold text-green-600 mb-3">{site.bonus}</div>
            </div>

            <div className="text-center mb-3">
              <div className="text-xs text-gray-600 mb-2">
                {site.rating}/5 ({site.reviews} avaliações)
              </div>
              <Button
                className="portugal-gradient text-white w-full py-2 text-sm font-semibold hover:opacity-90 scale-in"
                size="sm"
              >
                Obter Bónus
              </Button>
            </div>

            <div className="pt-2 border-t border-gray-200 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500">
              <span className="bg-red-600 text-white px-2 py-1 rounded">18+</span>
              <span>Jogo Responsável</span>
              <span>•</span>
              <span>Aplicam-se T&C</span>
            </div>
          </div>

          {/* Tablet Layout (640px - 1024px) */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`text-2xl font-bold ${site.featured ? "text-yellow-600 pulse-animation" : "text-gray-400"
                    }`}
                >
                  #{rank}
                </div>
                <div className="text-center">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={`${site.name} logo`}
                    width={100}
                    height={50}
                    className="object-contain float-animation mb-2"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{site.name}</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {site.rating}/5 ({site.reviews} avaliações)
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{site.description}</p>
                <div className="text-lg font-semibold text-green-600">{site.bonus}</div>
              </div>
              <Button
                className="portugal-gradient text-white px-6 py-2 text-sm font-semibold hover:opacity-90 scale-in"
                size="sm"
              >
                Obter Bónus
              </Button>
            </div>

            <div className="pt-3 border-t border-gray-200 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="bg-red-600 text-white px-2 py-1 rounded">18+</span>
              <span>Jogo Responsável</span>
              <span>•</span>
              <span>Aplicam-se T&C</span>
            </div>
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div
                  className={`text-3xl font-bold ${site.featured ? "text-yellow-600 pulse-animation" : "text-gray-400"
                    }`}
                >
                  #{rank}
                </div>

                <div className="flex items-center space-x-4">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={`${site.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain float-animation"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{site.name}</h3>
                    <p className="text-sm text-gray-600">{site.description}</p>
                    <div className="text-lg font-semibold text-green-600 mt-1">{site.bonus}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(site.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {site.rating}/5 ({site.reviews} avaliações)
                  </div>
                </div>

                <Button
                  className="portugal-gradient text-white px-8 py-3 text-lg font-semibold hover:opacity-90 scale-in"
                  size="lg"
                >
                  Obter Bónus
                </Button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="bg-red-600 text-white px-2 py-1 rounded">18+</span>
              <span>Jogo Responsável</span>
              <span>•</span>
              <span>Aplicam-se T&C</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
