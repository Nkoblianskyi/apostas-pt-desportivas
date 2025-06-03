import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertTriangle,
  Settings,
  DollarSign,
  Clock,
  Ban,
  Bell,
  Shield,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react"

export default function JogoResponsavelPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-white/90 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="bg-red-600 text-white px-8 py-4 rounded-full text-3xl font-bold inline-block mb-6">18+</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Jogo Responsável</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aposte com responsabilidade. O jogo pode causar dependência.
            </p>
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - What is Responsible Gaming */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">O que é o Jogo Responsável?</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p>
                    O jogo responsável significa apostar de forma controlada, dentro dos seus limites financeiros e de
                    tempo, mantendo o jogo como uma forma de entretenimento e não como uma fonte de rendimento.
                  </p>
                  <p>
                    É fundamental estabelecer limites claros antes de começar a jogar e respeitá-los sempre. O jogo deve
                    ser uma atividade divertida e relaxante, nunca uma fonte de stress ou problemas financeiros.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Stats */}
            <div>
              <Card className="bg-gradient-to-br from-red-50 to-green-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Estatísticas Importantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">1-3%</div>
                      <div className="text-sm text-gray-600">da população pode desenvolver problemas com o jogo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24h</div>
                      <div className="text-sm text-gray-600">disponibilidade da Linha Vida</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">dos sites licenciados têm ferramentas de autocontrolo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Warning Signs Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-2" />
                Sinais de Alerta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Sinais Comportamentais</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Apostar mais dinheiro do que pode perder
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Perseguir perdas com apostas maiores
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Mentir sobre gastos em apostas
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Negligenciar responsabilidades pessoais ou profissionais
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Sinais Emocionais</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Sentir ansiedade quando não pode apostar
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Pedir dinheiro emprestado para apostar
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Pensar constantemente em apostas
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Sentir-se deprimido ou irritado quando não joga
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-700 font-medium">
                  Se reconhece estes sinais em si próprio ou em alguém próximo, procure ajuda imediatamente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Self-Control Tools */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Settings className="w-6 h-6 text-blue-500 mr-2" />
                Ferramentas de Autocontrolo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Limites de Depósito</h3>
                  <p className="text-sm text-gray-600">
                    Defina limites diários, semanais ou mensais para os seus depósitos
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Limites de Tempo</h3>
                  <p className="text-sm text-gray-600">Controle o tempo que passa a apostar online</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Ban className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Auto-exclusão</h3>
                  <p className="text-sm text-gray-600">Bloqueie temporária ou permanentemente o acesso às apostas</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Verificação de Realidade</h3>
                  <p className="text-sm text-gray-600">Receba lembretes sobre o tempo e dinheiro gastos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Organizations Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Shield className="w-6 h-6 text-green-500 mr-2" />
                Organizações de Apoio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Portugal</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-gray-800">ICAD - Instituto para os Comportamentos Aditivos</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Organismo oficial português responsável pela prevenção e tratamento de dependências, incluindo o
                        jogo patológico. Oferece consultas especializadas e programas de tratamento.
                      </p>
                      <a
                        href="https://www.icad.pt/"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        Visitar site oficial →
                      </a>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800">SRIJ - Serviço de Regulação e Inspeção de Jogos</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Entidade reguladora dos jogos online em Portugal, garantindo a segurança e legalidade das
                        operações. Supervisiona o cumprimento das medidas de jogo responsável.
                      </p>
                      <a
                        href="https://www.srij.turismodeportugal.pt/"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        Visitar site oficial →
                      </a>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800">Jogo Responsável</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Plataforma dedicada à promoção de práticas de jogo seguras e responsáveis em Portugal. Oferece
                        recursos educativos e ferramentas de autoavaliação.
                      </p>
                      <a
                        href="https://jogoresponsavel.pt/"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        Visitar site oficial →
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Internacional</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-800">GamCare (Reino Unido)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Organização líder no Reino Unido que oferece informação, aconselhamento e apoio gratuito para
                        qualquer pessoa afetada por problemas de jogo.
                      </p>
                      <a
                        href="https://www.gamcare.org.uk/"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        Visitar site oficial →
                      </a>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800">GambleAware</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Organização independente que comissiona educação, prevenção e tratamento de problemas
                        relacionados com o jogo. Recursos disponíveis em múltiplas línguas.
                      </p>
                      <a
                        href="https://www.gambleaware.org/"
                        target="_blank"
                        className="text-blue-600 hover:underline font-medium"
                        rel="noreferrer"
                      >
                        Visitar site oficial →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Phone className="w-6 h-6 text-green-500 mr-2" />
                Onde Procurar Ajuda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg border">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Linha Vida</h4>
                  <p className="text-gray-600 text-sm mb-3">Apoio psicológico 24 horas por dia</p>
                  <p className="text-2xl font-bold text-green-600">213 544 545</p>
                  <p className="text-xs text-gray-500 mt-2">Chamada gratuita</p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg border">
                  <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">SOS Voz Amiga</h4>
                  <p className="text-gray-600 text-sm mb-3">Apoio emocional gratuito</p>
                  <p className="text-2xl font-bold text-blue-600">213 544 545</p>
                  <p className="text-xs text-gray-500 mt-2">Todos os dias, 16h-24h</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg border">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Centros de Tratamento</h4>
                  <p className="text-gray-600 text-sm mb-3">Consulte o ICAD para centros especializados</p>
                  <a
                    href="https://www.icad.pt/"
                    target="_blank"
                    className="text-purple-600 hover:underline font-medium"
                    rel="noreferrer"
                  >
                    Encontrar centro →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Warning */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lembre-se Sempre</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                As apostas devem ser sempre uma forma de entretenimento, nunca uma fonte de rendimento. Aposte apenas o
                que pode perder e procure ajuda se sentir que está a perder o controlo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">18+</span>
                <span className="bg-gray-600 text-white px-4 py-2 rounded-full font-semibold">Jogue com Moderação</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">Procure Ajuda</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
