import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-white/90 min-h-screen">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-4xl text-center text-gray-800">Política de Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700">
                Esta política de privacidade descreve como recolhemos, utilizamos e protegemos as suas informações
                pessoais.
              </p>

              <h2>Informações que Recolhemos</h2>
              <p>
                Recolhemos informações que nos fornece diretamente, como quando se inscreve na nossa newsletter ou nos
                contacta.
              </p>

              <h2>Como Utilizamos as Suas Informações</h2>
              <ul>
                <li>Para fornecer e melhorar os nossos serviços</li>
                <li>Para comunicar consigo sobre atualizações</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger os nossos direitos e propriedade</li>
              </ul>

              <h2>Partilha de Informações</h2>
              <p>
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros para fins comerciais,
                exceto conforme descrito nesta política.
              </p>

              <h2>Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger as suas informações pessoais contra acesso
                não autorizado, alteração, divulgação ou destruição.
              </p>

              <h2>Os Seus Direitos</h2>
              <p>
                Tem o direito de aceder, corrigir ou eliminar as suas informações pessoais. Pode também opor-se ao
                processamento dos seus dados em certas circunstâncias.
              </p>

              <h2>Contacto</h2>
              <p>
                Se tiver questões sobre esta política de privacidade, pode contactar-nos através do email:
                <strong>privacidade@apostasptdesportivas.com</strong>
              </p>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
