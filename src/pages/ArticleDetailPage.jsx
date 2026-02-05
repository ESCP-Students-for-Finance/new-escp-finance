import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { ArticleLayout } from '../components/articles/ArticleLayout';
import { ArticleNotFound } from '../components/articles/ArticleNotFound';

// UI primitives
import { LeadParagraph } from '../components/ui/LeadParagraph';
import { BodyParagraph } from '../components/ui/BodyParagraph';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TableCard } from '../components/ui/TableCard';
import { StatGrid, StatCard } from '../components/ui/StatGrid';
import { ProgressBarCard, ProgressBarRow } from '../components/ui/ProgressBarCard';
import { QuoteBlock } from '../components/ui/QuoteBlock';


import { articles as siteArticles } from '../data/siteData';

// Article content mapping
const articleContents = {

  'eqt-coller-secondaries-2026': (
    <>
      <LeadParagraph>
        EQT’s Coller Capital Acquisition: A $3.2bn Move to Build a Secondaries Powerhouse
      </LeadParagraph>

      <SectionHeading>
        A $3.2bn gateway into the “liquidity era”
      </SectionHeading>

      <BodyParagraph>
        EQT’s agreement to acquire Coller Capital may seem as a straightforward headline as the latest is one of Europe’s largest private markets firms buying a secondaries pioneer, but the strategic intent is broader. Signed on 22 January 2026, the deal allows EQT to have an immediate impact in the fast growing market for buying and selling existing stakes in private funds and other private-market assets. EQT plans to create a new section inside the group, branded “Coller EQT”, in order to add a dedicated Secondaries segment alongside its Private Capital and Real Assets core businesses. Moreover, the timing of this choice is not accidental. In fact, a market survey by Evercore pointed out that secondary transaction volume reached $226 billion, up 41% year on year. In fact, slower exits and the desire to rebalance portfolios pushed both limited partners and GPs to seek liquidity solutions. For EQT, entering now also diversifies fee streams and keeps clients engaged when distributions stay muted. Against that backdrop, EQT is positioning secondaries not as a tactical add on, but as the connective tissue of a modern private markets offering, with the transaction expected to close in Q3 2026 subject to approvals and investor consents.
      </BodyParagraph>

      <SectionHeading>
        Coller Capital: a pure-play specialist with global scale
      </SectionHeading>

      <BodyParagraph>
        Coller’s core strength lies in long-lived relationships and underwriting depth, a very difficult asset to replicate. Founded in 1990, it built its reputation by specialising exclusively in secondaries: purchasing interests in existing private equity funds, structuring GP-led continuation vehicles, and increasingly applying similar approaches in private credit. Moreover, Coller estimates that, as of 31 December 2025, it had nearly $50 billion in total assets under management (AUM), including $33 billion in fee-generating AUM, and a global team of about 330 professionals, including 77 investment professionals, across 11 offices. It is also known for data-driven pricing and bespoke liquidity structuring across complex portfolios. One important concept is that the franchise extends beyond institutional investors. Coller’s Private Wealth Secondaries Solutions business offers perpetual vehicles for eligible private wealth investors, and the firm also provides insurance dedicated solutions. Its most recent flagship, Coller International Partners IX, reached a final close on 31 December 2025 with $10.2 billion in fee generating commitments and $14.2 billion in total size including related capital, underscoring why EQT chose to acquire rather than build these capabilities internally.
      </BodyParagraph>

      <SectionHeading>
        EQT’s platform logic and the “Coller EQT” operating model
      </SectionHeading>

      <BodyParagraph>
        For EQT, the appeal is less about adding another product line and more about completing a full set of private-markets capabilities. The firm describes itself as a purpose-driven global investment organisation focused on active ownership, with strategies spanning from start up to maturity and operations across Europe, Asia and the Americas. As of 30 September 2025, EQT reported €267 billion in total assets under management and €139 billion in fee generating AUM, supported by a distribution platform that few European peers can match. The combination is intended to use that reach to build a dedicated Secondaries segment, with Coller Capital operating as a standalone platform within EQT under the “Coller EQT” brand. Governance is meant to signal continuity rather than disruption. Jeremy Coller is set to become Head of Coller EQT, reporting directly to CEO and Managing Partner Per Franzén and joining EQT’s Executive Committee, while the origination and investment process remains independent. EQT has even indicated an ambition to double Coller’s business in less than four years, an unusually explicit growth target for an M&A announcement.
      </BodyParagraph>

      <SectionHeading>
        Deal anatomy: shares up front, cash earn-out later
      </SectionHeading>

      <BodyParagraph>
        The deal economics indicate that EQT is effectively purchasing Coller’s management fee stream while leaving its investment platform largely unchanged. EQT will acquire 100% of Coller’s management company and the general partner entities controlling its funds, plus 10% of carried interest in the latest flagship private equity secondaries fund, CIP IX. Moreover, it will also be entitled to invest in 35% of carried interest in Coller’s future closed ended funds. The base consideration is $3.2 billion on a cash and debt free basis. In fact, it will be funded mainly with newly issued EQT ordinary shares at a fixed price of SEK 355, that is a value around 81 million shares and roughly 7% of shares outstanding, with about $65 million payable in cash at completion. A further earn-out of up to $500 million, payable in cash, is tied to business performance over the 12 months ending March 2029. Key Coller individuals who are expected to receive most of the earn-out have agreed to reinvest their net proceeds into EQT shares. The seller group includes founder Jeremy Coller, minority investors, including State Street, and management. EQT expects the transaction to deliver mid-single-digit growth in fee-related earnings.
      </BodyParagraph>

      <SectionHeading>
        UBS as adviser, and the milestones that decide whether the bet pays off
      </SectionHeading>

      <BodyParagraph>
        UBS acted as financial adviser to EQT on the transaction, while Morgan Stanley advised Coller, reflecting the challenges of valuing an asset manager and aligning incentives within a listed group. The deal is expected to close in Q3 2026, but only after regulatory approvals and certain Coller’s fund investor consents. If closing is delayed beyond EQT’s annual shareholders’ meeting on 12 May 2026, shareholders will also need to approve the share issuance used for the base consideration. From a balance-sheet perspective, the structure is conservative. Fitch has said that the acquisition should be rating neutral because the $3.2 billion base is funded through a share issue with no additional debt raised, while the earn out is deferred and settled in cash. The real questions come after closing: can Coller EQT preserve an independent investment process while leveraging EQT’s distribution, and can it expand secondaries solutions into areas like real assets and insurance channels without diluting returns? In a market where secondaries are increasingly used for portfolio construction, EQT is betting that greater scale and deeper specialisation will reinforce each other.
      </BodyParagraph>

      <TableCard
        title="Key dates, market backdrop, and process"
        className="mb-8"
        header={['Topic', 'Key data / number', 'Why it matters']}
        rows={[
          ['Deal announcement / signing', '22 Jan 2026', 'Marks EQT’s formal entry into secondaries via acquisition (not build).'],
          ['Expected closing', 'Q3 2026', 'Completion is subject to approvals and investor consents.'],
          ['Secondary market activity', '$226bn secondary transaction volume', 'Shows the scale of the “liquidity era” opportunity.'],
          ['YoY growth in secondaries', '+41%', 'Indicates rapid expansion in secondaries demand and usage.'],
          ['Key closing conditions', 'Regulatory approvals + Coller fund investor consents', 'Main gating items before completion.'],
          ['Shareholder approval trigger', 'If delayed beyond 12 May 2026 (EQT AGM)', 'Share issuance may need shareholder approval if closing slips past the AGM.'],
          ['Credit view (Fitch)', 'Expected rating-neutral', 'Base funded via equity; earn-out deferred and paid in cash.'],
          ['Advisers', 'UBS (EQT) / Morgan Stanley (Coller)', 'Reflects complexity of valuing an asset manager and aligning incentives.'],
        ]}
      />

      <TableCard
        title="Buyer/seller scale, platform metrics, and deal economics"
        className="mb-8"
        header={['Category', 'Key data / number', 'Notes']}
        rows={[
          ['New unit / brand', '“Coller EQT”', 'Secondaries becomes a dedicated segment alongside EQT’s Private Capital and Real Assets.'],
          ['EQT scale (AUM)', '€267bn total AUM (as of 30 Sep 2025)', 'Large distribution reach to scale secondaries globally.'],
          ['EQT fee-generating AUM', '€139bn (as of 30 Sep 2025)', 'Core driver of recurring management fees.'],
          ['Coller scale (AUM)', '~$50bn total AUM (as of 31 Dec 2025)', 'Pure-play secondaries specialist with global footprint.'],
          ['Coller fee-generating AUM', '$33bn', 'Highlights strength of fee base being acquired.'],
          ['Coller team / presence', '~330 professionals (77 investment) / 11 offices', 'Indicates operating scale and sourcing coverage.'],
          ['Flagship fund (CIP IX)', 'Final close 31 Dec 2025', '$10.2bn fee-generating commitments; $14.2bn total size incl. related capital.'],
          ['Base purchase price', '$3.2bn (cash- & debt-free)', 'Primarily buying the management-fee stream/platform economics.'],
          ['Consideration mix', 'Mostly new EQT shares at SEK 355', '~81m shares, ~7% of shares outstanding; plus ~$65m cash at completion.'],
          ['Earn-out', 'Up to $500m cash', 'Based on performance over 12 months ending Mar 2029; key individuals reinvest net proceeds into EQT shares.'],
          ['What EQT acquires', '100% of management company + GP entities', 'Also 10% of carry in CIP IX and entitlement to invest in 35% of carry in future closed-ended funds.'],
          ['Leadership / governance', 'Jeremy Coller to lead Coller EQT', 'Reports to CEO/Managing Partner Per Franzén; investment process intended to remain independent.'],
          ['Explicit growth target', 'Double Coller’s business in <4 years', 'Unusually specific post-deal ambition.'],
          ['Earnings impact', 'Mid-single-digit growth in fee-related earnings', 'EQT’s stated expectation from the transaction.'],
        ]}
      />

      <BodyParagraph>
        Written by Federico Spogler and Francesco Kaitsas
      </BodyParagraph>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://eqtgroup.com/news/eqt-to-combine-with-coller-capital-to-enter-secondaries-marking-the-next-step-in-eqts-strategic-evolution-2026-01-22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            EQT – EQT to combine with Coller Capital
          </a>
        </li>
        <li>
          <a
            href="https://www.collercapital.com/coller-capital-combines-with-eqt-to-drive-secondaries-growth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Coller Capital – Coller Capital combines with EQT
          </a>
        </li>
        <li>
          <a
            href="https://www.prnewswire.com/news-releases/eqt-to-combine-with-coller-capital-to-enter-secondaries-marking-the-next-step-in-eqts-strategic-evolution-302667689.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            PR Newswire – EQT to combine with Coller Capital
          </a>
        </li>
        <li>
          <a
            href="https://www.bloomberg.com/news/articles/2026-01-22/eqt-to-acquire-secondaries-firm-coller-capital-for-3-2-billion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Bloomberg – EQT to acquire secondaries firm Coller Capital
          </a>
        </li>
        <li>
          <a
            href="https://www.ft.com/content/45fca5a4-4422-4c24-8f26-afc3392afcbe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Financial Times – EQT / Coller deal coverage
          </a>
        </li>
      </ul>
    </>
  ),



  'spacex-ipo-2026': (
    <>
      <LeadParagraph>
        The $1.5 Trillion Launch Window: SpaceX’s 2026 IPO Could Become the Biggest Listing Ever
      </LeadParagraph>
      <TableCard
        title="Biggest IPOs in history"
        className="mb-8"
        header={['Company', 'Year', 'IPO size (approx.)']}
        rows={[
          ['Saudi Aramco', '2019', '$25.6B initially; up to $29.4B including greenshoe'],
          ['Alibaba', '2014', '$21.8B initially; about $25B including greenshoe'],
          ['SoftBank Corp', '2018', 'roughly $23.5B'],
          ['Agricultural Bank of China', '2010', 'about $22.1B (post-overallotment)'],
          ['ICBC', '2006', 'about $21.9B'],
          ['AIA Group', '2010', 'reported around $20.5B in some deal histories'],
          ['General Motors', '2010', 'about $20.1B'],
          ['Visa', '2008', 'about $17.9B'],
        ]}
      />
      <BodyParagraph>
        SpaceX has spent two decades turning a futuristic ambition into repeatable, cash-generating infrastructure. Founded in 2002 to “revolutionize space technology” and ultimately make life multiplanetary, it began as an audacious bet that rockets could be built more like products than bespoke national projects. The early years were precarious and characterized by multiple breakdowns such as the multiple failures of the rocket Falcon 1. All this until it finally reached orbit on September 28, 2008, proving a private company could iterate fast enough to compete in an industry defined by extreme technical risk and huge fixed costs. From that beachhead, SpaceX scaled to Falcon 9 and Dragon. Its commercial logic sharpened into a launch service for customers and governments, plus a longer-term push to own more of the space economy rather than simply sell rides to orbit.
      </BodyParagraph>

      <SectionHeading>
        From “rocket company” to integrated space platform
      </SectionHeading>

      <BodyParagraph>
        A decade later, SpaceX reset expectations by normalizing reusability. In December 2015 it landed an orbital-class first stage after a mission, unlocking higher launch cadence and lower marginal cost while improving operational reliability. The results are visible at scale: in 2025, SpaceX flew more than 160 Falcon 9 missions, with well over 120 supporting Starlink, the satellite internet constellation that has become its financial center of gravity. What makes SpaceX unusual is its vertical integration on the demand side. For example, Dragon proved itself in NASA-grade operations, like the ISS berthing in 2012 and when it crewed Demo-2 in 2020, while Starlink evolved into a global broadband service powered by SpaceX’s own launch tempo. That combination of a launch utility plus a subscription network, now anchors the IPO thesis circulating in markets.
      </BodyParagraph>

      <SectionHeading>
        The IPO “actuality”: a 2026 timeline, a record raise, and a $1.5T ambition
      </SectionHeading>

      <BodyParagraph>
        As of January 2026, talk around a SpaceX IPO has shifted from “if” to “how big, and how soon.” Bloomberg reports the company is advancing plans for a mid-to-late 2026 listing, aiming for about a $1.5 trillion valuation and a raise well above $30 billion. These are numbers that could make it the largest IPO on record. Reuters, separately, points to a raise of more than $25 billion and a valuation that could exceed $1 trillion, framing the debut as potentially historic if conditions hold. SpaceX is also setting a private-market benchmark: Reuters says it opened a secondary share sale valuing the firm near $800 billion, citing a shareholder letter from CFO Bret Johnsen that also warned an IPO isn’t guaranteed. The message: expectations are being anchored and price sensitivity tested before any public-market leap.
      </BodyParagraph>
      <TableCard
        title="Key milestones and strategic evolution (2002–2026)"
        className="mb-8"
        header={['Period / Date', 'What happened', 'Why it matters for the IPO story']}
        rows={[
          ['2002', 'SpaceX founded with multiplanetary mission', 'Sets the long-horizon “platform” narrative investors price in'],
          ['Sept 28, 2008', 'Falcon 1 reaches orbit after multiple failures', 'Proves iteration speed and private-sector viability in high-risk aerospace'],
          ['2012', 'Dragon berths with the ISS', 'Validates NASA-grade execution and operational credibility'],
          ['2020', 'Crew Dragon Demo-2 (crewed mission)', 'Confirms human spaceflight capability and deepens government relationship'],
          ['Dec 2015', 'First successful orbital-class booster landing', 'Reusability becomes a structural cost advantage and cadence enabler'],
          ['2025', '160+ Falcon 9 launches; 120+ support Starlink', 'Shows “aviation-like” tempo and that Starlink is the volume driver'],
          ['Jan 2026 (reported)', 'IPO planning shifts from “if” to “how big/how soon”', 'Markets begin anchoring timeline, valuation expectations, and deal structure'],
        ]}
      />
      <SectionHeading>
        Banks “merge forces”: why this deal needs a heavyweight syndicate
      </SectionHeading>

      <BodyParagraph>
        A $30B+ raise at a $1.5T valuation isn’t a typical IPO; it’s a system-level underwriting job. January 2026 reports say SpaceX is lining up Bank of America, Goldman Sachs, JPMorgan, and Morgan Stanley in senior roles, signaling the need for a heavyweight syndicate with global reach and political and regulatory muscle. On distribution, the deal must tap deep pools of demand, like sovereign wealth funds, pensions, and mega-asset managers, while also designing a retail-access plan that won’t backfire on optics. On execution, the banks have to manage disclosure and review in a business intertwined with government contracts, then support aftermarket stability so volatility doesn’t spiral into narrative risk. In plain terms, they wouldn’t just sell shares; they’d underwrite the credibility of “space infrastructure as a platform” in public markets.
      </BodyParagraph>

      <SectionHeading>
        Valuation logic: Starlink is the anchor, launches are the engine, optionality is the premium
      </SectionHeading>

      <BodyParagraph>
        The market’s willingness to entertain a $1.5T valuation hinges on a simple shift: Starlink turns SpaceX from project-based, cyclical revenue into recurring subscription cash flow. Reporting has underscored the constellation’s scale, composed of more than 9,000 active satellites, and initiatives like direct-to-cell connectivity and space-safety adjustments, which strengthen the case that SpaceX is building durable network infrastructure, not a one-off product. Launch dominance is the engine that keeps that network growing, allowing SpaceX to deploy faster and cheaper than rivals and capture what would otherwise be supplier margin. That creates the flywheel investors are being asked to fund: launches reduce deployment cost; deployment expands Starlink; Starlink demand finances more launches and next-generation systems. If SpaceX raises “significantly more than $30B,” it would surpass Aramco’s IPO and redefine what a “mega-IPO” can be.
      </BodyParagraph>

      <SectionHeading>
        What could still delay the window
      </SectionHeading>

      <BodyParagraph>
        Even with momentum, an IPO isn’t a straight line. Reporting around the secondary sale and IPO preparations has stressed conditionality considering market conditions, execution risk, and the reality that SpaceX operates where public markets intersect with national security and regulation. As the company approaches anything like an S-1 filing, the narrative will shift from mythology to disclosures investors can model such as Starlink churn and pricing power, capex intensity, spectrum strategy, launch reliability, and timelines for next-generation systems. Any weakness in those metrics could widen the valuation debate or slow the process. That’s why the next months matter: not because a listing is guaranteed or immediate, but because each tender-offer price, bank mandate, and public signal narrows the range of plausible outcomes and sets expectations that are hard to unwind once they’re anchored.
      </BodyParagraph>
      <TableCard
          title="Key figures"
          className="mb-8"
          header={['Topic', 'Key figure(s) / info']}
          rows={[
            ['IPO timing (reported)', 'Mid-to-late 2026'],
            ['Target valuation (reported)', 'About $1.5T (range also discussed: >$1T)'],
            ['Target capital raise (reported)', '>$30B (also cited: >$25B)'],
            ['Private-market benchmark (reported)', 'Secondary sale valuation around $800B'],
            ['2025 launch volume', '160+ Falcon 9 launches'],
            ['Starlink-driven launches (2025)', '120+ launches supporting Starlink'],
            ['Starlink constellation scale', '9,000+ active satellites'],
            ['Lead banks (reported)', 'Bank of America, Goldman Sachs, JPMorgan, Morgan Stanley'],
            ['Core valuation thesis', 'Starlink recurring revenue + launch cost/cadence flywheel'],
          ]}
        />
      <SectionHeading>
        Why this IPO would matter beyond SpaceX
      </SectionHeading>

      <BodyParagraph>
        A SpaceX IPO near a $1.5T valuation would function as a referendum on two big questions. First, will public markets pay software-style multiples for infrastructure businesses that require heavy, sustained capital spending? Second, can a company remain mission-driven while becoming a daily-priced public asset, exposed to quarterly scrutiny and sentiment-driven volatility? SpaceX’s 2025 cadence showed it can operate more like an aviation system than a bespoke aerospace program, strengthening the argument that space is becoming an industrial category with scale economics. In 2026, the company would need to convince investors that recurring Starlink revenue and launch-driven cost advantages can coexist with regulatory complexity and geopolitical exposure. If it happens, the listing would not only be enormous, it would mark “space” as a mainstream asset class rather than a frontier bet.
      </BodyParagraph>
        <StatGrid className="mb-8" columns="md:grid-cols-4">
          <StatCard value="$1.5T" label="Target valuation (reported)" helper="Discussed range: >$1T" />
          <StatCard value=">$30B" label="Target raise (reported)" helper="Also cited: >$25B" />
          <StatCard value="$800B" label="Secondary benchmark (reported)" helper="Private-market reference" />
          <StatCard value="9,000+" label="Active satellites" helper="Starlink constellation scale" />
        </StatGrid>
      <BodyParagraph>
        Written by Francesco Kaitsas and Giorgio Gheorghios Tsingros
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>

      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a href="https://www.britannica.com/money/SpaceX" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Britannica – SpaceX
          </a>
        </li>
        <li>
          <a href="https://www.bloomberg.com/news/articles/2025-12-09/spacex-said-to-pursue-2026-ipo-raising-far-above-30-billion" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Bloomberg – SpaceX said to pursue 2026 IPO
          </a>
        </li>
        <li>
          <a href="https://www.reuters.com/business/spacex-pursue-2026-ipo-raising-above-30-billion-bloomberg-news-reports-2025-12-09/" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Reuters – SpaceX pursue 2026 IPO
          </a>
        </li>
        <li>
          <a href="https://www.reuters.com/business/spacex-sets-800-billion-valuation-bloomberg-news-reports-2025-12-13/" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Reuters – SpaceX sets $800 billion valuation
          </a>
        </li>
        <li>
          <a href="https://www.ft.com/content/55235da5-9a3f-4e0f-b00c-4e1f5abdc606" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Financial Times – SpaceX IPO analysis
          </a>
        </li>
        <li>
          <a href="https://dealroom.net/blog/biggest-ipos-of-all-time" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">
            Dealroom – Biggest IPOs of all time
          </a>
        </li>
      </ul>
    </>
  ),




  'switzerland-ma-outlier-2025': (
    <>
      <SectionHeading>
        With $160 Billion of transactions in M&amp;A market, Switzerland had been the outlier in 2025
      </SectionHeading>
      
      <SectionHeading>Record Volumes of Swiss M&amp;A Activity Defies 2025 Macroeconomic Headwinds</SectionHeading>
      <BodyParagraph>
        In 2025, Switzerland emerged as one of Europe’s most active hubs for M&amp;A.
      </BodyParagraph>
      <BodyParagraph>
        Recent estimates put the value of deals involving Swiss companies at more than 160 billion dollars, a record reached under conditions that, on paper, should have held activity back. In fact, the Swiss franc has strengthened by about 14% against the US dollar, trade tensions with the US have led to new tariffs, and global growth remains uneven. Instead of freezing, dealmaking has adapted; Swiss groups are using a strong currency and a very stable domestic environment to consolidate at home and buy strategically abroad.
      </BodyParagraph>

      <StatGrid className="mb-8" columns="md:grid-cols-4">
        <StatCard value="+14%" label="CHF vs USD" helper="Currency strength" />
        <StatCard value="0%" label="Policy rate" helper="SNB rate by mid 2025" />
        <StatCard value="15%" label="US tariffs (framework)" helper="Reduced from 39%" />
      </StatGrid>

      <SectionHeading>Monetary Policy Implications and Capitalizing on Currency Strength</SectionHeading>
      <BodyParagraph>
        To understand why, it helps to look at the broader context. Over the last two years, the Swiss National Bank has been trying to cool down an over-strong currency and prevent inflation from sliding too low. Between 2024 and mid 2025 it cut interest rates step by step to 0%, and signalled that it could go lower if capital kept flowing into the franc. This interest rate is expected not to increase in the future, remaining at 0% for the entire 2026, with inflation that will swing between 0 and 2%. For exporting firms, the situation is difficult: foreign revenues are worth less once converted back into francs, and tougher global demand makes it harder to protect margins. Early 2025 data showed exports under pressure, especially in the chemical and pharmaceutical industries that normally drive the trade surplus.
        For companies that buy other businesses, however, the same environment creates an opportunity. A stronger franc means that assets earning euros or dollars cost less in Swiss currency, as long as the targets are fundamentally sound. Low interest rates at home and generally solid balance sheets also help large Swiss corporations borrow at reasonable cost, while many peers in other countries are still adjusting to higher funding costs.
      </BodyParagraph>

      <SectionHeading>Navigating US Trade Relations: Cross-Border M&amp;A as a Risk Mitigation Strategy</SectionHeading>
      <BodyParagraph>
        The tariff dispute with Washington adds a political dimension. The US first imposed duties of 39% on a wide range of Swiss imports, a serious blow for a country built on high-value exports in sectors such as pharmaceuticals, machinery and precision engineering. After months of talks, a framework deal cut those tariffs to 15%, thanks to the memorandum of understanding between Switzerland, Liechtenstein, and the US in exchange for a commitment that Swiss companies would invest heavily in the US in the coming years and for closer cooperation on trade rules. All these above-mentioned reasons highlight the message for corporate boards that, in a world where tariffs and regulations can change quickly, relying only on exports is risky. Therefore, owning factories, logistics networks or research centres directly inside key markets is a way to reduce that risk. Cross-border M&amp;A becomes not just a growth strategy, but a form of insurance.
      </BodyParagraph>

      <SectionHeading>An analysis of the most important transactions happened in 2025 in Switzerland</SectionHeading>
      <BodyParagraph>
        Within this setting, multiple acquisitions have been noteworthy, and among them, the sale of ABB’s robotics division to SoftBank Group shows how these forces work in practice. In October 2025, ABB agreed to sell the business to SoftBank for 5.375 billion dollars, abandoning earlier plans for a spin-off. The unit, positioned between industrial automation and artificial intelligence, had long been one of ABB’s flagship activities. For ABB, the deal is a way to narrow its focus on core areas like electrification and process automation; for SoftBank, it is a quick way to secure a global robotics platform that fits into its wider tech and AI strategy. The price SoftBank is willing to pay confirms that, even after the post-2021 market correction, strong automation and tech related assets can still command a premium.
        Other important transactions occurred also in various areas. In insurance, Helvetia merged with Baloise thanks to a stock swap where Baloise shareholders received 1.0119 new Helvetia shares for each Baloise share held while Holcim, a building material group, bought the company Xella through a €1.85bn deal increasing its presence into construction and materials recycling companies. In the infrastructure business Mediterranean Shipping Company bought a major expansion in its network thanks to a deal with CK Hutchison, an Hong Kong-based conglomerate. Also Pharma companies, such as Roche and Novartis, carried out various targeted acquisitions to increase their pipeline into oncology and immunology areas.
      </BodyParagraph>

      <TableCard
        title="Top 2025 Deals"
        className="mb-8"
        header={['Company', 'Deal Type', 'Value / Details']}
        rows={[
          ['ABB / SoftBank', 'Divestment ($5.375bn)', 'Focus on core electrification selling Robotics to SoftBank.'],
          ['Helvetia / Baloise', 'Merger', 'Domestic consolidation via stock swap'],
          ['Holcim / Xella', 'Acquisition (€1.85bn)', 'Bought Xella to expand into sustainable construction materials market.'],
          ['Roche & Novartis', 'Acquisitions', 'Securing future pipelines in Oncology & Immunology.'],
          ['MSC', 'Expansion', 'Infrastructure deal with CK Hutchison.'],
        ]}
      />

      <SectionHeading>Comparative Analysis of Switzerland’s Outperformance in a Fragmented European Market</SectionHeading>
      <BodyParagraph>
        Seen against the global picture, Switzerland’s role is even more striking. Worldwide M&amp;A has recovered from the lows of 2022 and 2023, but total deal value remains far below the 2021 peak. North America accounts for most of the activity, Europe is softer and more fragmented, and many mid-sized companies still struggle to access capital on good terms. Within this weaker European environment, Switzerland stands out with record volumes and a deal mix heavily tilted toward sectors that matter politically as well as economically: industrial technology, energy-efficient construction, financial services and advanced healthcare.
        For anyone looking at how finance interacts with politics and economics, Switzerland in 2025 is more than a niche case, it could be considered as a safe-haven currency and low rates hub, giving to its companies the firepower to act while others hesitate.
        However, trade conflict with the USA did not stop capital from moving; it redirected it into ownership of real assets on American soil, and M&amp;A is the bridge between these forces, turning exchange rates, interest-rate decisions and tariff threats into very concrete outcomes.
      </BodyParagraph>

      <BodyParagraph>
        In that sense, the Swiss deal wave is not just another busy year in a small market, but it can be considered as a preview of how companies elsewhere may respond as the world becomes more fragmented: by using deals not only to grow, but to decide on which side of the new economic borders they want, and need to stand.
      </BodyParagraph>

      <BodyParagraph>
        Written by Giorgio Gheorghios Tsingros and Francesco Kaitsas
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://www.ft.com/content/13bb7aca-b46e-4460-aab7-24d81410bb62?utm_social_post_id=622481744&utm_social_handle_id=4697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Financial Times – Swiss M&amp;A coverage
          </a>
        </li>
        <li>
          <a
            href="https://www.swissinfo.ch/eng/various/swiss-interest-rates-remain-at-0/90620169"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            swissinfo.ch – Swiss interest rates remain at 0
          </a>
        </li>
        <li>
          <a
            href="https://www.s-ge.com/en/article/news/2025-e-usa-ct10-reduction-additional-tariffs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            S-GE – Reduction / additional tariffs update
          </a>
        </li>
        <li>
          <a
            href="https://taxpartner.ch/en/swiss-exporters-face-rising-pressure-from-u-s-tariffs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Tax Partner – Swiss exporters face rising pressure from U.S. tariffs
          </a>
        </li>
      </ul>
    </>
  ),

  'bending-spoons-eventbrite-2025': (
    <>
      {/* Title + lead section */}
      <SectionHeading>
        BENDING SPOONS BETS BIG ON LIVE EVENTS WITH $500 MILLION EVENTBRITE DEAL
      </SectionHeading>
      <BodyParagraph>
        Italy’s Bending Spoons is making another major move on the global tech stage with a plan to acquire
        Eventbrite in an all-cash transaction, which is valued at roughly $500 million. Under the terms of the
        definitive agreement, Eventbrite shareholders will receive $4.50 in cash per share, representing an 82%
        premium over the company’s 60-day volume-weighted average share price as of 1 December 2025. Once
        completed, a closing currently expected in the first half of 2026, subject to shareholder and regulatory
        approvals, the deal will take Eventbrite private and mark the end of its life as a listed company.
      </BodyParagraph>

      {/* Key figures for the deal */}
      <StatGrid className="mb-8" columns="md:grid-cols-3">
        <StatCard value="$500M" label="Deal value" helper="All-cash transaction" />
        <StatCard value="$4.50" label="Per-share offer" helper="Cash per share" />
        <StatCard value="82%" label="Premium" helper="Over 60-day VWAP" />
      </StatGrid>

      <TableCard
        title="Key Metrics and Portfolio Highlights"
        className="mb-8"
        header={['Item', 'Detail']}
        rows={[
          ['Transaction value', '$500 million (all cash)'],
          ['Per-share price', '$4.50'],
          ['Premium over 60-day VWAP', '82%'],
          ['Countries served by Eventbrite', '≈180'],
          ['Paid tickets in 2024', '83+ million'],
          ['Events in 2024', '4.7+ million'],
          ['Bending Spoons equity round', '$710 million (2025)'],
          ['Bending Spoons valuation', '$11 billion pre-money'],
          ['Vimeo acquisition', '≈$1.38 billion (all cash)'],
          ['AOL acquisition', '≈$1.4–1.5 billion (reported)'],
        ]}
      />

      <SectionHeading>Eventbrite&apos;s Role in the Experience Economy</SectionHeading>
      <BodyParagraph>
        Eventbrite is one of the best-known brands in the so-called experience economy. Founded in 2006 by
        Julia Hartz, Kevin Hartz and Renaud Visage, it has grown into a global events marketplace serving
        creators and attendees in nearly 180 countries. In 2024, the platform distributed more than 83 million
        paid tickets across over 4.7 million events, ranging from concerts and festivals to local workshops and
        community meetups. Despite this scale, revenue growth has largely stalled in recent years, leaving
        Eventbrite in a position where a new owner with fresh capital and a more aggressive product strategy
        could meaningfully change its trajectory.
      </BodyParagraph>

      <SectionHeading>Bending Spoons&apos; Acquisition Model and Portfolio</SectionHeading>
      <BodyParagraph>
        For Bending Spoons, Eventbrite is the latest addition to a rapidly expanding portfolio of mature
        digital platforms. In the past few years, the Milan-based company has announced or completed
        acquisitions of Vimeo (approximately $1.38 billion in an all-cash deal), AOL (in a transaction reported
        around $1.4–1.5 billion), and Brightcove, alongside earlier deals involving Evernote, WeTransfer,
        Meetup, komoot, Harvest, Remini, StreamYard and others. This acquisition spree has been supported by a
        recent $710 million equity round at an $11 billion pre-money valuation, giving Bending Spoons the
        financial firepower to continue buying and overhauling established software brands rather than
        building everything from scratch.
      </BodyParagraph>

      <SectionHeading>A &quot;Product-Led Private Equity&quot; Playbook</SectionHeading>
      <BodyParagraph>
        The company’s model has often been compared to a form of “product-led private equity”. Instead of
        taking early-stage bets, Bending Spoons targets mature platforms with large user bases but
        underexploited economics, aiming to revive growth through deep changes in product, pricing and
        operations. Official communications describe a playbook focused on upgrading core technology,
        redesigning user interfaces, accelerating feature releases and re-architecting organisations for higher
        long-term performance, while keeping portfolio companies under ownership for the foreseeable future
        rather than flipping them quickly.
      </BodyParagraph>

      <SectionHeading>Product Roadmap for Eventbrite</SectionHeading>
      <BodyParagraph>
        In the case of Eventbrite, management teams from both sides have already outlined an initial roadmap.
        Bending Spoons CEO Luca Ferrari has highlighted several priorities to be explored after the closing:
        building a dedicated messaging feature so organisers and attendees can communicate more effectively;
        introducing AI-powered tools to make event creation faster and less intimidating; improving search and
        discovery to help users find the right events more easily; and developing a secondary ticket
        marketplace in a more structured and transparent way. Additional areas of focus include stronger
        protections against event-related fraud and enhanced marketing analytics capabilities, giving creators
        better insight into ticket sales and audience engagement.
      </BodyParagraph>

      <SectionHeading>Competitive Landscape and Market Positioning</SectionHeading>
      <BodyParagraph>
        From a competitive perspective, the deal positions Bending Spoons more squarely in the global ticketing
        and live events space, where players such as Ticketmaster and newer platforms like Dice already have a
        strong presence. Eventbrite’s distinctive role has historically been to “democratise” event creation,
        making it easier for smaller organisers and independent creators to sell tickets without relying on
        large ticketing firms. If Bending Spoons can successfully deliver on its product plans without
        alienating this base, for instance through overly aggressive pricing changes, the combination of
        Eventbrite’s reach and its own product and AI capabilities could strengthen Eventbrite’s position in
        small-to-mid-sized events and niche communities.
      </BodyParagraph>

      <SectionHeading>Risks and Execution Challenges</SectionHeading>
      <BodyParagraph>
        The acquisition is not without risks. Integrating yet another sizeable platform into an already
        crowded portfolio raises execution questions, particularly as Bending Spoons is still in the process
        of absorbing Vimeo and AOL. Eventbrite itself has faced challenges, including periods of flat revenue
        growth and pressure to improve profitability, which will not disappear overnight simply because
        ownership changes. The deal must also navigate shareholder and regulatory approvals, and any delays or
        market volatility could affect sentiment around the transaction. Some commentators have also noted that
        Bending Spoons has, in other acquisitions, paired its product investments with restructuring efforts
        and changes to monetisation, moves that can be unpopular with parts of the user base even if they
        improve financial metrics over time.
      </BodyParagraph>

      <SectionHeading>Implications for Shareholders and European Tech</SectionHeading>
      <BodyParagraph>
        Nonetheless, the 82% premium embedded in the $4.50 offer suggests that many shareholders may view the
        proposal as an attractive exit from a stock that has struggled to regain its former market enthusiasm.
        For Bending Spoons, the price implies a relatively modest revenue multiple compared with high-growth
        software peers, reflecting a focus on margin expansion and operational turnaround rather than on paying
        for future hyper-growth. For the broader European tech ecosystem, the transaction is another signal
        that large-scale, product-centric acquirers can emerge from Europe, not just the United States, and can
        play a central role in reshaping global digital infrastructure.
      </BodyParagraph>

      <SectionHeading>A High-Stakes Test for Bending Spoons&apos; Playbook</SectionHeading>
      <BodyParagraph>
        If the integration is successful, this acquisition could become a reference case for how a European
        scale-up can use patient capital and aggressive product execution to revitalise a key player in the
        live events industry. If it fails, it will serve as a reminder of how difficult it is to turn around
        complex, two-sided marketplaces at scale. For now, what is clear is that Bending Spoons is doubling
        down on its belief that the future of live experiences will be built on software, and that owning the
        platforms behind those experiences is a bet worth $500 million.
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://investor.eventbrite.com/press-releases/press-releases-details/2025/Eventbrite-Enters-into-Definitive-Agreement-to-Be-Acquired-by-Bending-Spoons-for-Roughly-500-Million-to-Accelerate-Eventbrites-Next-Phase-of-Growth/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Eventbrite - Eventbrite Enters into Definitive Agreement to Be Acquired by Bending Spoons for
            Roughly $500 Million to Accelerate Eventbrite’s Next Phase of Growth
          </a>
        </li>
        <li>
          <a
            href="https://www.eu-startups.com/2025/12/italys-trailblazer-bending-spoons-adds-eventbrite-to-portfolio-in-e430-million-all-cash-acquisition/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            EU-Startups - Italy’s Bending Spoons adds Eventbrite to portfolio in €430 million all-cash
            acquisition
          </a>
        </li>
        <li>
          <a
            href="https://techfundingnews.com/bending-spoons-to-acquire-events-platform-eventbrite-in-500m-deal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Tech Funding News - Bending Spoons to acquire events platform Eventbrite in $500M deal
          </a>
        </li>
        <li>
          <a
            href="https://it.investing.com/news/stock-market-news/bending-spoons-acquista-eventbrite-per-500-million--in-operazione-cash-3120808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Investing.com (IT) - Bending Spoons acquista Eventbrite per $500 million in operazione cash
          </a>
        </li>
        <li>
          <a
            href="https://www.startupbusiness.it/en/710-million-dollar-round-for-bending-spoons/148161/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Startupbusiness - $710 million round for Bending Spoons
          </a>
        </li>
        <li>
          <a
            href="https://www.businesswire.com/news/home/20251030216227/en/Bending-Spoons-Raises-%24710M-for-Continued-Investment-and-Growth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Business Wire - Bending Spoons Raises $710M for Continued Investment and Growth
          </a>
        </li>
        <li>
          <a
            href="https://www.theverge.com/news/775701/vimeo-bending-spoons-acquisition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            The Verge - Vimeo to be acquired by Bending Spoons
          </a>
        </li>
        <li>
          <a
            href="https://www.wsj.com/business/media/internet-pioneer-aol-to-be-acquired-by-tech-company-bending-spoons-8b0200ba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            The Wall Street Journal - Internet Pioneer AOL to Be Acquired by Tech Company Bending Spoons
          </a>
        </li>
      </ul>
    </>
  ),

  'tether-sp-downgrade-2025': (
    <>
      {/* Original text, unchanged */}
      <LeadParagraph>
        S&amp;P DOWNGRADES TETHER’S ASSETS TO LOWEST LEVEL
      </LeadParagraph>

      <SectionHeading>A Critical Moment for the World’s Largest Stablecoin</SectionHeading>
      <BodyParagraph>
        S&amp;P Global Ratings has downgraded the reserves backing Tether’s stablecoin USDT to its
        lowest assessment level, raising new concerns about the stability of the world’s largest
        digital dollar token.
      </BodyParagraph>
      <BodyParagraph>
        Tether issues USDT, a cryptocurrency designed to stay equal in value to the U.S. dollar
        through a mechanism known as a “peg”, which means that one USDT should always be
        redeemable for one dollar.
      </BodyParagraph>
      <BodyParagraph>
        With around $184 billion outstanding, USDT plays a central role in the global crypto
        ecosystem, particularly in emerging markets where access to real dollars is limited. The
        downgrade represents a crucial moment in how traditional financial institutions assess the
        risks behind Tether’s reserve structure.
      </BodyParagraph>

      <SectionHeading>Rising Risk Exposure and Transparency Gaps</SectionHeading>
      <BodyParagraph>
        S&amp;P lowered its rating from 4 (constrained) to 5 (weak), citing two main issues: a
        rising share of high-risk assets in Tether’s reserves and persistent gaps in transparency.
      </BodyParagraph>
      <BodyParagraph>
        According to the agency, assets such as bitcoin, gold, secured loans and corporate bonds
        accounted for 24% of Tether’s reserves at the end of September, compared with 17% a year
        earlier. Bitcoin alone represents 5.6% while Tether’s surplus reserves amount to only 3.9%.
      </BodyParagraph>
      <BodyParagraph>
        S&amp;P warned that if bitcoin or other volatile assets fall sharply, the reserves could
        temporarily become insufficient to fully back all USDT in circulation, making it harder to
        maintain the “peg”. The rating agency also noted that Tether provides little information
        about the reliability of the banks and custodians holding its reserves and offers few
        details on how it values its more complex investments.
      </BodyParagraph>
      <BodyParagraph>
        Despite these concerns, most of Tether’s reserves remain in high-quality assets such as
        U.S. Treasuries and cash equivalents which currently make up around 77% of the total. S&amp;P
        acknowledged that USDT has shown strong stability during major stress events, including
        crypto market crashes and exchange failures.
      </BodyParagraph>
      <BodyParagraph>
        However, the agency stated that the growing share of higher-risk assets makes USDT more
        vulnerable to market swings, and the downgrade comes at a time when the crypto sector is
        already under pressure, with bitcoin down roughly 30% since early October. Analysts added
        that worries about Tether’s reserves have increased uncertainty in the market, as further
        declines in bitcoin could weaken the value of the assets backing the stablecoin.
      </BodyParagraph>

      <SectionHeading>Tether Pushes Back Against S&amp;P’s Framework</SectionHeading>
      <BodyParagraph>
        Tether strongly disagreed with S&amp;P’s assessment, saying that the agency uses a
        traditional finance framework that does not reflect how digital assets operate. The company
        pointed to its history of maintaining stability through market turbulence and highlighted
        its real-time reserve reporting and quarterly attestations by BDO Italy.
      </BodyParagraph>
      <BodyParagraph>
        That said, Tether still does not provide full independent audits, which remains a key
        concern for analysts and regulators.
      </BodyParagraph>
      <BodyParagraph>
        Paolo Ardoino, Tether’s CEO, criticized the downgrade even more directly, writing that the
        company “wears your loathing with pride”. He argued that legacy credit-rating models are
        outdated and that Tether’s “overcapitalized” structure challenges traditional finance,
        although analysts noted that these statements did not address the specific transparency
        gaps raised by S&amp;P.
      </BodyParagraph>
      <QuoteBlock>
        « Paolo Ardoino, Tether’s CEO, criticized the downgrade even more directly, writing that
        the company “wears your loathing with pride”. »
      </QuoteBlock>
      <SectionHeading>Expansion Risks and a New U.S. Regulatory Landscape</SectionHeading>
      <BodyParagraph>
        Additional questions have emerged regarding Tether’s expansion into other sectors such as
        energy, data, finance and education. S&amp;P said it is unclear whether these operations
        are financially separate from the stablecoin business, which may introduce additional risks
        compared with more regulated competitors like Circle, the issuer of USDC.
      </BodyParagraph>
      <BodyParagraph>
        Regulation is also tightening in the U.S. through the new GENIUS Act, which requires
        stablecoins to be backed entirely by short-dated U.S. Treasuries and other liquid assets.
      </BodyParagraph>
      <BodyParagraph>
        This framework aligns more closely with the reserve structure of other issuers, while
        Tether continues to hold secured loans (still 8% of reserves, or over $14 billion,
        according to BDO Italy) despite earlier promises to eliminate them.
      </BodyParagraph>

      <SectionHeading>Growing Scrutiny on the USDT Model</SectionHeading>
      <BodyParagraph>
        In conclusion, S&amp;P’s downgrade highlights mounting concerns over the clarity and
        stability of the reserves backing USDT. Tether insists on its resilience, yet its growing
        exposure to volatile assets raises questions that remain unanswered. As the stablecoin
        industry matures, only time will tell whether USDT’s model can withstand increasing
        scrutiny and shifting market conditions.
      </BodyParagraph>

      {/* Stats based solely on numbers already present in the text */}
      <StatGrid className="mb-8" columns="md:grid-cols-3">
        <StatCard value="$184B" label="USDT outstanding" helper="Approximate supply" />
        <StatCard value="24%" label="High-risk assets" helper="BTC, gold, loans, bonds" />
        <StatCard value="77%" label="Treasuries & cash equivalents" helper="Share of reserves" />
      </StatGrid>

      <TableCard
        title="Reserve Composition & Key Indicators"
        className="mb-8"
        header={['Item', 'Detail']}
        rows={[
          ['Previous S&P rating', '4 (constrained)'],
          ['New S&P rating', '5 (weak)'],
          ['High-risk assets (BTC, gold, loans, bonds)', '24% of reserves'],
          ['Share one year earlier', '17% of reserves'],
          ['Bitcoin share', '5.6% of reserves'],
          ['Surplus reserves', '3.9%'],
          ['Safe assets (U.S. Treasuries + cash equivalents)', '≈77% of reserves'],
          ['Secured loans', '8% of reserves (≈$14B)'],
        ]}
      />


      <BodyParagraph>
        Written by Francesco Baci Paci and Giovanni Ciccarello
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>

      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://www.ft.com/content/974926ba-d295-4679-a4ed-7846b7f4242e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Financial Times – Coverage of Tether S&P Downgrade
          </a>
        </li>
        <li>
          <a
            href="https://www.idnfinancials.com/news/59149/bitcoin-exposure-rises-sp-downgrades-usdt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            IDN Financials – Bitcoin exposure rises, S&P downgrades USDT
          </a>
        </li>
        <li>
          <a
            href="https://www.reuters.com/business/finance/tethers-stablecoin-downgraded-weak-sp-assessment-2025-11-26/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Reuters – Tether's stablecoin downgraded to 'weak' S&P assessment
          </a>
        </li>
        <li>
          <a
            href="https://finance.yahoo.com/news/p-downgrades-tether-lowest-rating-221830375.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Yahoo Finance – S&P downgrades Tether to lowest rating
          </a>
        </li>
      </ul>
    </>
  ),

  'sustainable-finance-esg-2024': (
    <>
      <LeadParagraph>
        A 10 billion dollar transaction insert Pfizer in the business of Anti-Obesity drugs
      </LeadParagraph>

      <BodyParagraph>
        The American Pharmaceutical company Pfizer had completed the acquisition of the obesity drugs
        start-up Metsera for nearly 10 billion dollars overcoming its strongest competitor the Danish
        company Novo Nordisk. Pfizer is the fourth Pharma Company for revenues in 2024, with 63.5
        billion dollars in revenues and 45.7 billion dollars in gross profit in 2024. At the date of
        this Article publication, its shares have a value of nearly 22 dollars and its market cap is
        142.37 billion dollars placing it at the 11th place in market cap ranking for Pharma companies.
      </BodyParagraph>

      <SectionHeading>The M&amp;A Battle for Metsera</SectionHeading>

      <BodyParagraph>
        This strife for Metsera acquisition started nearly two months ago at the end of September with
        the first offer made by Pfizer of 7.3 billion dollars. Afterward, an unexpected offer was
        performed by the Danish Pharma company at the end of October and after a period of legal
        challenges the bidding was won by the American company with a deal worth 2.7 billion dollars
        more than the previous agreement from September. On the 7th of November, the New-York based
        company announced the acquisition of Metsera. From a technical point of view, Pfizer bought all
        the outstanding Metsera shares for 86.25 dollars per share in cash. This price was a premium of
        3.69% to Metsera’s Friday, the 7th of November, close that was 83.18 dollars per share. This
        amount was composed of a base of 65.60 dollars per share in cash, that represented a value of
        nearly 7.0 billion dollars. To this amount, they could add a contingent value right (CVR), a
        contractual right should certain future events or milestones be met, of up to 20.65 dollars per
        share if they were to achieve three specified clinical and regulatory milestones. After the
        acquisition Metsera became a subsidiary of Pfizer causing an end to the trading of Metsera
        shares on the NASDAQ Global Select Market.
      </BodyParagraph>

      <TableCard
        title="Key Terms of the Metsera Acquisition"
        className="mb-8"
        header={['Item', 'Detail']}
        rows={[
          ['Buyer', 'Pfizer Inc.'],
          ['Target', 'Metsera'],
          ['Headline value', '$10 billion (approx.)'],
          ['Initial Pfizer offer (Sept.)', '$7.3 billion'],
          ['Final per-share price', '$86.25 per share (cash)'],
          ['Premium vs. last close', '3.69% vs. $83.18'],
          ['Base price', '$65.60'],
          ['Contingent value price (CVR)', 'Up to $20.65']
        ]}
      />

      <SectionHeading>Metsera&apos;s Pipeline</SectionHeading>

      <BodyParagraph>
        From a medical point of view, this M&amp;A movement allowed Pfizer to expand its portfolio with
        various drugs. The first is MET-097i, a weekly and monthly injectable GLP-1 receptor agonist
        (RA) ready to begin Phase 3 research phase. Then Metsera is also developing a Phase 1 drug
        MET-233i, a monthly amylin analog, to be used both in monotherapy and in combination with the
        previous cited drug. Finally, they have an oral GLP-1 RA still in Phase 1 development and a
        preclinical drug composed by a nutrient-stimulated hormone. Citi for the financial part and
        Wachtell, Lipton, Rosen &amp; Katz for the legal one advised Pfizer for this transaction.
      </BodyParagraph>

      <TableCard
        title="Metsera Obesity &amp; Metabolic Pipeline"
        className="mb-8"
        header={['Asset', 'Type', 'Indication / Use', 'Stage']}
        rows={[
          [
            'MET-097i',
            'Injectable GLP-1 receptor agonist (weekly & monthly)',
            'Obesity',
            'Ready to begin Phase 3',
          ],
          [
            'MET-233i',
            'Monthly amylin analog',
            'Monotherapy & combination with MET-097i',
            'Phase 1',
          ],
          ['Oral GLP-1 RA', 'Oral GLP-1 receptor agonist', 'Obesity / metabolic diseases', 'Phase 1'],
          [
            'Preclinical asset',
            'Nutrient-stimulated hormone–based drug',
            'Metabolic disorders',
            'Preclinical',
          ],
        ]}
      />

      <SectionHeading>Strategic Rationale</SectionHeading>

      <BodyParagraph>
        Even though it will take some time for Metsera drugs to enter effectively into the market and
        its obesity treatments still are in an early-stage development, confirming its unproven
        efficiency, many are the reasons for this acquisition. Firstly, Leerink Partners analyst David
        Risinger projected that Metsera’s two top drugs, MET-097i and MET-233i might reach $5 billion in
        combined peak sales. Secondly, they will put Pfizer into a market whose value will reach 150
        billion dollars at its peak in the next decade in accordance with projections of a Morgan Stanley
        Research. Nevertheless, Courtney Breen, a Bernstein analyst, stated that this high price was full
        of optimism, reinforcing the fact that Pfizer must reach 11 billion dollars in revenue by 2040,
        nearly doubling Metsera’s current projections.
      </BodyParagraph>

      <SectionHeading>Metsera’s Financial Profile</SectionHeading>

      <BodyParagraph>
        Concerning the acquired start-up, the Metsera Company was founded in 2022 and it has always been
        highly focused in development of treatment for obesity and metabolic diseases. Its financial
        statements of the past two years showed a net loss of 47.2 million dollars in 2023 that
        increased to 209.1 million dollars in 2024. This can be explained by the completely absence of
        revenues and an high expense in Research and Development. Its total assets increased to 450.9
        million in 2024, whose 80% is Cash and Cash Receivables. Moreover, its debt to equity ratio was
        nearly 0.6 for 2024. At the end of 2024, they increase cash amount of 278.1 million caused mainly
        by stock issuance due to the negative cash from operating activity of 100 million dollars.
      </BodyParagraph>

      <TableCard
        title="Metsera Key Financials (2023–2024)"
        className="mb-8"
        header={['Metric', '2023', '2024']}
        rows={[
          ['Net loss', '$47.2M', '$209.1M'],
          ['Total assets', '-', '$450.9M'],
          ['Share of cash in total assets', '-', '≈80%'],
          ['Debt-to-equity ratio', '-', '≈0.6'],
        ]}
      />

      <BodyParagraph>
        In conclusion, this acquisition worth 10 billion dollars allows Pfizer to enter the obesity drug
        market getting closer to two leader Pharma companies in this market, Eli Lilly and Company and
        Novo Nordisk.
      </BodyParagraph>

      <BodyParagraph>Written by Francesco Kaitsas</BodyParagraph>

      <SectionHeading>References</SectionHeading>

      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://www.pfizer.com/news/press-release/press-release-detail/pfizer-completes-acquisition-metsera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Pfizer – Press release: Pfizer completes acquisition of Metsera
          </a>
        </li>
        <li>
          <a
            href="https://www.ft.com/content/d9f58a26-5395-4acb-8dfc-d55cb53f946e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Financial Times – Coverage of the Metsera acquisition
          </a>
        </li>
        <li>
          <a
            href="https://www.reuters.com/business/healthcare-pharmaceuticals/pfizer-sweetens-offer-metsera-bidding-war-against-novo-bloomberg-news-reports-2025-11-08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Reuters – Pfizer sweetens offer for Metsera in bidding war against Novo Nordisk
          </a>
        </li>
        <li>
          <a
            href="https://www.cnbc.com/2025/11/08/metsera-accepts-pfizers-10-billion-bid-in-ongoing-ma-battle.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            CNBC – Metsera accepts Pfizer&apos;s $10 billion bid
          </a>
        </li>
        <li>
          <a
            href="https://www.morganstanley.com/insights/articles/weight-loss-medication-market-unstoppable-growth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Morgan Stanley – Weight-loss medication market analysis
          </a>
        </li>
        <li>
          <a
            href="https://finance.yahoo.com/quote/PFE/financials/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Yahoo Finance – Pfizer (PFE) financials
          </a>
        </li>
        <li>
          <a
            href="https://finance.yahoo.com/quote/MTSR/financials/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Yahoo Finance – Metsera (MTSR) financials
          </a>
        </li>
      </ul>
    </>

  ),
};


export default function ArticleDetailPage() {
  const { slug } = useParams();

  // Find metadata from siteData
  const metadata = siteArticles.find(a => a.slug === slug);
  const Content = articleContents[slug];

  if (!metadata || !Content) {
    return (
      <div className="min-h-screen flex flex-col bg-[#051C2C]">
        <Header />
        <ArticleNotFound />
        <Footer />
      </div>
    );
  }

  // Merge metadata with content
  const article = {
    ...metadata,
    content: Content
  };

  const relatedArticles = siteArticles.filter((a) => a.slug !== slug);

  const siteUrlRaw = import.meta.env.VITE_SITE_URL || window.location.origin;
  const siteUrl = siteUrlRaw.trim().replace(/\/+$/, '');
  const canonicalUrl = `${siteUrl}/articles/${slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#051C2C]">
      <SEO
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url={`/articles/${slug}`}
        type="article"
      />

      <Header />
      <ArticleLayout article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
}
