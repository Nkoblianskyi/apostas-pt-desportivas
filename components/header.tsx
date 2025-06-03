import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="bg-white/95 shadow-lg sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Apostas PT Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Apostas PT Desportivas</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Início
            </Link>
            <Link
              href="/apostas-online-legais-portugal"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Apostas Legais
            </Link>
            <Link href="/jogo-responsavel" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Jogo Responsável
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">18+</div>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center whitespace-nowrap">
            <div className="flex items-center space-x-8 animate-scroll">
              <span className="font-semibold">🏆 NOTÍCIAS DESPORTIVAS:</span>
              <span>Benfica vs Porto - Clássico este domingo às 20:30</span>
              <span>•</span>
              <span>Cristiano Ronaldo marca hat-trick na Liga Saudita</span>
              <span>•</span>
              <span>Sporting lidera a Liga Portugal com 3 pontos de vantagem</span>
              <span>•</span>
              <span>Seleção Nacional convocada para os próximos jogos</span>
              <span>•</span>
              <span>Novo recorde de apostas desportivas em Portugal</span>
              <span>•</span>
            </div>
            <div className="flex items-center space-x-8 animate-scroll">
              <span className="font-semibold">🏆 NOTÍCIAS DESPORTIVAS:</span>
              <span>Benfica vs Porto - Clássico este domingo às 20:30</span>
              <span>•</span>
              <span>Cristiano Ronaldo marca hat-trick na Liga Saudita</span>
              <span>•</span>
              <span>Sporting lidera a Liga Portugal com 3 pontos de vantagem</span>
              <span>•</span>
              <span>Seleção Nacional convocada para os próximos jogos</span>
              <span>•</span>
              <span>Novo recorde de apostas desportivas em Portugal</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
