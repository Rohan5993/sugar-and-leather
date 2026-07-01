import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

export default function ExpertiseSection({ expertise, tone = 'light' }) {
  if (!expertise?.items?.length) return null;

  return (
    <section className={`section page-expertise surface-${tone}`}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>{expertise.eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {expertise.title}
            </SplitText>
            {expertise.intro ? (
              <Reveal as="p" className="page-body page-body--wide" delay={1}>
                {expertise.intro}
              </Reveal>
            ) : null}
          </div>
        </div>
        <ul className="expertise-grid">
          {expertise.items.map((item, i) => (
            <Reveal as="li" className="expertise-chip" key={item} delay={i % 6}>
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
