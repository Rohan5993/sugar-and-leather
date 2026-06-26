import { HOMEPAGE_COMMUNITY } from '../data/siteContent';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import Button from './ui/Button';

export default function HomeCommunity() {
  return (
    <section className="section surface-light" id="community" data-screen-label="Community">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>{HOMEPAGE_COMMUNITY.eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {HOMEPAGE_COMMUNITY.title}
            </SplitText>
          </div>
          <Reveal as="p" className="lead" delay={1}>
            {HOMEPAGE_COMMUNITY.body}
          </Reveal>
        </div>
        <Reveal delay={2}>
          <Button href={HOMEPAGE_COMMUNITY.cta.href} variant="cream" className="community-cta">
            {HOMEPAGE_COMMUNITY.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
