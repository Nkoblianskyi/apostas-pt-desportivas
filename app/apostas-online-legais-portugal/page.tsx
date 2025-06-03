import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, FileText, Shield, Award } from "lucide-react"

export default function ApostasLegaisPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-50 to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Apostas Online em Portugal: É Legal? Como Funciona?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tudo o que precisa de saber sobre a legalidade e o funcionamento das apostas online em Portugal
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">Regulado pelo SRIJ</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">Atualizado em 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2>O Que Diz a Lei Portuguesa Sobre Apostas Online?</h2>
                <p>
                  Em Portugal, as apostas online são completamente legais desde que operadas por entidades devidamente
                  licenciadas pelo <strong>Serviço de Regulação e Inspeção de Jogos (SRIJ)</strong>, que faz parte do
                  Turismo de Portugal. Esta regulamentação foi estabelecida em 2015 com a Lei nº 66/2015, que criou o
                  regime jurídico dos jogos e apostas online.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-blue-700 font-medium">
                    Apostar em sites não licenciados pelo SRIJ é ilegal e pode resultar em problemas legais, além de não
                    oferecer proteção ao consumidor.
                  </p>
                </div>

                <h2>Como Funciona o Licenciamento em Portugal?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                  <Card>
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center text-lg">
                        <FileText className="w-5 h-5 text-green-600 mr-2" />
                        Processo de Licenciamento
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ol className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            1
                          </span>
                          <span>
                            A operadora submete um pedido de licença ao SRIJ com documentação completa e plano de
                            operações
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            2
                          </span>
                          <span>
                            O SRIJ avalia a capacidade técnica, financeira e a idoneidade da empresa requerente
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            3
                          </span>
                          <span>
                            A plataforma de jogo é certificada por entidades independentes para garantir segurança e
                            justiça
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            4
                          </span>
                          <span>
                            Após aprovação, a operadora paga taxas de licenciamento e impostos sobre receitas brutas
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-800 font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                            5
                          </span>
                          <span>
                            A licença é válida por 3 anos e pode ser renovada mediante cumprimento das obrigações legais
                          </span>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        Requisitos para Operadoras
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Sede em país da UE ou EEE</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Capital social mínimo de €500.000</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Sistemas de segurança certificados</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Ferramentas de jogo responsável</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Separação de fundos dos jogadores</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                          <span>Domínio .pt para operações em Portugal</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2>O Que é Permitido e O Que Não é Permitido?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
                  <div>
                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Permitido
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start bg-green-50 p-3 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Apostas desportivas à cota (pré-jogo e ao vivo)</span>
                      </li>
                      <li className="flex items-start bg-green-50 p-3 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Jogos de casino online (slots, roleta, blackjack, etc.)</span>
                      </li>
                      <li className="flex items-start bg-green-50 p-3 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Poker online</span>
                      </li>
                      <li className="flex items-start bg-green-50 p-3 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Apostas em corridas de cavalos</span>
                      </li>
                      <li className="flex items-start bg-green-50 p-3 rounded">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Bingo online</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                      <XCircle className="w-6 h-6 mr-2" />
                      Não Permitido
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start bg-red-50 p-3 rounded">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Apostas em sites não licenciados pelo SRIJ</span>
                      </li>
                      <li className="flex items-start bg-red-50 p-3 rounded">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Apostas em eventos com participantes menores de 18 anos</span>
                      </li>
                      <li className="flex items-start bg-red-50 p-3 rounded">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Apostas em eventos virtuais sem licença específica</span>
                      </li>
                      <li className="flex items-start bg-red-50 p-3 rounded">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Publicidade que incentive o jogo excessivo ou problemático</span>
                      </li>
                      <li className="flex items-start bg-red-50 p-3 rounded">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Jogos de apostas mútuas (como Totobola) por operadores privados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2>Guia para Novos Apostadores</h2>
                <p>
                  Se está a considerar começar a apostar online em Portugal, aqui está um guia passo a passo para
                  garantir que o faz de forma legal e segura:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg my-6 not-prose">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Passos para Começar a Apostar Legalmente</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Verifique a licença</h4>
                        <p className="text-gray-600 text-sm">
                          Confirme sempre se o site tem licença do SRIJ. Os sites legais têm o logótipo do SRIJ no
                          rodapé e um domínio .pt
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Registe-se com dados verdadeiros</h4>
                        <p className="text-gray-600 text-sm">
                          O registo requer documentos de identificação válidos. Fornecer informações falsas pode
                          resultar no bloqueio da conta
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Defina limites de depósito</h4>
                        <p className="text-gray-600 text-sm">
                          Utilize as ferramentas de jogo responsável para definir limites diários, semanais ou mensais
                          para os seus depósitos
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Conheça as regras fiscais</h4>
                        <p className="text-gray-600 text-sm">
                          Os ganhos de apostas em sites licenciados não são tributados na fonte. A responsabilidade
                          fiscal é das operadoras
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Aposte com responsabilidade</h4>
                        <p className="text-gray-600 text-sm">
                          Estabeleça um orçamento para apostas e nunca aposte mais do que pode perder. O jogo deve ser
                          uma forma de entretenimento
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Perguntas Frequentes</h2>

                <div className="space-y-6 not-prose">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                        Posso apostar em sites estrangeiros não licenciados em Portugal?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Não. É ilegal para residentes em Portugal apostar em sites que não possuam licença do SRIJ. Além
                        disso, estes sites são frequentemente bloqueados pelos ISPs portugueses por ordem do regulador.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                        Tenho que pagar impostos sobre os meus ganhos em apostas?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Os ganhos de apostas em sites licenciados não são tributados diretamente ao apostador. As
                        operadoras já pagam um imposto sobre as receitas brutas dos jogos (IEJO), que varia entre 15% e
                        30% dependendo do tipo de jogo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                        Como sei se um site é licenciado em Portugal?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Os sites licenciados operam com domínio .pt e exibem o logótipo do SRIJ no rodapé. Pode também
                        verificar a lista oficial de operadores licenciados no site do SRIJ.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                        Qual é a idade mínima para apostar online em Portugal?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        A idade mínima legal para participar em jogos e apostas online em Portugal é 18 anos. As
                        operadoras são obrigadas a verificar a idade dos jogadores durante o processo de registo.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800">Aviso Importante</h3>
                      <div className="mt-2 text-red-700">
                        <p>
                          O jogo pode causar dependência. Aposte sempre com moderação e responsabilidade. Se sentir que
                          está a perder o controlo sobre os seus hábitos de jogo, procure ajuda profissional.
                        </p>
                        <p className="mt-2">
                          <Link href="/jogo-responsavel" className="font-medium underline">
                            Saiba mais sobre jogo responsável
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
