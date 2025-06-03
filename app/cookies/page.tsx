import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-white/90 min-h-screen">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-4xl text-center text-gray-800">Política de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700">
                Esta política explica como utilizamos cookies no nosso website apostasptdesportivas.com.
              </p>

              <h2>O que são Cookies?</h2>
              <p>
                Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo quando visita o nosso
                website. Estes ficheiros permitem-nos reconhecê-lo e lembrar as suas preferências.
              </p>

              <h2>Tipos de Cookies que Utilizamos</h2>

              <h3>Cookies Essenciais</h3>
              <p>Estes cookies são necessários para o funcionamento básico do website e não podem ser desativados.</p>

              <h3>Cookies de Desempenho</h3>
              <p>
                Estes cookies recolhem informações sobre como utiliza o nosso website, ajudando-nos a melhorar a sua
                experiência.
              </p>

              <h3>Cookies de Funcionalidade</h3>
              <p>
                Estes cookies permitem que o website se lembre das suas escolhas e forneça funcionalidades melhoradas e
                personalizadas.
              </p>

              <h2>Como Controlar os Cookies</h2>
              <p>
                Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no
                seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>

              <h2>Contacto</h2>
              <p>
                Se tiver questões sobre esta política de cookies, pode contactar-nos através do email:
                <strong>info@apostasptdesportivas.com</strong>
              </p>

              <p className="text-sm text-gray-600">
                <strong>Última atualização:</strong> Janeiro 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
