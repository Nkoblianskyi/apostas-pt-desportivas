"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Star } from "lucide-react"
import Image from "next/image"
import { topSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [showModal, setShowModal] = useState(false)

  // Берем только первые 3 сайта из топ списка
  const topOffers = topSites.slice(0, 3)

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalShown = sessionStorage.getItem("top-offers-modal-shown")
      if (!modalShown) {
        setShowModal(true)
        sessionStorage.setItem("top-offers-modal-shown", "true")
      }
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-[95vw] w-full sm:max-w-lg p-0 border-0 mx-2">
        <div className="relative">
          <Card className="border-0">
            <CardHeader className="text-center portugal-gradient text-white relative p-4 sm:p-6">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-gray-200 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <CardTitle className="text-lg sm:text-xl lg:text-2xl pt-2 pr-8">🎯 Top 3 Melhores Ofertas!</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3 sm:space-y-4">
                {topOffers.map((offer, index) => (
                  <div key={offer.id} className="border rounded-lg hover:bg-gray-50 transition-colors">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-lg font-bold text-yellow-600">#{index + 1}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <Image
                          src={offer.logo || "/placeholder.svg"}
                          alt={offer.name}
                          width={80}
                          height={32}
                          className="object-contain mx-auto mb-2"
                        />
                        <h3 className="font-semibold text-sm">{offer.name}</h3>
                        <p className="text-xs text-gray-600 mb-1">{offer.description}</p>
                        <p className="text-green-600 font-bold text-sm">{offer.bonus}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {offer.rating}/5 ({offer.reviews} avaliações)
                        </p>
                      </div>
                      <Button asChild className="portugal-gradient text-white w-full text-sm">
                        <a href={offer.url} target="_blank" rel="noopener noreferrer">
                          Obter Agora
                        </a>
                      </Button>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center justify-between p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-yellow-600">#{index + 1}</div>
                        <Image
                          src={offer.logo || "/placeholder.svg"}
                          alt={offer.name}
                          width={100}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="font-semibold">{offer.name}</h3>
                          <p className="text-xs text-gray-600">{offer.description}</p>
                          <p className="text-green-600 font-bold">{offer.bonus}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {offer.rating}/5 ({offer.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="portugal-gradient text-white">
                        <a href={offer.url} target="_blank" rel="noopener noreferrer">
                          Obter Agora
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
                <span className="bg-red-600 text-white px-2 py-1 rounded mr-2">18+</span>
                Aplicam-se termos e condições. Jogue com responsabilidade.
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
