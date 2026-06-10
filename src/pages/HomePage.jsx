import { useState } from 'react';
import { PRACTICES } from '../data/siteContent';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import PracticeShowcase from '../components/PracticeShowcase';
import Founder from '../components/Founder';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function HomePage() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      <Loader onComplete={() => setHeroReady(true)} />
      <Hero ready={heroReady} />
      <Ecosystem />
      <div className="show-stack" id="products">
        {PRACTICES.slice(0, 2).map((practice, i) => (
          <div key={practice.id} className="show-sticky" style={{ '--stack-i': i + 1 }}>
            <PracticeShowcase practice={practice} />
          </div>
        ))}
      </div>
      <Founder />
      <FAQ />
      <CTA />
    </>
  );
}
