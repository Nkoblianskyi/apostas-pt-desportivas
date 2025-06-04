import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="bg-white/95 shadow-lg sticky top-0 z-50 relative w-full">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 max-w-full">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink min-w-0">
            <Image
              src="/logo.png"
              alt="Apostas PT Logo"
              width={35}
              height={35}
              className="sm:w-[50px] sm:h-[50px] flex-shrink-0"
            />
            <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight truncate">
              Apostas PT Desportivas
            </h1>
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

          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              18+
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* News Ticker */}
      {/* <div className="bg-red-600 text-white py-2 overflow-hidden w-full">
        <div className="w-full px-2 sm:px-4">
          <div className="flex items-center whitespace-nowrap overflow-hidden">
            <div className="flex items-center space-x-4 sm:space-x-8 animate-scroll">
              <span className="font-semibold text-xs sm:text-sm">🏆 NOTÍCIAS:</span>
              <span className="text-xs sm:text-sm">Benfica vs Porto - Clássico domingo 20:30</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Cristiano marca hat-trick</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden sm:inline">Sporting lidera Liga Portugal</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden md:inline">Seleção Nacional convocada</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden lg:inline">Novo recorde apostas Portugal</span>
              <span className="hidden sm:inline">•</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-8 animate-scroll">
              <span className="font-semibold text-xs sm:text-sm">🏆 NOTÍCIAS:</span>
              <span className="text-xs sm:text-sm">Benfica vs Porto - Clássico domingo 20:30</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Cristiano marca hat-trick</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden sm:inline">Sporting lidera Liga Portugal</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden md:inline">Seleção Nacional convocada</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm hidden lg:inline">Novo recorde apostas Portugal</span>
              <span className="hidden sm:inline">•</span>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  )
}
