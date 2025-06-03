import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center text-black drop-shadow-lg">Sobre Nós</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Somos uma equipa independente de especialistas em apostas desportivas dedicada a fornecer informações
                precisas e atualizadas sobre os melhores sites de apostas licenciados em Portugal.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Como Selecionamos os Sites</h3>

              <ul className="text-gray-700 space-y-2">
                <li>
                  • <strong>Licenciamento:</strong> Apenas sites licenciados pelo SRIJ
                </li>
                <li>
                  • <strong>Segurança:</strong> Verificação de medidas de proteção de dados
                </li>
                <li>
                  • <strong>Bónus:</strong> Análise de termos e condições justos
                </li>
                <li>
                  • <strong>Suporte:</strong> Qualidade do atendimento ao cliente
                </li>
                <li>
                  • <strong>Pagamentos:</strong> Rapidez e segurança nas transações
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
