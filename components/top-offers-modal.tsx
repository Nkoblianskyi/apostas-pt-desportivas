"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Image from "next/image"
import { topSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [showModal, setShowModal] = useState(false)

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

  if (!showModal) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowModal(false)} />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-[320px] sm:max-w-[432px] lg:max-w-[640px] bg-white rounded-lg shadow-xl relative">
          {/* Header with Close Button INSIDE */}
          <div className="portugal-gradient text-white p-4 rounded-t-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h2 className="text-sm sm:text-base lg:text-xl font-bold pr-10">🎯 Top Ofertas!</h2>
            <p className="text-xs sm:text-sm opacity-90 mt-1">Melhores bónus licenciados</p>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 space-y-3">
            {topOffers.map((offer, index) => (
              <a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors"
              >
                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-yellow-600">#{index + 1}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={offer.logo || "/placeholder.svg"}
                      alt={offer.name}
                      width={110}
                      height={80}
                      className="object-contain flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{offer.name}</h3>
                      <p className="text-green-600 font-bold text-xs truncate">{offer.bonus}</p>
                    </div>
                  </div>

                  <div className="portugal-gradient text-white text-center py-2 rounded text-xs font-semibold">
                    Obter Bónus
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-yellow-600">#{index + 1}</div>
                    <Image
                      src={offer.logo || "/placeholder.svg"}
                      alt={offer.name}
                      width={80}
                      height={32}
                      className="object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-base">{offer.name}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(offer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-1">{offer.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <p className="text-lg font-bold text-green-600 border border-green-600 rounded p-2 shadow-xl">{offer.bonus}</p>
                    <div className="portugal-gradient text-white px-4 py-2 rounded text-sm font-semibold mt-1 max-w-[120px] items-end">
                      Obter Agora
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Footer */}
            <div className="text-center pt-3 border-t">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                <span className="bg-red-600 text-white px-2 py-1 rounded">18+</span>
                <span>Responsável</span>
              </div>
              <div className="p-2 bg-blue-50 rounded text-xs text-blue-700">
                ⚡ Ofertas limitadas! Registe-se agora.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
