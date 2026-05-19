import { useEffect } from 'react'
import { Header } from '../components/Header'
import { SiteFooter } from '../components/SiteFooter'
import { InvestContactSection } from '../components/invest/InvestContactSection'
import { InvestFaq } from '../components/invest/InvestFaq'
import { InvestFeaturedOpportunities } from '../components/invest/InvestFeaturedOpportunities'
import { InvestHero as InvestHeroSection } from '../components/invest/InvestHero'
import { InvestHowItWorks } from '../components/invest/InvestHowItWorks'
import { InvestIntroductionSection } from '../components/invest/InvestIntroductionSection'
import { InvestPartnersSection } from '../components/invest/InvestPartnersSection'
import { InvestReadyToInvest } from '../components/invest/InvestReadyToInvest'
import { InvestValuePropositions } from '../components/invest/InvestValuePropositions'
import { InvestWhyInvest } from '../components/invest/InvestWhyInvest'

export function InvestPage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Invest | Nigeria investment gateway | iInvest'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-[Poppins,system-ui,sans-serif]">
      <Header showFilters={false} />
      <main className="flex-1">
        <InvestHeroSection />
        <InvestValuePropositions />
        <InvestIntroductionSection />
        <InvestWhyInvest />
        <InvestHowItWorks />
        <InvestFeaturedOpportunities />
        <InvestReadyToInvest />
        <InvestFaq />
        <InvestContactSection />
        <InvestPartnersSection />
      </main>
      <SiteFooter />
    </div>
  )
}
