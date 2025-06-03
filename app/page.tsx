import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TopSitesList } from "@/components/top-sites-list"
import { HistoricalRecordsSection } from "@/components/historical-records-section"
import { BettingNewsSection } from "@/components/betting-news-section"
import { UserReviewsSection } from "@/components/user-reviews-section"
import { AboutSection } from "@/components/about-section"
import { SafeGamingSection } from "@/components/safe-gaming-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apostas PT Desportivas - Melhores Sites de Apostas em Portugal 2024",
  description:
    "🏆 Ranking atualizado dos melhores sites de apostas desportivas licenciados pelo SRIJ em Portugal. Bónus exclusivos, odds competitivas e análises detalhadas.",
  openGraph: {
    title: "Apostas PT Desportivas - Ranking 2024",
    description: "🏆 Ranking atualizado dos melhores sites de apostas desportivas licenciados pelo SRIJ em Portugal.",
    images: ["/images/homepage-og.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="homepage-background">
      <Header />
      <main>
        <HeroSection />
        <TopSitesList />
        <HistoricalRecordsSection />
        <BettingNewsSection />
        <UserReviewsSection />
        <AboutSection />
        <SafeGamingSection />
      </main>
      <Footer />
    </div>
  )
}
