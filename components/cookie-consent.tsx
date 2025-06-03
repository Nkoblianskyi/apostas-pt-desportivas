"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2">Utilizamos Cookies</h3>
              <p className="text-sm text-gray-600">
                Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar a navegar, concorda com a
                nossa{" "}
                <a href="/cookies" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={declineCookies}>
                Recusar
              </Button>
              <Button onClick={acceptCookies} className="portugal-gradient text-white">
                Aceitar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
