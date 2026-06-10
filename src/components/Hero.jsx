import { useEffect } from 'react';
import { useHeroParallax } from '../hooks/useParallax';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import Button from './ui/Button';
import MarqueeStrip from './MarqueeStrip';

export default function Hero({ ready }) {
  const heroBgRef = useHeroParallax();

  useEffect(() => {
    if (!ready) return;
    document.querySelectorAll('.hero [data-reveal], .hero .split').forEach((el) => {
      el.classList.add('in');
    });
  }, [ready]);

  return (
    <section className="hero" data-screen-label="Hero">
      <div
        className="hero-bg"
        id="heroBg"
        ref={heroBgRef}
        style={{ backgroundImage: "url('/assets/photo-coaching-library.png')" }}
      />
      <div className="hero-scrim" />
      <div className="hero-grain" />
      <div className="hero-content wrap">
        <div className="hero-center">
          <Reveal as={Eyebrow} center className="hero-eyebrow" delay={1}>
            Executive coaching &amp; strategic AI leadership
          </Reveal>
          <SplitText as="h1" className="display" id="heroTitle">
            Stay deeply human while
            <br />
            you lead the machine
          </SplitText>
          <Reveal as="p" className="hero-sub" delay={3}>
            World-class coaching and AI leadership for the people and organizations brave enough to
            lead through change and growth in today&apos;s world.
          </Reveal>
          <Reveal className="hero-actions" delay={4}>
            <Button href="#cta">Begin a conversation</Button>
            <Button href="#ecosystem" variant="outline" showArrow={false}>
              Explore the ecosystem
            </Button>
          </Reveal>
        </div>
      </div>
      <MarqueeStrip />
    </section>
  );
}
