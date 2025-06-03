import { BettingSiteCard } from "./betting-site-card"
import { ScrollAnimations } from "./scroll-animations"
import { topSites } from "@/data/betting-sites"

export function TopSitesList() {
  return (
    <section className="py-6 sm:py-8 lg:py-12">
      <ScrollAnimations />
      <div className="container mx-auto px-2 sm:px-4">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 max-w-6xl mx-auto">
          {topSites.map((site, index) => (
            <div key={site.id} className="w-full">
              <BettingSiteCard site={site} rank={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
