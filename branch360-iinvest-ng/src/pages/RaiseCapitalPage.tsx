import { useEffect } from 'react'
import { Header } from '../components/Header'
import { MarketingPageTitle } from '../components/MarketingPageTitle'
import { SiteFooter } from '../components/SiteFooter'
import { RaiseHero } from '../components/raise/RaiseHero'
import { RaiseContactSection } from '../components/raise/RaiseContactSection'
import { RaiseFaq } from '../components/raise/RaiseFaq'
import { RaisePartnersSection } from '../components/raise/RaisePartnersSection'
import { RaiseFundingCategories } from '../components/raise/RaiseFundingCategories'
import { RaiseHowItWorks } from '../components/raise/RaiseHowItWorks'
import { RaiseIntroductionSection } from '../components/raise/RaiseIntroductionSection'
import { RaiseValuePropositions } from '../components/raise/RaiseValuePropositions'
import { RaiseReadyToGrow } from '../components/raise/RaiseReadyToGrow'
import { RaiseSuccessStories } from '../components/raise/RaiseSuccessStories'
import { RaiseWhyInvest } from '../components/raise/RaiseWhyInvest'

/** Raise capital / Raise funds marketing page (Milestone 2). */
export function RaiseCapitalPage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Raise Funds | Nigeria investment gateway | iInvest'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-[Poppins,system-ui,sans-serif]">
      <Header showFilters={false} />
      <main className="flex-1" id="main-content">
        <MarketingPageTitle>Raise capital for your Business</MarketingPageTitle>
        <RaiseHero />
        <RaiseValuePropositions />
        <RaiseIntroductionSection />
        <RaiseWhyInvest />
        <RaiseHowItWorks />
        <RaiseFundingCategories />
        <RaiseSuccessStories />
        <RaiseReadyToGrow />
        <RaiseFaq />
        <RaiseContactSection />
        <RaisePartnersSection />
      </main>
      <SiteFooter />
    </div>
  )
}
