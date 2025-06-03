import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SafeGamingSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-black drop-shadow-lg">Jogo Responsável</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="bg-red-600 text-white px-6 py-3 rounded-full text-2xl font-bold inline-block mb-4">
                18+
              </div>
              <p className="text-gray-700 text-lg">Aposte com responsabilidade. O jogo pode causar dependência.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🛡️ Organizações de Apoio</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">ICAD - Instituto para os Comportamentos Aditivos</h4>
                    <p className="text-gray-600">
                      Organismo oficial português responsável pela prevenção e tratamento de dependências, incluindo o
                      jogo patológico.
                    </p>
                    <a
                      href="https://www.icad.pt/"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      www.icad.pt
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">SRIJ - Serviço de Regulação e Inspeção de Jogos</h4>
                    <p className="text-gray-600">
                      Entidade reguladora dos jogos online em Portugal, garantindo a segurança e legalidade das
                      operações.
                    </p>
                    <a
                      href="https://www.srij.turismodeportugal.pt/"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      www.srij.turismodeportugal.pt
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Jogo Responsável</h4>
                    <p className="text-gray-600">
                      Plataforma dedicada à promoção de práticas de jogo seguras e responsáveis em Portugal.
                    </p>
                    <a
                      href="https://jogoresponsavel.pt/"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noreferrer"
                    >
                      jogoresponsavel.pt
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">⚠️ Sinais de Alerta</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apostar mais dinheiro do que pode perder</li>
                  <li>• Perseguir perdas com apostas maiores</li>
                  <li>• Mentir sobre gastos em apostas</li>
                  <li>• Negligenciar responsabilidades</li>
                  <li>• Sentir ansiedade quando não pode apostar</li>
                  <li>• Pedir dinheiro emprestado para apostar</li>
                  <li>• Pensar constantemente em apostas</li>
                </ul>

                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500">
                  <p className="text-red-700 text-sm font-medium">
                    Se reconhece estes sinais, procure ajuda imediatamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔧 Ferramentas de Autocontrolo</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Limites de Depósito</h4>
                    <p className="text-gray-600">Defina limites diários, semanais ou mensais para os seus depósitos.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Limites de Tempo</h4>
                    <p className="text-gray-600">Controle o tempo que passa a apostar online.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Auto-exclusão</h4>
                    <p className="text-gray-600">Bloqueie temporária ou permanentemente o acesso às apostas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Verificação de Realidade</h4>
                    <p className="text-gray-600">Receba lembretes sobre o tempo e dinheiro gastos.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📞 Onde Procurar Ajuda</h3>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-white rounded border">
                    <h4 className="font-semibold text-gray-700">Linha Vida</h4>
                    <p className="text-gray-600">Apoio psicológico 24h</p>
                    <p className="text-lg font-bold text-green-600">213 544 545</p>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <h4 className="font-semibold text-gray-700">SOS Voz Amiga</h4>
                    <p className="text-gray-600">Apoio emocional gratuito</p>
                    <p className="text-lg font-bold text-green-600">213 544 545</p>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <h4 className="font-semibold text-gray-700">Centros de Tratamento</h4>
                    <p className="text-gray-600">Consulte o ICAD para centros especializados na sua região</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lembre-se</h3>
              <p className="text-gray-700 mb-4">
                As apostas devem ser sempre uma forma de entretenimento, nunca uma fonte de rendimento. Aposte apenas o
                que pode perder e procure ajuda se sentir que está a perder o controlo.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-red-600 text-white px-3 py-1 rounded">18+</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded">Jogue com Moderação</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded">Procure Ajuda</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
