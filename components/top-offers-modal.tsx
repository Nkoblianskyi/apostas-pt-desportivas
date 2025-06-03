"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

const topOffers = [
  {
    name: "Casino Portugal",
    bonus: "50% até 100€",
    url: "https://www.casinoportugal.pt/",
    logo: "/placeholder.svg?height=60&width=150",
  },
  {
    name: "Solverde",
    bonus: "Bónus de 30€",
    url: "https://www.solverde.pt/",
    logo: "/placeholder.svg?height=60&width=150",
  },
]

export function TopOffersModal() {
  const [showModal, setShowModal] = useState(false)

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
      <DialogContent className="max-w-[95vw] w-full sm:max-w-md p-0 border-0 mx-2">
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
              <CardTitle className="text-lg sm:text-xl lg:text-2xl pt-2 pr-8">🎯 Melhores Ofertas Hoje!</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3 sm:space-y-4">
                {topOffers.map((offer, index) => (
                  <div key={index} className="border rounded-lg hover:bg-gray-50 transition-colors">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden p-3">
                      <div className="text-center mb-3">
                        <Image
                          src={offer.logo || "/placeholder.svg"}
                          alt={offer.name}
                          width={80}
                          height={32}
                          className="object-contain mx-auto mb-2"
                        />
                        <h3 className="font-semibold text-sm">{offer.name}</h3>
                        <p className="text-green-600 font-bold text-sm">{offer.bonus}</p>
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
                        <Image
                          src={offer.logo || "/placeholder.svg"}
                          alt={offer.name}
                          width={100}
                          height={40}
                          className="object-contain"
                        />
                        <div>
                          <h3 className="font-semibold">{offer.name}</h3>
                          <p className="text-green-600 font-bold">{offer.bonus}</p>
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
