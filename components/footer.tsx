import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Apostas PT Desportivas</h3>
            <p className="text-gray-400 text-sm">O seu guia confiável para apostas desportivas em Portugal.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apostas-online-legais-portugal" className="text-gray-400 hover:text-white">
                  Apostas Legais em Portugal
                </Link>
              </li>
              <li>
                <Link href="/jogo-responsavel" className="text-gray-400 hover:text-white">
                  Jogo Responsável
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Organizações</h4>
            <div className="grid grid-cols-3 gap-3">
              <Link href="https://www.icad.pt/" target="_blank" className="hover:opacity-100 transition-opacity bg-white p-2">
                <Image
                  src="/icad.png"
                  alt="ICAD"
                  width={80}
                  height={60}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
              <Link href="https://www.gamcare.org.uk/" target="_blank" className="hover:opacity-100 transition-opacity bg-white p-2">
                <Image
                  src="/gamecare.svg"
                  alt="GamCare"
                  width={80}
                  height={60}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
              <Link
                href="https://www.srij.turismodeportugal.pt/"
                target="_blank"
                className="hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/srij.svg"
                  alt="SRIJ"
                  width={80}
                  height={60}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                className="hover:opacity-100 transition-opacity bg-white p-2"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={100}
                  height={60}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
              <Link href="https://jogoresponsavel.pt/" target="_blank" className="hover:opacity-100 transition-opacity">
                <Image
                  src="/jogo2.png"
                  alt="Jogo Responsável"
                  width={150}
                  height={120}
                  className="opacity-80 hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Jogo Responsável</h4>
            <div className="bg-red-600 text-white px-4 py-2 rounded text-center mb-2">18+</div>
            <p className="text-xs text-gray-400">Aposte com responsabilidade. O jogo pode causar dependência.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Apostas PT Desportivas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
