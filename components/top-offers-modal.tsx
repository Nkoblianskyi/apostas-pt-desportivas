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
      <DialogContent className="w-[95vw] max-w-md sm:max-w-lg p-0 border-0 max-h-[85vh] flex flex-col">
        <Card className="border-0 w-full flex flex-col h-full">
          <CardHeader className="text-center portugal-gradient text-white relative p-3 flex-shrink-0">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors z-10 bg-black/20 rounded-full p-1"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>
            <CardTitle className="text-lg pr-8">🎯 Top 3 Ofertas!</CardTitle>
          </CardHeader>

          <CardContent className="p-3 flex-1 overflow-hidden">
            <div className="space-y-3 h-full flex flex-col">
              {topOffers.map((offer, index) => (
                <div key={offer.id} className="border rounded-lg hover:bg-gray-50 transition-colors flex-1 min-h-0">
                  {/* Mobile Layout (< 640px) */}
                  <div className="block sm:hidden p-2 h-full">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-bold text-yellow-600">#{index + 1}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <Image
                        src={offer.logo || "/placeholder.svg"}
                        alt={offer.name}
                        width={50}
                        height={20}
                        className="object-contain flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xs truncate">{offer.name}</h3>
                        <p className="text-green-600 font-bold text-xs truncate">{offer.bonus}</p>
                      </div>
                    </div>

                    <Button asChild className="portugal-gradient text-white w-full text-xs py-1.5 h-auto">
                      <a href={offer.url} target="_blank" rel="noopener noreferrer">
                        Obter Agora
                      </a>
                    </Button>
                  </div>

                  {/* Desktop Layout (>= 640px) */}
                  <div className="hidden sm:flex items-center justify-between p-3 h-full">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="text-lg font-bold text-yellow-600 flex-shrink-0">#{index + 1}</div>
                      <Image
                        src={offer.logo || "/placeholder.svg"}
                        alt={offer.name}
                        width={80}
                        height={32}
                        className="object-contain flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate">{offer.name}</h3>
                        <p className="text-green-600 font-bold text-sm truncate">{offer.bonus}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{offer.rating}/5</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="portugal-gradient text-white flex-shrink-0 ml-2">
                      <a href={offer.url} target="_blank" rel="noopener noreferrer">
                        Obter
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 text-center flex-shrink-0">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className="bg-red-600 text-white px-2 py-1 rounded">18+</span>
                <span>Jogue com responsabilidade</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
