"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/apostas-online-legais-portugal"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Apostas Legais
            </Link>
            <Link
              href="/jogo-responsavel"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Jogo Responsável
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
